import './ArticlePageContent.scss'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link, useParams } from 'react-router-dom'
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
import Socials from 'components/Socials/Socials'

type ArticlesObject = {
    [id: number]: ArticlesProps
}

const ArticlePageContent = () => {
    const { id } = useParams()
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)
    const isLiked = useAppSelector((state) => state.likeArticles[parseInt(id!)])
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="article-content">
                <div className="article-title-block">
                    <p className="article-title">
                        {articlesObject[parseInt(id!)].title}
                    </p>
                </div>

                <div className='article-category-block'>
                    <Link
                        className="article-category"
                        to={`/${articlesObject[parseInt(id!)].category}`}
                    >
                        {articlesObject[parseInt(id!)].category}
                    </Link>
                </div>
                <div>
                    <p className="article-author">
                        {articlesObject[parseInt(id!)].author}
                    </p>
                </div>
                <div className="article-img-block">
                    <img
                        className="article-img"
                        src={articlesObject[parseInt(id!)].image}
                        alt=""
                    />
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: articlesObject[parseInt(id!)].articleText,
                    }}
                ></div>
                <div className="article-socials-block">
                    <Button
                        className="article-likes"
                        onClick={() => {
                            isLiked
                                ? dispatch(removeLike(parseInt(id!)))
                                : dispatch(addLike(parseInt(id!)))
                            isLiked
                                ? dispatch(
                                      removeArticleFromFavorites(parseInt(id!))
                                  )
                                : dispatch(addArticleToFavorites({ id }))
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Socials />
                </div>
            </div>
        </>
    )
}
export default ArticlePageContent
