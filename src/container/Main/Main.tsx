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
    addToFavoriteArticles:(id:number, count:number) => void
    removeFromFavorites:(total:number, price:number) => void
}
const Main = ({addToFavoriteArticles, removeFromFavorites}: Props) => {
    return (

        <div className="container">
            <Routes>
                <Route path="/" element={<Home addToFavoriteArticles={addToFavoriteArticles}
                removeFromFavorites={removeFromFavorites}/>}/>
                <Route path="deals" element={<Cardeals />}/>
                <Route path="news" element={<News />}/>
                <Route path="reviews" element={<Reviews />}/>
                <Route path="favorites" element={<Favorites />}/>
                <Route path="about" element={<About />}/>
                <Route path="contacts" element={<Contacts />}/>
                <Route path="/article/:id" element={<ArticlePage />}/>
            </Routes>
            
        </div>

    )
}
export default Main
