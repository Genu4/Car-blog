import { Card, Grid } from '@mui/material'
import { ArticlesProps } from 'components/Articles/articlesArray'
import ArticlesListItem from 'components/Articles/ArticlesListItem'

type Props = {
    article: ArticlesProps
    removeFromFavorites: (id: number) => void
}

const FavoriteArticlesListItemExtended = ({ article }: Props) => {
    return (
        <>
            <div>FavoriteArticlesListItemExtended</div>
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
        </>
    )
}
export default FavoriteArticlesListItemExtended
