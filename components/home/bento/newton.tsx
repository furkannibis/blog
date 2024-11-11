/* eslint-disable react/no-array-index-key */
'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Body, Composite, Constraint, Engine, MouseConstraint } from 'matter-js'

const GRAVITY_DEFAULT_VALUE = 0.0036

const items = ['/brain.png', '/brain.png', '/brain.png', '/brain.png']

export default function PhysicsAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<Engine>()
    const [referenceCoords, setReferenceCoords] = useState<{ x: number; y: number }[]>(
        Array(items.length).fill({ x: 0, y: 0 }),
    )
    const boxesRef = useRef<
        {
            body: Body
            elem: HTMLElement
            render(): void
        }[]
    >([])
    const constraintsRef = useRef<Constraint[]>([])
    const limitsRef = useRef<{
        ground?: Body
        leftWall?: Body
        rightWall?: Body
        ceil?: Body
    }>({})

    const refsRef = useRef<HTMLElement[]>([])

    const getDegFromCathetus = useCallback((x: number, y: number) => Math.atan2(x, y) * (180 / Math.PI), [])

    const getContent = useCallback((matter: typeof import('matter-js')) => {
        if (!containerRef.current) return { boxes: [], constraints: [] }

        const boxes = refsRef.current.map((elem, i) => ({
            body: matter.Bodies.rectangle(
                (containerRef.current!.clientWidth * (i + 1)) / 5,
                containerRef.current!.clientHeight / 4,
                elem.clientWidth,
                elem.clientHeight,
                {
                    inertia: Infinity,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 0,
                },
            ),
            elem,
            render() {
                if (elem.clientHeight && elem.clientWidth) {
                    const { x, y } = this.body.position
                    elem.style.top = `${y - elem.clientHeight / 2}px`
                    elem.style.left = `${x - elem.clientWidth / 2}px`

                    setReferenceCoords((prev) => {
                        const newCoords = [...prev]
                        newCoords[i] = {
                            x: (containerRef.current!.clientWidth * (i + 1)) / 5 - x,
                            y,
                        }
                        return newCoords
                    })
                }
            },
        }))

        const anchors = refsRef.current.map((elem, i) =>
            matter.Bodies.rectangle((containerRef.current!.clientWidth * (i + 1)) / 5, 0, 2, 2, {
                friction: 0,
                isStatic: true,
            }),
        )

        const constraints = boxes.map((box, i) =>
            matter.Constraint.create({
                bodyA: box.body,
                bodyB: anchors[i],
                length: containerRef.current!.clientHeight / 4,
                stiffness: 0.01,
            }),
        )

        return { boxes, constraints }
    }, [])

    const getLimits = useCallback((matter: typeof import('matter-js')) => {
        if (!containerRef.current) return {}

        const ceil = matter.Bodies.rectangle(
            containerRef.current.clientWidth / 2,
            -60 / 2,
            containerRef.current.clientWidth,
            60,
            {
                isStatic: true,
                friction: 1,
            },
        )
        const ground = matter.Bodies.rectangle(
            containerRef.current.clientWidth / 2,
            containerRef.current.clientHeight + 60 / 2,
            containerRef.current.clientWidth,
            64,
            { isStatic: true, friction: 1 },
        )
        const leftWall = matter.Bodies.rectangle(
            containerRef.current.clientWidth + 60 / 2,
            containerRef.current.clientHeight / 2,
            60,
            containerRef.current.clientHeight,
            { isStatic: true, friction: 1 },
        )
        const rightWall = matter.Bodies.rectangle(
            -60 / 2,
            containerRef.current.clientHeight / 2,
            60,
            containerRef.current.clientHeight,
            { isStatic: true, friction: 1 },
        )

        return { ground, leftWall, rightWall, ceil }
    }, [])

    const initialization = useCallback(
        (matter: typeof import('matter-js')) => {
            if (!containerRef.current) return

            const engine = matter.Engine.create({ gravity: { scale: GRAVITY_DEFAULT_VALUE } })
            engineRef.current = engine

            const { boxes, constraints } = getContent(matter)
            const { ground, leftWall, rightWall, ceil } = getLimits(matter)

            boxesRef.current = boxes
            constraintsRef.current = constraints
            limitsRef.current = { ground, leftWall, rightWall, ceil }

            const mouse = matter.Mouse.create(containerRef.current)
            const mouseConstraint = matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            })

            matter.Composite.add(
                engine.world,
                [
                    ...boxes.map((b) => b.body),
                    ...constraints,
                    leftWall,
                    rightWall,
                    ceil,
                    ground,
                    mouseConstraint,
                ].filter(Boolean) as (Body | Constraint | Composite | MouseConstraint)[],
            )

            matter.Engine.run(engine)

            const run = () => {
                boxes.forEach((box) => box.render())
                requestAnimationFrame(run)
                matter.Engine.update(engine, 1000 / 60)
            }
            run()
        },
        [getContent, getLimits],
    )

    const handleResize = useCallback(() => {
        if (!engineRef.current || !containerRef.current) return

        const matter = require('matter-js') as typeof import('matter-js')
        const { ground, leftWall, rightWall } = getLimits(matter)
        const { boxes, constraints } = getContent(matter)

        matter.Composite.add(
            engineRef.current.world,
            [...boxes.map((b) => b.body), ...constraints, ground, leftWall, rightWall].filter(Boolean) as (
                | Body
                | Constraint
                | Composite
                | MouseConstraint
            )[],
        )

        const { ground: oldGround, leftWall: oldLeftWall, rightWall: oldRightWall } = limitsRef.current
        const oldBoxes = boxesRef.current
        const oldConstraints = constraintsRef.current

        matter.Composite.remove(
            engineRef.current.world,
            [oldGround, oldLeftWall, oldRightWall, ...oldBoxes.map((box) => box.body), ...oldConstraints].filter(
                Boolean,
            ) as (Body | Constraint | Composite | MouseConstraint)[],
        )

        limitsRef.current = { ground, leftWall, rightWall }
        boxesRef.current = boxes
        constraintsRef.current = constraints
    }, [getContent, getLimits])

    useEffect(() => {
        if (items.length > 0) {
            import('matter-js').then((Matter) => {
                initialization(Matter)
            })
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            if (engineRef.current) {
                const matter = require('matter-js') as typeof import('matter-js')
                matter.Engine.clear(engineRef.current)
            }
        }
    }, [initialization, handleResize])

    return (
        <div ref={containerRef} className='relative isolate aspect-[3/1] w-full'>
            {items.map((item, i) => (
                <React.Fragment key={`item-${i}`}>
                    <div
                        className={`absolute h-1/2 w-[2px] origin-top bg-gray-600`}
                        style={{
                            left: `${(i + 1) * 20}%`,
                            transform: `rotate(${getDegFromCathetus(referenceCoords[i]?.x, referenceCoords[i]?.y)}deg)`,
                        }}
                    />
                    <div
                        ref={(el) => {
                            if (el) refsRef.current[i] = el
                        }}
                        className='absolute aspect-square h-auto w-1/5'>
                        <Image
                            src={item}
                            alt=''
                            width={155}
                            height={155}
                            className='mt-12 h-full select-none object-contain drop-shadow-md'
                            draggable={false}
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
