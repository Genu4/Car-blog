import './SubMenuDealsListItem.scss'
import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    category: string
    title: string
    image: string
}
const SubMenuDealsListItem = ({ id, category, title, image }: Props) => {
    return (
        <Card className="SubMenuDealsListItem-item">
            <CardContent>
                <div className="SubMenuDealsListItem-img">
                    <Link
                        className="SubMenuDealsListItem-category"
                        to={`/article/${id}`}
                    >
                        <img src={image} alt="car-img" />
                    </Link>
                </div>
                <div className="SubMenuDealsListItem-category-block">
                    <Link
                        className="SubMenuDealsListItem-category"
                        to={`/${category}`}
                    >
                        {category}
                    </Link>
                </div>
                <h2 className="SubMenuDealsListItem-title">
                    <Link
                        className="SubMenuDealsListItem-title-text"
                        to={`/article/${id}`}
                    >
                        {title}
                    </Link>
                </h2>
            </CardContent>
        </Card>
    )
}
export default SubMenuDealsListItem
