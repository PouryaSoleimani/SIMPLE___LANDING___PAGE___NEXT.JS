import Image from "next/image";
import { Roboto } from "next/font/google";
import { main } from "framer-motion/client";
import { Button } from "@mui/material";

const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




export default function Home() {
    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <Button type="button" variant="contained" color="primary"> HELLO WORLD</Button>
        </main>
    )
}
