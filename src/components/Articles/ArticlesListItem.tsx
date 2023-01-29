import { Card, CardContent } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'

import './ArticlesListItem.scss'


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
    return (
        <Card className="article-card-item">
            <CardContent>
                <div className="article-card-img">
                    <a href="/some/valid/uri">
                        <img src={image} alt="" />
                    </a>
                </div>
                <div className="article-card-category-block">
                    <a href="/some/valid/uri" className="article-card-category">
                        {category}
                    </a>
                </div>
                <h2 className="article-card-title">
                    <Link to={`/article/${title}`}>{title}</Link>
                    
                </h2>
                <div className="article-autor-date">{author}</div>
                <p className="article-short-content">{summary}</p>
                <div className="read-more-btn">
                    <a className="read-more-btn-link" href="/some/valid/uri">
                        Read the article
                    </a>
                </div>
                <div className="article-card-socials">
                    <div className="article-card-socials-block">
                        <button className="article-card-likes"><FavoriteBorderIcon className='like'/></button>
                        <a href="/"><button className="article-card-facebook"></button></a>
                        <a href="/"><button className="article-card-twitter"></button></a>
                        <a href="/"><button className="article-card-pinterest"></button></a>
                        <a href="/"><button className="article-card-email"></button></a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlesListItem
