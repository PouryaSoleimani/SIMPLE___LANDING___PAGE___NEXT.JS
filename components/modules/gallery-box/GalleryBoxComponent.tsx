import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface GalleryBoxProps { id: number, src: string }

const GalleryBoxComponent: React.FC<GalleryBoxProps> = ({ id, src }) => {
    return (
        <Card className='w-full lg:w-1/2 xl:w-1/4 shadow-2xl shadow-zinc-600 gallery__box'>
            <Image src={src} width={1024} height={768} alt={`gallery-image-${id}`} className='h-80' />
        </Card>
    )
}

export default GalleryBoxComponent