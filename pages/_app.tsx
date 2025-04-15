import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/emotionCache';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';



const clientSideEmotionCache = createEmotionCache();
const theme = createTheme();



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <SpeedDialComponent />
      </ThemeProvider >
    </CacheProvider>
  )
}
export default MyApp;