import { ArticlesProps } from 'components/Articles/articlesArray'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addArticleToFavorites, removeArticleFromFavorites } from 'redux/favoriteArticleReducer'

type Props = {
    article: ArticlesProps
}
const Socials = ({
    article,
}: Props) => {
    const isLiked = useAppSelector((state) => state.likeArticles[article.id])
    const dispatch = useAppDispatch()

  return (
    
    <div className="article-card-socials">
                        <div className="article-card-socials-block">
                            <button
                        onClick={() => {
                              
                                isLiked
                                    ? dispatch(removeLike(article.id))
                                    : dispatch(addLike(article.id));
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
                    </div>
  )
}
export default Socials