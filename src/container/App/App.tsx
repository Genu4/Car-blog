import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import ScrollUpBtn from 'components/ScrollUpBtn/ScrollUpBtn'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import { useState } from 'react'
import { Button } from '@mui/material'

type LikeDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [likeData, setLikeData] = useState<LikeDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })

    const addToFavorites = (total: number, price: number) => {
        setLikeData((prevState: LikeDataProps) => ({
            totalCount: prevState.totalCount + total,
            totalPrice: prevState.totalPrice + total * price,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                {/* <CssBaseline /> */}
                <Header likeData={likeData} />
                <ScrollToTop />
                <Main addToFavorites={addToFavorites}/>
                <Footer />
                <ScrollUpBtn />
            </StyledEngineProvider>
        </>
    )
}
export default App
