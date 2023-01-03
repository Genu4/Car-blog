import ArticlesList from 'components/Articles/ArticlesList'
import Slider from 'components/Swiper/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Slider />
            <ArticlesList />
        </>
    )
}
export default Home
