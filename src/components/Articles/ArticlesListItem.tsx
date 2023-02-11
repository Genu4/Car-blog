import './ArticlesListItem.scss'
import { Button, Card, CardContent } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import {
    addArticleToFavorites,
    removeArticleFromFavorites,
} from 'redux/favoriteArticleReducer'
import Socials from 'components/Socials/Socials'

type Props = {
    id: number
    category: string
    title: string
    author: string
    summary: string
    image: string
}
const ArticlesListItem = ({
    id,
    category,
    title,
    author,
    summary,
    image,
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
                    <Link
                        className="article-card-title-text"
                        to={`/article/${id}`}
                    >
                        {title}
                    </Link>
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
                        <Button
                            onClick={() => {
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                                isLiked
                                    ? dispatch(removeArticleFromFavorites(id))
                                    : dispatch(addArticleToFavorites({ id }))
                            }}
                            className="article-card-likes"
                        >
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                        <Socials />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlesListItem
