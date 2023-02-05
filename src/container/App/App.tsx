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

type FavoriteArticles = {
    [id:number]:number
}

const App = () => {
    const [likeData, setLikeData] = useState<LikeDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })

    const [favoriteArticles, setFavoritesArticles] = useState<FavoriteArticles>({
        
    })

    const addToFavoriteArticles = (id: number, count: number) => {
        setFavoritesArticles((prevState:FavoriteArticles) =>({
            ...prevState,
            [id]: prevState[id] + count
        }))
    }

    const addToFavorites = (id: number, count: number) => {
        // setLikeData((prevState: LikeDataProps) => ({
        //     totalCount: prevState.totalCount + total,
        //     totalPrice: prevState.totalPrice + total * price,
        // }))
        setFavoritesArticles((prevState:FavoriteArticles) =>({
            ...prevState,
            [id]: prevState[id] + count
        }))
    }
    const removeFromFavorites = (total: number, price: number) => {
        setLikeData((prevState: LikeDataProps) => ({
            totalCount: prevState.totalCount - total,
            totalPrice: prevState.totalPrice - total * price,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                {/* <CssBaseline /> */}
                <Header favoriteArticles={favoriteArticles} />
                <ScrollToTop />
                <Main
                    addToFavorites={addToFavorites}
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
