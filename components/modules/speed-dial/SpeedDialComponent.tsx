import { AiFillEdit } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";
import { IoMdSave } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';


const actions = [
    { icon: <FaCopy />, name: 'Copy' },
    { icon: <IoMdSave />, name: 'Save' },
    { icon: <BsPrinterFill />, name: 'Print' },
    { icon: <FaShareAlt />, name: 'Share' },
];

export default function SpeedDialComponent() {
    return (
        <div className="w-full h-16 flex items-center justify-end">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial ariaLabel="SpeedDial openIcon example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<AiFillEdit />} />}   >
                    {actions.map((action) => (
                        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                    ))}
                </SpeedDial>
            </Box>
        </div>

    );
}
