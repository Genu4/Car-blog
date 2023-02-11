import './ArticlePageContent.scss'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useParams } from 'react-router-dom'
import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import { useAppSelector } from 'redux/hooks'

type ArticlesObject = {
    [id: number]: ArticlesProps
}
type Props = {
    id?:number
}

const ArticlePageContent = () => {
    const { id } = useParams()
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)
    console.log(id)
    console.log(typeof(parseInt(id!)))
    const isLiked = useAppSelector((state) => state.likeArticles[parseInt(id!)])
    return (

        

        <>
            <div>
                <Button>
                    {isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon />}
                    
                </Button>
            </div>
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
                {/* <div className="article-img-block">
                    <img
                        className="article-img"
                        src={articlesObject[parseInt(id!)].image}
                        alt=""
                    />
                </div> */}
                {/* <div
                    dangerouslySetInnerHTML={{
                        __html: articlesObject[parseInt(id!)].articleText,
                    }}
                ></div> */}
            </div>
        </>
    )
}
export default ArticlePageContent
