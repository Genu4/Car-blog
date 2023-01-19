import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import ScrollUpBtn from 'components/ScrollUpBtn/ScrollUpBtn'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                {/* <CssBaseline /> */}
                <Header />
                <ScrollToTop />
                <Main />
                <Footer />
                <ScrollUpBtn />
            </StyledEngineProvider>
        </>
    )
}
export default App
