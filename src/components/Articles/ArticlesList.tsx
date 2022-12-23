import ArticlesListItem from './ArticlesListItem'
import Grid from '@mui/material/Grid'

type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" spacing={4}>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem title="CAR DEALERS ARE SLASHING PRICES AS MARKET SLOWS" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="WAYMO WILL BUILD SELF-DRIVING CARS IN MICHIGAN" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="2019 TOYOTA PRIUS AWD-E FIRST DRIVE REVIEW" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="‘BEST-EVER NEW CAR DEALS AVAILABLE’ AS SALES FALL" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="FORD SAYS A COMPACT PICKUP TRUCK IS COMING" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="2019 HERITAGE EDITION FORD MUSTANG REVIEW" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="CASH IN ON THE BEST CAR DEALS RIGHT NOW" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="NOVITEC SHOWS OFF ITS VERSION OF THE FERRARI 812" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ArticlesListItem  title="2019 CHEVY SILVERADO 1500 TRAIL BOSS DRIVERS REVIEW" />
                </Grid>
            </Grid>
        </>
    )
}
export default ArticlesList
