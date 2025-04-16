import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

const UpperFooter = () => {
    return (
        <div className='h-5/6 flex flex-col lg:flex-row items-center justify-evenly px-6'>
            <h2 className="text-white text-3xl font-bold text-center">Create a new generation website for your business</h2>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, borderRadius: "6px" }}  >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Email" inputProps={{ 'aria-label': 'Email' }} />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '5px' }} aria-label="directions">
                    <BsFillArrowRightSquareFill className="w-8 h-8 rounded-md" />
                </IconButton>
            </Paper>
        </div>
    )
}

export default UpperFooter