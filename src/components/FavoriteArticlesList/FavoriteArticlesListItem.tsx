import { ArticlesProps } from 'components/Articles/articlesArray'
import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import './FavoriteArticlesListItem.scss'

type Props = {
    article: ArticlesProps
    addToFavoriteArticles: (id: number) => void
    removeFromFavorites: (id: number) => void
}
const FavoriteArticlesListItem = ({
    article,
    addToFavoriteArticles,
    removeFromFavorites,
}: Props) => {
    return (
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
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
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
                        {/* <button
                        onClick={() => {
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id));
                                addToFavoriteArticles(id);    
                        }}
                        className="article-card-likes"
                    >
                        {isLiked ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </button> */}

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
                        <Button
                            variant="outlined"
                            onClick={() => removeFromFavorites(article.id)}
                        >
                            Remove From Liked
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default FavoriteArticlesListItem
