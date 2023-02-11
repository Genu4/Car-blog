import About from 'pages/About/About'
import Contacts from 'pages/Contacts/Contacts'
import Deals from 'pages/Deals/Deals'
import Favorites from 'pages/Favorites/Favorites'
import Home from 'pages/Home/Home'
import News from 'pages/News/News'
import Reviews from 'pages/Reviews/Reviews'
import { Route, Routes } from 'react-router-dom'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import Error from 'pages/Error/Error'

const  Main = () => {
    return (

        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="deals" element={<Deals />}/>
                <Route path="news" element={<News />}/>
                <Route path="reviews" element={<Reviews />}/>
                <Route path="favorites" element={<Favorites />}/>
                <Route path="about" element={<About />}/>
                <Route path="contacts" element={<Contacts />}/>
                <Route path="/article/:id" element={<ArticlePage />}/>
                <Route path="/error" element={<Error />}/>
            </Routes>
            
        </div>

    )
}
export default Main
