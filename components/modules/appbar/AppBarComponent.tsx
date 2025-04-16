import { ImMenu } from "react-icons/im";
import { DiJqueryUiLogo } from "react-icons/di";
import React, { useState } from 'react'
import Link from "next/link";
import { Button } from "@mui/material";


function AppBarComponent() {
    const [isMenuShow, setIsMenuShow] = useState(false)
    return (
        <>
            <nav className='w-full h-auto flex items-center justify-between pr-3 pl-2 py-2 sticky top-2 left-0 bg-white/50 rounded backdrop-blur-2xl border border-slate-200 z-50'>

                <div className="flex items-center justify-start basis-1/2 md:basis-1/5">
                    <Link href="/">
                        <DiJqueryUiLogo className="w-16 h-16" />
                    </Link>
                </div>

                <ul id="NAVIGATION____LINKS" className="hidden lg:flex items-center justify-center gap-4 basis-3/5">
                    <Button variant="text" color="inherit" ><Link href="/" className="Nav__Link">Home</Link></Button>
                    <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">About</Link></Button>
                    <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">How it works</Link></Button>
                    <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">Clients</Link></Button>
                    <Button variant="text" color="inherit"><Link href="/" className="Nav__Link">Portfolio</Link></Button>
                </ul>


                <div className="basis-1/2 items-center justify-end flex md:hidden">
                    <ImMenu className="w-10 h-10 backdrop-blur-3xl border-zinc-500 p-1 rounded" />
                </div>
                <div className="basis-1/5 items-center justify-end hidden md:flex">
                    <Button variant="contained" color="primary" size="large">Contact Us</Button>
                </div>

            </nav>

            <ul id="NAVIGATION____LINKS" className="flex md:hidden flex-col pt-16 items-start text-start fixed left-0 top-0 bg-blue-600 text-white  h-screen w-[60vw] z-50">
                <Button variant="text" color="inherit" sx={{ textAlign: "start", width: "100%" }}><Link href="/" className="text-xl my-4 w-full px-2">Home</Link></Button>
                <Button variant="text" color="inherit" sx={{ textAlign: "start", width: "100%" }}><Link href="/" className="text-xl my-4 w-full px-2">About</Link></Button>
                <Button variant="text" color="inherit" sx={{ textAlign: "start", width: "100%" }}><Link href="/" className="text-xl my-4 w-full px-2">How it works</Link></Button>
                <Button variant="text" color="inherit" sx={{ textAlign: "start", width: "100%" }}><Link href="/" className="text-xl my-4 w-full px-2">Clients</Link></Button>
                <Button variant="text" color="inherit" sx={{ textAlign: "start", width: "100%" }}><Link href="/" className="text-xl my-4 w-full px-2">Portfolio</Link></Button>
            </ul>

        </>
    )
}

export default AppBarComponent