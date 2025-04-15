import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface GalleryBoxProps { id: number, src: string }

const GalleryBoxComponent: React.FC<GalleryBoxProps> = ({ id, src }) => {
    return (
        <Card className='w-full md:w-1/3 lg:w-1/4'>
            <Image src={src} width={1024} height={768} alt={`gallery-image-${id}`} className='h-64' />
        </Card>
    )
}

export default GalleryBoxComponent