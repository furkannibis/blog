export const GradientBg = () => {
    return (
        <div className='absolute top-0 z-0 size-full '>
            <div className='absolute bottom-auto left-auto right-0 top-0 size-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(170,215,217,0.5)] opacity-50 blur-[80px]'></div>
        </div>
    )
}

export const GradientBg2 = () => (
    <div className='absolute top-0 z-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
)

export const GradientBg3 = () => (
    <div className='absolute inset-0 z-0 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]' />
)

export const GradientBg4 = () => (
    <div className='absolute top-0 z-0 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(120,119,198,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]' />
)

export const Noise = () => (
    <svg className='pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light' width='100%' height='100%'>
        <filter id='noise'>
            <feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch' />
        </filter>
        <rect width='100%' height='100%' filter='url(#noise)' />
    </svg>
)
