import About from 'pages/About/About'
import Contacts from 'pages/Contacts/Contacts'
import Cardeals from 'pages/Cardeals/Cardeals'
import Favorites from 'pages/Favorites/Favorites'
import Home from 'pages/Home/Home'
import News from 'pages/News/News'
import Reviews from 'pages/Reviews/Reviews'
import { Route, Routes } from 'react-router-dom'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import ArticlePages from 'pages/ArticlePages/ArticlePages'

type Props = {}
const Main = (props: Props) => {
    return (

        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="car-deals" element={<Cardeals />}/>
                <Route path="news" element={<News />}/>
                <Route path="reviews" element={<Reviews />}/>
                <Route path="favorites" element={<Favorites />}/>
                <Route path="about" element={<About />}/>
                <Route path="contacts" element={<Contacts />}/>
                <Route path="/article/:title" element={<ArticlePages />}/>
                
            </Routes>
            
        </div>

    )
}
export default Main
