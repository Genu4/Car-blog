import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import ScrollUpBtn from 'components/ScrollUpBtn/ScrollUpBtn'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import { useState } from 'react'
import { omit } from 'lodash'


type FavoriteArticles = {
    [id: number]: number
}

const App = () => {
    const [favoriteArticles, setFavoritesArticles] = useState<FavoriteArticles>(
        {}
    )

    const addToFavoriteArticles = (id: number) => {
        setFavoritesArticles((prevState: FavoriteArticles) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    const removeFromFavorites = (id: number) => {
        setFavoritesArticles((prevState: FavoriteArticles) =>
            omit(prevState, [id])
        )
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                {/* <CssBaseline /> */}
                <Header />
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
