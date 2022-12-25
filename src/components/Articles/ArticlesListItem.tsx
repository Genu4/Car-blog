import { Card, CardContent } from '@mui/material'
import './ArticlesListItem.scss'

type Props = {
    category: string
    title: string
    author: string
    summary: string
    image: string
}
const ArticlesListItem = ({
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
                    <a href="/some/valid/uri">{title}</a>
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
                        <a href="/some/valid/uri"><span className="article-card-likes"></span></a>
                        <a href="/some/valid/uri"><span className="article-card-facebook"></span></a>
                        <a href="/some/valid/uri"><span className="article-card-twitter"></span></a>
                        <a href="/some/valid/uri"><span className="article-card-pinterest"></span></a>
                        <a href="/some/valid/uri"><span className="article-card-email"></span></a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlesListItem
