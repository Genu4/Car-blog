import { Button, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Comments.scss'

type Props = {}

type Comment = {
    name: string
    text: string
}

const Comments = (props: Props) => {
    const arrComments: Comment[] = [
        {
            name: 'Jack Smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aspernatur consectetur aperiam quibusdam quisquam quia iure nam? Minus atque magni quis omnis et, sint pariatur. Atque amet quia accusamus tenetur.',
        },
        {
            name: 'Adam Black',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aspernatur consectetur aperiam quibusdam quisquam quia iure nam? Minus atque magni quis omnis et, sint pariatur. Atque amet quia accusamus tenetur.',
        },
    ]

    const [Comments, setComments] = useState<Comment[]>(arrComments)
    const [newComment, setNewComment] = useState<Comment>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState: Comment) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment((prevState: Comment) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newComment.name === '' || newComment.text === '') {
            alert('All fields are requared')
        } else {
            setComments((prevState: Comment[]) => {
                return [...prevState, newComment]
            })
            setNewComment({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div className="comments-block">
            <Typography variant="h4" className="article-comments-header">
                Comments
            </Typography>
            <div>
                {Comments.map(({ name, text }: Comment, i) => (
                    <Card className="comment-card" variant="outlined" key={i}>
                        <CardContent>
                            <div className="commenter-name">
                                Name:
                                <p>{name}</p>
                            </div>
                            <div className="commen-text">
                                Comment:
                                <p>{text}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='form-block'>
                <form onSubmit={handleSubmit}>
                    <h3 className="form-header">Please leave a comment</h3>
                    <div>
                        <input
                            className="commenter-name-field"
                            type="text"
                            placeholder="Your name..."
                            value={newComment.name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <textarea
                            className="comment-text-field"
                            placeholder="Leave a comment..."
                            value={newComment.text}
                            onChange={handleText}
                        />
                    </div>
                    <Button type="submit" className="send-btn">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default Comments
