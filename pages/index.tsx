import { Roboto } from "next/font/google";
import { Button, Container } from "@mui/material";
import AppBarComponent from "@/components/modules/appbar/AppBarComponent";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main className="relative">
            <Container maxWidth="lg" className="border py-10 h-auto bg-white">
                <HeaderTemplate />
                <SpeedDialComponent />
            </Container>
        </main>
    )
}
