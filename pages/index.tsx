import { Roboto } from "next/font/google";
import { Container } from "@mui/material";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
import WorksTemplate from "@/components/templates/works/WorksTemplate";
import CommentsTemplate from "@/components/templates/comments/CommentsTemplate";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main className={`font-[${robotoMono.className}]`}>
            <Container maxWidth="lg" className="py-10 h-auto bg-white overflow-x-hidden">
                <HeaderTemplate />
                <WorksTemplate />
                <CommentsTemplate />
            </Container>
        </main>
    )
}
