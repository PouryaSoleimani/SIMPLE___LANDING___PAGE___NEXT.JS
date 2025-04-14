import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';


interface SingleWorkBoxProps { id: number, title: string, desc: string }

const SingleWorkBoxComponent: React.FC<SingleWorkBoxProps> = ({ id, title, desc }) => {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <Image src={`/work-${id}.jpg`} width={500} height={300} alt='work-image' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='text-center font-black'>{title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{ fontSize: "16px", textAlign: "center" }}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SingleWorkBoxComponent

