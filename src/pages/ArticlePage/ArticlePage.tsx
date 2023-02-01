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
            
            <div>{articlesObject[parseInt(id!)].title}</div>
            <div>{articlesObject[parseInt(id!)].image}</div>
            <div>{articlesObject[parseInt(id!)].category}</div>
            <div>{articlesObject[parseInt(id!)].author}</div>
            <div>{articlesObject[parseInt(id!)].summary}</div>
        </div>
    )
}
export default ArticlePage
