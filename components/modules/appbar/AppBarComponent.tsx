import { DiJqueryUiLogo } from "react-icons/di";
import React from 'react'
import Link from "next/link";
import { Button } from "@mui/material";

function AppBarComponent() {
    return (
        <nav className='w-full h-auto flex items-center justify-between pr-3 pl-2 py-2 sticky top-2 left-0 bg-transparent rounded backdrop-blur-xl border border-slate-200 z-50'>

            <div className="flex items-center justify-start basis-1/2 md:basis-1/5">
                <Link href="/">
                    <DiJqueryUiLogo className="w-16 h-16" />
                </Link>
            </div>

            <ul id="NAVIGATION____LINKS" className="hidden lg:flex items-center justify-center gap-4 basis-3/5">
                <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">Home</Link></Button>
                <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">About</Link></Button>
                <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">How it works</Link></Button>
                <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">Clients</Link></Button>
                <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">Portfolio</Link></Button>
            </ul>


            <div className="basis-1/2 items-center justify-end flex md:hidden">
                <Button variant="contained" color="primary" size="medium">Contact Us</Button>
            </div>
            <div className="basis-1/5 items-center justify-end hidden md:flex">
                <Button variant="contained" color="primary" size="large">Contact Us</Button>
            </div>

        </nav>
    )
}

export default AppBarComponent