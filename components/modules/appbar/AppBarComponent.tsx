import { DiJqueryUiLogo } from "react-icons/di";
import React from 'react'
import Link from "next/link";
import { Button } from "@mui/material";

function AppBarComponent() {
    return (
        <nav className='w-full h-auto flex items-center justify-between px-2 pt-4 sticky top-0 left-0'>
            <div className="flex items-center justify-start basis-1/4">
                <DiJqueryUiLogo className="w-16 h-16" />
            </div>

            <ul id="NAVIGATION____LINKS" className="flex items-center justify-evenly basis-2/4">
                <Button variant="text" color="inherit"><Link href="/">Home</Link></Button>
                <Button variant="text" color="inherit"><Link href="/">About</Link></Button>
                <Button variant="text" color="inherit"><Link href="/">How it works</Link></Button>
                <Button variant="text" color="inherit"><Link href="/">Clients</Link></Button>
                <Button variant="text" color="inherit"><Link href="/">Portfolio</Link></Button>
            </ul>

            <div className="basis-1/4 flex items-center justify-end">
                <Button variant="contained" color="primary" size="large">Contact Us</Button>
            </div>

        </nav>
    )
}

export default AppBarComponent