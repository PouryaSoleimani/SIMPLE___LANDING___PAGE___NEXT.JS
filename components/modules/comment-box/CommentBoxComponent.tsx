import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';




// COMPONENT =========================================================================================================================================================================
function CommentBoxComponent() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </CardActions>
        </Card>
    )
}

export default CommentBoxComponent