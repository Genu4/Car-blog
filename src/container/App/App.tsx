import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import ScrollUpBtn from 'components/ScrollUpBtn/ScrollUpBtn'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import { useState } from 'react'
import { Button } from '@mui/material'

type FavoriteArticles = {
    id: number
}

const App = () => {
    

    const [favoriteArticles, setFavoritesArticles] = useState<FavoriteArticles>({})

    const addToFavoriteArticles = (id: number) => {
        setFavoritesArticles((prevState: FavoriteArticles) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    
    // const removeFromFavorites = (total: number, price: number) => {
    //     setLikeData((prevState: LikeDataProps) => ({
    //         totalCount: prevState.totalCount - total,
    //         totalPrice: prevState.totalPrice - total * price,
    //     }))
    // }

    return (
        <>
            <StyledEngineProvider injectFirst>
                {/* <CssBaseline /> */}
                <Header favoriteArticles={favoriteArticles} />
                <ScrollToTop />
                <Main
                    favoriteArticles={favoriteArticles}
                    addToFavoriteArticles={addToFavoriteArticles}
                    removeFromFavorites={removeFromFavorites}
                />
                <Footer />
                <ScrollUpBtn />
            </StyledEngineProvider>
        </>
    )
}
export default App
