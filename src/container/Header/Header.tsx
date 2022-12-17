import MobileMenu from 'components/MobileMenu/MobileMenu'
import MobileHeader from './MobileHeader'
import logo from 'assets/carblog_logo.png'
import './Header.scss'



const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="header-nav-list-item has-child">
                                <a className="header-nav-list-link" href="#">
                                    Car Deals
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <div className="sub-menu-item-link-blocks">
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-car-deals-img-1">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Car Deals
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            CAR DEALERS ARE
                                                            SLASHING PRICES AS
                                                            MARKET SLOWS
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-car-deals-img-2">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Car Deals
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            ‘BEST-EVER NEW CAR
                                                            DEALS AVAILABLE’ AS
                                                            SALES FALL
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-car-deals-img-3">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Car Deals
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            CASH IN ON THE BEST
                                                            CAR DEALS RIGHT NOW
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-car-deals-img-4">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Car Deals
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            NEW CAR DEALS FOR
                                                            EVERY TYPE OF BUYER
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-nav-list-item has-child">
                                <a className="header-nav-list-link" href="#">
                                    News
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <div className="sub-menu-item-link-blocks">
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-news-img-1">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">News</a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            WAYMO WILL BUILD
                                                            SELF-DRIVING CARS IN
                                                            MICHIGAN
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-news-img-2">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">News</a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            FORD SAYS A COMPACT
                                                            PICKUP TRUCK IS
                                                            COMING
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-news-img-3">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">News</a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            NOVITEC SHOWS OFF
                                                            ITS VERSION OF THE
                                                            FERRARI 812
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-news-img-4">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">News</a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            PORSCHE TAYCAN
                                                            FACTORY WILL HELP
                                                            CLEAN THE AIR
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-nav-list-item has-child">
                                <a className="header-nav-list-link" href="#">
                                    Reviews
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <div className="sub-menu-item-link-blocks">
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-reviews-img-1">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Reviews
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            TOYOTA PRIUS AWD-E
                                                            FIRST DRIVE REVIEW
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-reviews-img-2">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Reviews
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            HERITAGE EDITION
                                                            FORD MUSTANG REVIEW
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-reviews-img-3">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Reviews
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            CHEVY SILVERADO 1500
                                                            TRAIL BOSS DRIVERS
                                                            REVIEW
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sub-menu-block">
                                                <a href="#">
                                                    <div className="sub-menu-block-reviews-img-4">
                                                        <p className="sub-menu-block-category">
                                                            <a href="#">
                                                                Reviews
                                                            </a>
                                                        </p>
                                                    </div>
                                                </a>

                                                <div className="sub-menu-block-content">
                                                    <h3 className="sub-menu-block-header">
                                                        <a href="#">
                                                            FORD F-150 RAPTOR
                                                            DRIVERS’ NOTES
                                                            REVIEW
                                                        </a>
                                                    </h3>
                                                    <p className="sub-menu-block-date">
                                                        December 2022
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="#">
                                    Favorites
                                </a>
                            </li>
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="#">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </nav>
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
                <MobileMenu />
            </div>
        </header>
    )
}

export default Header
