import { Roboto } from "next/font/google";
import { Button, Container } from "@mui/material";
import AppBarComponent from "@/components/modules/appbar/AppBarComponent";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main>
            <Container maxWidth="lg" className="border h-[3000px] bg-white">
                <HeaderTemplate />
            </Container>
        </main>
    )
}
