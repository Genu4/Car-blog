import ArticlesListItem from './ArticlesListItem'
import articlesArray from './articlesArray'
import Grid from '@mui/material/Grid'
import './ArticleList.scss'

type ArticlesProps = {
    category: string
    title: string
    author: string
    summary: string
    image: string
}

type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <div className='article-list'>
            <Grid container direction="row" justifyContent="center" spacing={4}>
                {articlesArray.map(
                    ({
                        category,
                        title,
                        author,
                        summary,
                        image,
                    }: ArticlesProps) => (
                        <Grid item xs={12} sm={6} lg={4}>
                            <ArticlesListItem
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
