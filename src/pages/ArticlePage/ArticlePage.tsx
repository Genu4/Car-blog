import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import { useParams } from 'react-router-dom'
import './ArticlePage.scss'

type ArticlesObject = {
    [id: number]: ArticlesProps
}

type Props = {}

const ArticlePage = (props: Props) => {
    const { id } = useParams()
    
    console.log(id)
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)
    return (
        <div className="article-content">
            <div>
                <p className="article-title">
                    {articlesObject[parseInt(id!)].title}
                </p>
            </div>

            <div>
                <p className="article-category">
                    {articlesObject[parseInt(id!)].category}
                </p>
            </div>
            <div>
                <p className="article-author">
                    {articlesObject[parseInt(id!)].author}
                </p>
            </div>
            <div>{articlesObject[parseInt(id!)].image}</div>
            <div>{articlesObject[parseInt(id!)].articleText}</div>
        </div>
    )
}
export default ArticlePage
