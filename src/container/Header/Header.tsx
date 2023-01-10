import MobileHeader2 from './MobileHeader'
import logo from './images/carbloglogo.png'
import './Header.scss'
import Menu from 'components/Menu/Menu'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="" />
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
                {/* <MobileHeader /> */}
                <MobileHeader2 />
                {/* <MobileMenu /> */}
                {/* <MobileMenu2 /> */}
            </div>
        </header>
    )
}

export default Header
