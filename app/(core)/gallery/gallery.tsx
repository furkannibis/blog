'use client'

import Image from 'next/image'

import { ImageType } from '@/config/gallery'
import { BlurFade } from '@/components/blur-fade'

type GalleryProps = {
    images: ImageType[][]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className={`grid grid-cols-2 gap-4 transition-opacity duration-700 md:grid-cols-4`}>
            {images.map((column) => (
                <div key={column[0].src} className='grid gap-4'>
                    {column.map((image, idx) => (
                        <BlurFade key={image.src} delay={0.25 + idx * 0.05} inView>
                            <div key={image.src}>
                                {/* <p>{`Image ${idx}`}</p> */}
                                <Image
                                    className='h-auto max-w-full rounded-lg '
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    priority
                                />
                                <span>{image.alt}</span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Gallery
