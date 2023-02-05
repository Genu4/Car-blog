import { ArticlesProps } from 'components/Articles/articlesArray'

type Props = {
    article: ArticlesProps
    removeFromFavorites: (id: number) => void
}
const FavoriteArticlesListItem = ({ article, removeFromFavorites }: Props) => {
    return (
        <div>
            <div>
                {article.id}: {article.title};
            </div>
            <div>
                <img src={article.image} alt="" />
            </div>
            <button onClick={() => removeFromFavorites(article.id)}>
                Delete
            </button>
        </div>
    )
}
export default FavoriteArticlesListItem
