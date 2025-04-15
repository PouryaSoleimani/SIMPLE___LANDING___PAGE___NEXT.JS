import { Card, CardContent } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface GalleryBoxProps { src: string }

const GalleryBoxComponent: React.FC<GalleryBoxProps> = ({ src }) => {
    return (
        <Card>
            <CardContent>
                <Image src={src} width={1024} height={768} alt='gallery-image' className='w-auto h-auto' />
            </CardContent>
        </Card>
    )
}

export default GalleryBoxComponent