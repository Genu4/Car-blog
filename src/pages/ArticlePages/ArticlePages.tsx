import { useParams } from "react-router-dom"

type Props = {}
const ArticlePages = (props: Props) => {
    const {title} = useParams()
    console.log(title)
  return (
    <div>ArticlePages</div>
  )
}
export default ArticlePages