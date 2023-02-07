import { Button, Card, CardContent } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

import './ArticlesListItem.scss'
import { addArticleToFavorites } from 'redux/favoriteArticleReducer'

type Props = {
    id: number
    category: string
    title: string
    author: string
    summary: string
    image: string
    addToFavoriteArticles: (id: number) => void
    removeFromFavorites: (id: number) => void
}
const ArticlesListItem = ({
    id,
    category,
    title,
    author,
    summary,
    image,
    addToFavoriteArticles,
    removeFromFavorites,
}: Props) => {
    const isLiked = useAppSelector((state) => state.likeArticles[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="article-card-item">
            <CardContent>
                <div className="article-card-img">
                    <img src={image} alt="car-img" />
                </div>
                <div className="article-card-category-block">
                    <Link className="article-card-category" to={`/${category}`}>
                        {category}
                    </Link>
                </div>
                <h2 className="article-card-title">
                    <Link to={`/article/${id}`}>{title}</Link>
                </h2>
                <div className="article-autor-date">{author}</div>
                <p className="article-short-content">{summary}</p>
                <div className="read-more-btn">
                    <Link to={`/article/${id}`} className="read-more-btn-link">
                        Read the article
                    </Link>
                </div>
                <div className="article-card-socials">
                    <div className="article-card-socials-block">
                        <button
                            onClick={() => {
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                                dispatch(addArticleToFavorites(id))
                            }}
                            className="article-card-likes"
                        >
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </button>

                        <a href="/">
                            <button className="article-card-facebook"></button>
                        </a>
                        <a href="/">
                            <button className="article-card-twitter"></button>
                        </a>
                        <a href="/">
                            <button className="article-card-pinterest"></button>
                        </a>
                        <a href="/">
                            <button className="article-card-email"></button>
                        </a>
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(addArticleToFavorites({id}))}
                    >
                        Add to fav
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => removeFromFavorites(id)}
                    >
                        Remove From Fav
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlesListItem
