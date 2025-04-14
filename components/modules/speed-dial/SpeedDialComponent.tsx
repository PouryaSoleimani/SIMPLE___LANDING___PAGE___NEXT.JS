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
    { icon: <FaCopy className="w-8 h-8" />, name: 'Copy' },
    { icon: <IoMdSave className="w-8 h-8" />, name: 'Save' },
    { icon: <BsPrinterFill className="w-8 h-8" />, name: 'Print' },
    { icon: <FaShareAlt className="w-8 h-8" />, name: 'Share' },
];

export default function SpeedDialComponent() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: "10", right: "20", zIndex: 1000, }}>
            <SpeedDial ariaLabel="SpeedDial openIcon example" icon={<SpeedDialIcon openIcon={<AiFillEdit className="w-8 h-8" />} />}   >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                ))}
            </SpeedDial>
        </Box>
    );
}
