import { Card, CardContent, TextareaAutosize, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack Smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aspernatur consectetur aperiam quibusdam quisquam quia iure nam? Minus atque magni quis omnis et, sint pariatur. Atque amet quia accusamus tenetur.',
        },
        {
            name: 'Adam Black',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aspernatur consectetur aperiam quibusdam quisquam quia iure nam? Minus atque magni quis omnis et, sint pariatur. Atque amet quia accusamus tenetur.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    return (
        <div className="reviews-block">
            <Typography variant="h4" className="article-reviews-header">
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text }: Review, i) => (
                    <Card className="review-card" variant="outlined" key={i}>
                        <CardContent>
                            <div className="reviewer-name">
                                Name:
                                <p>{name}</p>
                            </div>
                            <div className="review-text">
                                Review:
                                <p>{text}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form>
                <h3 className='form-header'>Please leave a review</h3>
                <div>
                    <TextField className='reviewer-name-field' placeholder='Your name'/>
                </div>
                <div>
                    <TextareaAutosize className='reviewe-text-field' placeholder='Leave a review'/>
                </div>
            </form>
        </div>
    )
}
export default Reviews
