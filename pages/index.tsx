import { Roboto } from "next/font/google";
import { Button, Container } from "@mui/material";
const robotoMono = Roboto({ variable: "--font-roboto-sans", subsets: ["latin"], });




//  LANDING PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function Home() {

    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <Container maxWidth="lg" className="border h-screen">
                <Button variant="contained">GELLO</Button>
            </Container>

        </main>
    )
}
