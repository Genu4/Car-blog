import { Button, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
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
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are requared')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    
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
            <form onSubmit={handleSubmit}>
                <h3 className="form-header">Please leave a review</h3>
                <div>
                    <input
                        className="reviewer-name-field"
                        type="text"
                        placeholder="Your name..."
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <textarea
                        className="reviewe-text-field"
                        placeholder="Leave a review..."
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" className="send-btn">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Reviews
