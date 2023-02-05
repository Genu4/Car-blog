import articlesArray, {
    ArticlesProps,
    getArticlesObject,
} from 'components/Articles/articlesArray'
import './Favorites.scss'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: ArticlesProps
    }
    removeFromFavorites: (id: number) => void
}

const Favorites = ({
    favoriteArticles,
    removeFromFavorites,
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    return (
        <>
            <div className="fav-content">
                <h1>Favorites</h1>

                <div>
                    {Object.keys(favoriteArticles).map((articleId) => (
                        <div key={articleId}>
                            <div>
                                {articleId}:{' '}
                                {articlesObject[parseInt(articleId)].title};
                            </div>
                            <div>
                                <img
                                    src={articlesObject[parseInt(articleId)].image}
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Favorites
