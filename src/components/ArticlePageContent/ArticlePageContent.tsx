import './ArticlePageContent.scss'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useParams } from 'react-router-dom'
import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import {
    addArticleToFavorites,
    removeArticleFromFavorites,
} from 'redux/favoriteArticleReducer'

type ArticlesObject = {
    [id: number]: ArticlesProps
}
type Props = {
    id?: number
}

const ArticlePageContent = () => {
    const { id } = useParams()
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)
    const isLiked = useAppSelector((state) => state.likeArticles[parseInt(id!)])
    const dispatch = useAppDispatch()

    return (
        <>
            <div>
                <Button
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(parseInt(id!)))
                            : dispatch(addLike(parseInt(id!)))
                        isLiked
                            ? dispatch(
                                  removeArticleFromFavorites(parseInt(id!))
                              )
                            : dispatch(addArticleToFavorites({id}))
                    }}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
