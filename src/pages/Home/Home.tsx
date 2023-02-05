import ArticlesList from 'components/Articles/ArticlesList'
import Slider from 'components/Swiper/Slider'

type Props = {
    addToFavoriteArticles:(id:number, count:number) => void
    removeFromFavorites:(total:number, price:number) => void
}
const Home = ({addToFavoriteArticles, removeFromFavorites}: Props) => {
    return (
        <>
            <Slider />
            <ArticlesList addToFavoriteArticles={addToFavoriteArticles}
            removeFromFavorites={removeFromFavorites}/>
        </>
    )
}
export default Home
