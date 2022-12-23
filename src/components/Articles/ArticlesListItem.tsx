import { Card, CardContent } from '@mui/material'
import './ArticlesListItem.scss'

type Props = {
    title: string
    
}
const ArticlesListItem = (props: Props) => {
    return (
        <Card className="article-card-item">
            <CardContent>
                <div className="article-card-category-block">
                    <a href="#" className="article-card-category">
                        Car Deals
                    </a>
                </div>

                <h2 className="article-card-title">
                    <a href="#">
                        {props.title}
                    </a>
                </h2>
                <div className="article-autor-date">
                    by Gen January 23, 2019
                </div>
                <p className="article-short-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, omnis et! Officiis dignissimos a accusantium?
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
