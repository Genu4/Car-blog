import './FavoriteArticlesListItem.scss'
import { ArticlesProps } from 'components/Articles/articlesArray'
import { Card, CardContent, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import {
    addArticleToFavorites,
    removeArticleFromFavorites,
} from 'redux/favoriteArticleReducer'
import Socials from 'components/Socials/Socials'

type Props = {
    article: ArticlesProps
    addToFavoriteArticles: (id: number) => void
    removeFromFavorites: (id: number) => void
}
const FavoriteArticlesListItem = ({
    article
}: Props) => {
    const isLiked = useAppSelector((state) => state.likeArticles[article.id])
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className="favorite-article-card-item">
                <CardContent>
                    <div className="article-card-img">
                        <img src={article.image} alt="car-img" />
                    </div>
                    <div className="article-card-category-block">
                        <Link
                            className="article-card-category"
                            to={`/${article.category}`}
                        >
                            {article.category}
                        </Link>
                    </div>
                    <h2 className="article-card-title">
                        <Link className="article-card-title-text" to={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </h2>
                    <div className="article-autor-date">{article.author}</div>
                    <p className="article-short-content">{article.summary}</p>
                    <div className="read-more-btn">
                        <Link
                            to={`/article/${article.id}`}
                            className="read-more-btn-link"
                        >
                            Read the article
                        </Link>
                    </div>
                    <div className="article-card-socials">
                        <div className="article-card-socials-block">
                            <Button
                            onClick={() => {
                                isLiked
                                    ? dispatch(removeLike(article.id))
                                    : dispatch(addLike(article.id))
                                isLiked
                                    ? dispatch(removeArticleFromFavorites(article.id))
                                    : dispatch(addArticleToFavorites(null))
                            }}
                            className="article-card-likes"
                        >
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                            <Socials/>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default FavoriteArticlesListItem
