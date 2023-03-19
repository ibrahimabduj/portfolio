import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import GlobalStyles from "../global";
import '../containers/hero.style.css'
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
   <Component {...pageProps} />
  </ThemeProvider>
}
