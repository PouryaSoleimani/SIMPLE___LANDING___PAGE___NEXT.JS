import { Roboto } from "next/font/google";
import { Button, Container } from "@mui/material";
import AppBarComponent from "@/components/modules/appbar/AppBarComponent";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";
import WorksTemplate from "@/components/templates/works/WorksTemplate";
import CommentsTemplate from "@/components/templates/comments/CommentsTemplate";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main>
            <Container maxWidth="lg" className="border py-10 h-auto bg-white overflow-x-hidden">
                <HeaderTemplate />
                <WorksTemplate />
                <CommentsTemplate />
            </Container>
        </main>
    )
}
