import { Roboto } from "next/font/google";
import { Container } from "@mui/material";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
import WorksTemplate from "@/components/templates/works/WorksTemplate";
import CommentsTemplate from "@/components/templates/comments/CommentsTemplate";
import GalleryTemplate from "@/components/templates/gallery/GalleryTemplate";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main className={`font-[${robotoMono.className}] relative z-10`}>
            <Container maxWidth="lg" className="py-10 h-auto bg-white">
                <HeaderTemplate />
                <WorksTemplate />
                <CommentsTemplate />
                <GalleryTemplate />
            </Container>
        </main>
    )
}
