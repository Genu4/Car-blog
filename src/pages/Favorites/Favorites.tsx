import { Grid } from '@mui/material'
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
        <div className="favorites-content">
            <h1 className="favorites-header">Favorites</h1>
            <div>
                <Grid container spacing={4}>
                    <FavoriteArticlesList
                        favoriteArticles={favoriteArticles}
                        removeFromFavorites={removeFromFavorites}
                    />
                </Grid>
            </div>
        </div>
    )
}
export default Favorites
