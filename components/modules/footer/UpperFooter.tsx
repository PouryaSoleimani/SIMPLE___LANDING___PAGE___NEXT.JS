import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

const UpperFooter = () => {
    return (
        <div className='h-full flex flex-col lg:flex-row items-center justify-between px-6'>
            <h2>Create a new generation website for your business</h2>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}  >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Email" inputProps={{ 'aria-label': 'Email' }} />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <BsFillArrowRightSquareFill />
                </IconButton>
            </Paper>
        </div>
    )
}

export default UpperFooter