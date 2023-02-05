import { Grid } from '@mui/material'
import articlesArray, {
    ArticlesProps,
    getArticlesObject,
} from 'components/Articles/articlesArray'
import FavoriteArticlesList from 'components/FavoriteArticlesList/FavoriteArticlesList'
import './Favorites.scss'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }

    removeFromFavorites: (id: number) => void
}

const Favorites = ({ favoriteArticles, removeFromFavorites }: Props) => {
    return (
        <>
            <div className="fav-content">
                <Grid container spacing={4}>
                    <FavoriteArticlesList
                        favoriteArticles={favoriteArticles}
                        removeFromFavorites={removeFromFavorites}
                    />
                </Grid>
            </div>
        </>
    )
}
export default Favorites
