import { Card, CardContent } from '@mui/material'
import './ArticlesListItem.scss'

type Props = {
    category: string
    title: string
    author: string
    summary: string
    
}
const ArticlesListItem = (props: Props) => {
    return (
        <Card className="article-card-item">
            <CardContent>
                <div className="article-card-category-block">
                    <a href="#" className="article-card-category">
                        {props.category}
                    </a>
                </div>

                <h2 className="article-card-title">
                    <a href="#">
                        {props.title}
                    </a>
                </h2>
                <div className="article-autor-date">
                    {props.author}
                </div>
                <p className="article-short-content">
                    {props.summary}
                </p>
                <div className="read-more-btn">
                    <a className="read-more-btn-link" href="#">
                        Read the article
                    </a>
                </div>
                <div className='article-card-socials'>
                    <div className='article-card-socials-block'>
                    <a className='article-card-likes' href="#"></a>
                    <a className='article-card-facebook' href="#"></a>
                    <a className='article-card-twitter' href="#"></a>
                    <a className='article-card-pinterest' href="#"></a>
                    <a className='article-card-email' href="#"></a>
                    </div>
                    
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlesListItem
