import MobileHeader from './MobileHeader'
import logo from './images/carbloglogo.png'
import './Header.scss'
import Menu from 'components/Menu/Menu'

type Props = {
    favoriteArticles: {
        [id:number]:number
    }
}

const Header = ({ favoriteArticles }: Props) => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <Menu favoriteArticles={favoriteArticles}/>
                    <div className="header-search">
                        <div className="search-field-block">
                            <input
                                className="search-field"
                                type="search"
                                name=""
                                id=""
                                placeholder="Type and hit enter "
                            />
                        </div>

                        <div className="header-search-button"></div>
                    </div>
                </div>

                <MobileHeader />
            </div>
        </header>
    )
}

export default Header
