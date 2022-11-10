import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{
    colorScheme:"light"
  }}>
    <Component {...pageProps} />
  </MantineProvider>
  )
}
