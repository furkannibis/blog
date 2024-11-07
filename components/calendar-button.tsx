'use client'

import { useEffect } from 'react'
import { Button, ButtonProps } from './ui/button'
import { getCalApi } from '@calcom/embed-react'

export function CalendarButton(props: ButtonProps) {
    useEffect(() => {
        ; (async function () {
            const cal = await getCalApi()
            cal('ui', {
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            })

        })()
    }, [])


    return (
        <Button
            data-cal-namespace=''
            data-cal-link='furkannibis/15min'
            data-cal-config='{"layout":"month_view"}'
            {...props}>
            schedule a call
        </Button>
    )
}
