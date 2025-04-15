import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SpeedDialComponent from "@/components/modules/speed-dial/SpeedDialComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });
interface MyAppProps extends AppProps {
  emotionCache?: typeof clientSideEmotionCache;
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const theme = createTheme({ palette: { mode: 'light', }, });


  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <SpeedDialComponent />
        </ThemeProvider>
      </CacheProvider>

    </>
  )
}
