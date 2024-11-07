import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const shineAnimation = 'animate-shine bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat';

export function getElapsedTime(unixTimestamp: number): string {
    const createdAt = new Date(unixTimestamp)
    const now = new Date()
    let difference = now.getTime() - createdAt.getTime()
    const hours = Math.floor(difference / (1000 * 60 * 60))
    difference -= hours * (1000 * 60 * 60)
    const minutes = Math.floor(difference / (1000 * 60))
    difference -= minutes * (1000 * 60)
    const seconds = Math.floor(difference / 1000)
    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} elapsed`
}
