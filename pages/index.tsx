import { Roboto } from "next/font/google";
import { Container } from "@mui/material";
import HeaderTemplate from "@/components/templates/header/HeaderTemplate";
import WorksTemplate from "@/components/templates/works/WorksTemplate";
import CommentsTemplate from "@/components/templates/comments/CommentsTemplate";
import GalleryTemplate from "@/components/templates/gallery/GalleryTemplate";
import FooterTemplate from "@/components/templates/footer/FooterTemplate";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main className={`font-[${robotoMono.className}] relative z-10 h-auto`}>
            <Container maxWidth="lg" sx={{ height: "fit-content" }} className="py-10 bg-white">
                <HeaderTemplate />
                <WorksTemplate />
                <CommentsTemplate />
                <GalleryTemplate />
                <FooterTemplate />
            </Container>
        </main>
    )
}
