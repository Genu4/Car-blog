import './SubMenuDealsList.scss'
import Grid from '@mui/material/Grid'
import articlesArray from 'components/Articles/articlesArray'
import SubMenuDealsListItem from './SubMenuDealsItem'


type ArticlesProps = {
    id: number
    category: string
    title: string
    image: string
}


const SubMenuDeals = () => {
    return (
        <>
            <div className="article-list">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    spacing={4}
                >
                    {articlesArray
                        .filter(
                            ({ category }: ArticlesProps) =>
                                category === 'Deals'
                        )
                        .map(
                            ({
                                id,
                                category,
                                title,
                                image,
                            }: ArticlesProps) => (
                                <Grid item xs={12} sm={6} lg={4}>
                                    <SubMenuDealsListItem
                                        id={id}
                                        category={category}
                                        title={title}
                                        image={image}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>
            </div>
        </>
    )
}
export default SubMenuDeals
