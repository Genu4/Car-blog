import './About.scss'
type Props = {}
const About = (props: Props) => {
    return (
        <div className='about'>
            <h1 className='about-header'>About us</h1>
            <p>
                They have long been part of our lives. This is especially true
                for men and young people, although girls are also not far
                behind. Now many already have it or dream of it. You can find
                something for every taste, for every person, designed for
                absolutely any conditions and environment. They have become part
                of the surrounding reality, now we cannot do much without them.
                Yes! It's all about cars! Our blog is dedicated to them.
            </p>
            <p>
                Here you can read the latest news about cars, reviews and
                reviews.
            </p>
            <p>Welcome to the exciting world on <span>wheels</span>!</p>
        </div>
    )
}
export default About
