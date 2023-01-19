import articlesArray from '../../components/Articles/articlesArray'

type ArticlesProps = {
    category: string
    title: string
    author: string
    summary: string
    image: string
    articleText: string
}

const ArticlePage = ({
    category,
    title,
    author,
    image,
    articleText,
}: ArticlesProps) => {
    return (
        <div>
            <img src={image} alt="img" />
            <p>{category}</p>
            <p>{author}</p>
            <h1 className='article-title'>{title}</h1>
            <div>{articleText}</div>
        </div>
    )
}
export default ArticlePage
