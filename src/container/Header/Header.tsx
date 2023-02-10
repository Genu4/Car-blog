import './Header.scss'
import MobileHeader from './MobileHeader'
import logo from './images/carbloglogo.png'
import Menu from 'components/Menu/Menu'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <Link to="/"><img  className="header-logo-img" src={logo} alt="" /></Link>
                    </div>
                    <Menu />
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
