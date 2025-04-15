import GalleryBoxComponent from '@/components/modules/gallery-box/GalleryBoxComponent'
import React from 'react'

const GalleryImages = [
    { id: 1, src: "/design-1.png" },
    { id: 1, src: "/design-2.jpg" },
    { id: 1, src: "/design-3.jpg" },
    { id: 1, src: "/design-4.jpg" },
    { id: 1, src: "/design-5.webp" },
    { id: 1, src: "/design-6.webp" },
]
type SingleGalleryImage = { id: number, src: string }

function GalleryTemplate() {
    return (
        <div>
            <h2 className='text-center text-xl text-zinc-600 mt-8'>PORTFOLIO</h2>
            <h3 className='text-center my-2 text-4xl font-semibold tracking-wide'>Three Simple Step to Start Working Progress</h3>

            <div className='flex items-center justify-center flex-wrap  gap-10 mt-16'>
                {GalleryImages.map((image: SingleGalleryImage) => (
                    <GalleryBoxComponent key={image.id}  {...image} />
                ))}
            </div>
        </div>
    )
}

export default GalleryTemplate