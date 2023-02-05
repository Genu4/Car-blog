import articlesArray, {
    ArticlesProps,
    getArticlesObject,
} from 'components/Articles/articlesArray'
import FavoriteArticlesList from 'components/FavoriteArticlesList/FavoriteArticlesList'
import './Favorites.scss'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
    
    removeFromFavorites: (id: number) => void
}

const Favorites = ({
    favoriteArticles,
    removeFromFavorites,
}: Props) => {
    return (
        <>
            <div className="fav-content">
                <FavoriteArticlesList favoriteArticles={favoriteArticles} removeFromFavorites={removeFromFavorites}/>
            </div>
        </>
    )
}
export default Favorites
