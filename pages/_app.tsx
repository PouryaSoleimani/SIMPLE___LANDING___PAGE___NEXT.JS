import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', 
  },
});
import CssBaseline from '@mui/material/CssBaseline';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <SpeedDialComponent />
      </ThemeProvider>
    </>
  )
}
