import ArticlesListItem from './ArticlesListItem'
import articlesArray from './articlesArray'
import Grid from '@mui/material/Grid'

type ArticlesProps = {
    category: string
    title: string
    author: string
    summary: string
}

type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" spacing={4}>
                {articlesArray.map((article: ArticlesProps) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <ArticlesListItem
                            category={article.category}
                            title={article.title}
                            author={article.author}
                            summary={article.summary}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ArticlesList
