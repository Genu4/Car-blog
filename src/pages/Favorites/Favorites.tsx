import articlesArray, {
    ArticlesProps,
    getArticlesObject,
} from 'components/Articles/articlesArray'
import './Favorites.scss'

type Props = {
    favoriteArticles: {
        id: number
    }
    articlesObject?: {
        [id: number]: ArticlesProps
    }
}

const Favorites = ({
    favoriteArticles,
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    return (
        <>
            <div className="fav-content">
                <h1>Favorites</h1>
                
                <div>
                    {Object.keys(favoriteArticles).map((articleId) => (
                        <div key={articleId}>
                            {articlesObject[parseInt(articleId)].title}
                            {articleId};
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Favorites
