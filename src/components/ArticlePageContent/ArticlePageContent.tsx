import './ArticlePageContent.scss'
import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import Reviews from 'components/Reviews/Reviews'
import Socials from 'components/Socials/Socials'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { addLike, removeLike } from 'redux/likeReducer'
import {
    addArticleToFavorites,
    removeArticleFromFavorites,
} from 'redux/favoriteArticleReducer'

type ArticlesObject = {
    [id: number]: ArticlesProps
}

type Props = {
    article: ArticlesProps
    addToFavoriteArticles: (id: number) => void
    removeFromFavorites: (id: number) => void
}

const ArticlePageContent = ({ article }: Props) => {
    const { id } = useParams()

    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)

    const isLiked = useAppSelector((state) => state.favoritesArticles[parseInt(id!)])
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="article-content">
                <Button
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(parseInt(id!)))
                            : dispatch(addLike(parseInt(id!)))
                        isLiked
                            ? dispatch(removeArticleFromFavorites(parseInt(id!)))
                            : dispatch(addArticleToFavorites({ id }))
                    }}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div>
                    <p className="article-title">
                        {articlesObject[parseInt(id!)].title}
                    </p>
                </div>

                <div className="article-category-block">
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
                <div className="article-content-socials">
                    <Socials />
                </div>
            </div>
            <Reviews />
        </>
    )
}
export default ArticlePageContent
