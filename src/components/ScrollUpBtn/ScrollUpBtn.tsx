import ScrollToTop from 'react-scroll-up'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import './ScrollUpBtn.scss'

type Props = {}
const ScrollUpBtn = (props: Props) => {
    return (
        <ScrollToTop showUnder={300} style={{ right: 5 }}>
            <div className="scroll-block">
                <p className="scroll-arrow">
                    <ArrowDropUpIcon />
                </p>
                <p className="scroll-text">Up</p>
            </div>
        </ScrollToTop>
    )
}
export default ScrollUpBtn
