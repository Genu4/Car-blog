import ArticlePageContent from 'components/ArticlePageContent/ArticlePageContent'
import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import { useAppSelector } from 'redux/hooks'

type Props = {
    articlesObject?: {
        [id: number]: ArticlesProps
    }

    ArticlePageItem?: any
}

const ArticlePage = ({
    articlesObject = getArticlesObject(articlesArray),
    ArticlePageItem = ArticlePageContent,
}: Props) => {
    const favoritesArticles = useAppSelector((state) => state.favoritesArticles)
    return (
        <>
            <ArticlePageItem
                
                favoritesArticles={favoritesArticles}
                
            />
        </>
    )
}
export default ArticlePage
