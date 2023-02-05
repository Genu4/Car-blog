import About from 'pages/About/About'
import Contacts from 'pages/Contacts/Contacts'
import Cardeals from 'pages/Cardeals/Cardeals'
import Favorites from 'pages/Favorites/Favorites'
import Home from 'pages/Home/Home'
import News from 'pages/News/News'
import Reviews from 'pages/Reviews/Reviews'
import { Route, Routes } from 'react-router-dom'
import ArticlePage from 'pages/ArticlePage/ArticlePage'


type Props = {
    favoriteArticles: {
        [id: number]:number
    }
    addToFavoriteArticles:(id:number) => void
    removeFromFavorites:(id:number) => void
}
const  Main = ({favoriteArticles, addToFavoriteArticles, removeFromFavorites}: Props) => {
    return (

        <div className="container">
            <Routes>
                <Route path="/" element={<Home addToFavoriteArticles={addToFavoriteArticles} removeFromFavorites={removeFromFavorites}/>}/>
                <Route path="deals" element={<Cardeals addToFavoriteArticles={addToFavoriteArticles}/>}/>
                <Route path="news" element={<News addToFavoriteArticles={addToFavoriteArticles}/>}/>
                <Route path="reviews" element={<Reviews addToFavoriteArticles={addToFavoriteArticles}/>}/>
                <Route path="favorites" element={<Favorites favoriteArticles={favoriteArticles}/>}/>
                <Route path="about" element={<About />}/>
                <Route path="contacts" element={<Contacts />}/>
                <Route path="/article/:id" element={<ArticlePage />}/>
            </Routes>
            
        </div>

    )
}
export default Main
