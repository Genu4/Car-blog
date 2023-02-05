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

type Props = { 
    addToFavoriteArticles: (id: number, count: number) => void 
    removeFromFavorites: (total: number, price: number) => void 
}

const ArticlesList = ({ addToFavoriteArticles, removeFromFavorites }: Props) => {
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
                                addToFavoriteArticles={addToFavoriteArticles}
                                removeFromFavorites={removeFromFavorites}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}
export default ArticlesList
