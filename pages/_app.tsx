import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
