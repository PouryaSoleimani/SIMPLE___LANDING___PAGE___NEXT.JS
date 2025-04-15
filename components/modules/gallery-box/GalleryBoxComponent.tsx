import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface GalleryBoxProps { id: number, src: string }

const GalleryBoxComponent: React.FC<GalleryBoxProps> = ({ id, src }) => {
    return (
        <Card>
            <Image src={src} width={1024} height={768} alt={`gallery-image-${id}`} className='h-full object-cover' />
        </Card>
    )
}

export default GalleryBoxComponent