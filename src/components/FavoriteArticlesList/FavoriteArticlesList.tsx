import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import { useAppSelector } from 'redux/hooks'
import FavoriteArticlesListItem from './FavoriteArticlesListItem'

type Props = {
    articlesObject?: {
        [id: number]: ArticlesProps
    }

    ArticlesItem?: any
}
const FavoriteArticlesList = ({
    articlesObject = getArticlesObject(articlesArray),
    ArticlesItem = FavoriteArticlesListItem,
}: Props) => {
    const favoritesArticles = useAppSelector((state) => state.favoritesArticles)

    return (
        <>
            {Object.keys(favoritesArticles).map((articleId) => (
                <ArticlesItem
                    key={articleId}
                    favoritesArticles={favoritesArticles}
                    article={articlesObject[parseInt(articleId)]}
                />
            ))}
        </>
    )
}
export default FavoriteArticlesList
