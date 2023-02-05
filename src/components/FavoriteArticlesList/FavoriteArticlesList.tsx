import articlesArray, { getArticlesObject, ArticlesProps } from "components/Articles/articlesArray"

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: ArticlesProps
    }
    removeFromFavorites: (id: number) => void
}
const FavoriteArticlesList = ({favoriteArticles, articlesObject=getArticlesObject(articlesArray), removeFromFavorites}: Props) => {
    return (
        <div>
            <h1>Favorites</h1>
            {Object.keys(favoriteArticles).map((articleId) => (
                <div key={articleId}>
                    <div>
                        {articleId}: {articlesObject[parseInt(articleId)].title}
                        ;
                    </div>
                    <div>
                        <img
                            src={articlesObject[parseInt(articleId)].image}
                            alt=""
                        />
                    </div>
                    <button onClick={() => removeFromFavorites(parseInt(articleId))}>Delete</button>
                </div>
                
            ))}
            
        </div>
    )
}
export default FavoriteArticlesList
