import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Divider } from '@mui/material';

interface CommentBoxProps { id: number, body: string, userName: string, userImage: string }


// COMPONENT =========================================================================================================================================================================
const CommentBoxComponent: React.FC<CommentBoxProps> = ({ id, body, userName, userImage }) => {

    return (
        <Card sx={{ minWidth: "auto", margin: "0 1rem", padding: "0 1rem" }} className='comment__box'>

            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>{body} </Typography>
            </CardContent>

            <Divider />

            <CardActions className='gap-5 pt-2'>
                <Avatar alt="Cindy Baker" src={userImage} sx={{ width: 54, height: 54 }} />
                <Typography variant="button">{userName}</Typography>
            </CardActions>

        </Card>
    )
}

export default CommentBoxComponent