import ArticlesListItem from './ArticlesListItem'
import articlesArray from './articlesArray'
import Grid from '@mui/material/Grid'
import './ArticleList.scss'

type ArticlesProps = {
    id: number
    category: string
    title: string
    author: string
    summary: string
    image: string
}

const ArticlesList = () => {
    return (
        <div className="article-list">
            <Grid container direction="row" justifyContent="center" spacing={4}>
                {articlesArray.map(
                    ({
                        id,
                        category,
                        title,
                        author,
                        summary,
                        image,
                    }: ArticlesProps) => (
                        <Grid item xs={12} sm={6} lg={4}>
                            <ArticlesListItem
                                id={id}
                                category={category}
                                title={title}
                                author={author}
                                summary={summary}
                                image={image}
                                />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}
export default ArticlesList
