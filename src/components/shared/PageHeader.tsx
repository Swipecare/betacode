import { cn } from '@/lib/utils'
import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import Fade from '../animated/Fade'

const PageHeader = ({
    title,
    subtitle,
    className
}: {
    title: string,
    subtitle?: string,
    className?: string
}) => {

    const [props] = useSpring(
        () => ({
            from: { opacity: 0, y: 10 },
            to: { opacity: 1, y: 0 },
            delay: 1000
        }),
        []
    )
    return (
        <div className={cn([
            'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-primary  to-[#010423] flex items-center relative min-h-[400px]',
            className
        ])}>

            <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-10">
                <svg className='w-full h-full fill-primary/20' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_105_699)"> <path fillRule="evenodd" clipRule="evenodd" d="M100 22.7143C100 10.564 90.1503 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 90.8645 9.84974 100.714 22 100.714H78C90.1503 100.714 100 110.564 100 122.714V177.286C100 189.436 109.85 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 109.135 190.15 99.2856 178 99.2856H122C109.85 99.2856 100 89.4359 100 77.2856V22.7143ZM177.286 100C189.436 100 199.286 90.1503 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C109.135 -5.31105e-07 99.2857 9.84974 99.2857 22V78C99.2857 90.1503 89.436 100 77.2857 100L22.7143 100C10.564 100 0.714259 109.85 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200L78.7143 200C90.8645 200 100.714 190.15 100.714 178V122C100.714 109.85 110.564 100 122.714 100L177.286 100Z" /> </g> <defs> <linearGradient id="paint0_linear_105_699" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop /> <stop offset="1" /> </linearGradient> <clipPath id="clip0_105_699"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
            </div>

            <div className="container mx-auto flex flex-col items-center justify-center text-white z-20">-

                <Fade>
                    <h1 className='text-5xl md:text-7xl font-black text-center'>{title}</h1>
                </Fade>

                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default PageHeader