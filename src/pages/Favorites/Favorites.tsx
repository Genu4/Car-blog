import { Grid } from '@mui/material'
import FavoriteArticlesList from 'components/FavoriteArticlesList/FavoriteArticlesList'

import './Favorites.scss'

const Favorites = () => {
    
    return (
        <div className="favorites-content">
            <h1 className="favorites-header">Favorites</h1>
            <div>
                <Grid container spacing={4}>
                    <FavoriteArticlesList />
                </Grid>
            </div>
        </div>
    )
}
export default Favorites
