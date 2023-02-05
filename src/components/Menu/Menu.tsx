import { Link } from 'react-router-dom'
import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
}

const Menu = ({ favoriteArticles }: Props) => {
    console.log(favoriteArticles)
    return (
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-list-item">
                    <MenuItem to="/">Home</MenuItem>
                </li>
                <li className="header-nav-list-item has-child">
                    <MenuItem to="/deals">Deals</MenuItem>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <div className="sub-menu-item-link-blocks">
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-car-deals-img-1">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Car Deals
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                CAR DEALERS ARE SLASHING PRICES
                                                AS MARKET SLOWS
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-car-deals-img-2">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Car Deals
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                ‘BEST-EVER NEW CAR DEALS
                                                AVAILABLE’ AS SALES FALL
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-car-deals-img-3">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Car Deals
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                CASH IN ON THE BEST CAR DEALS
                                                RIGHT NOW
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-car-deals-img-4">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Car Deals
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                NEW CAR DEALS FOR EVERY TYPE OF
                                                BUYER
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
                    <MenuItem to="/news">News</MenuItem>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <div className="sub-menu-item-link-blocks">
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-news-img-1">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    News
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                WAYMO WILL BUILD SELF-DRIVING
                                                CARS IN MICHIGAN
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-news-img-2">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    News
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                FORD SAYS A COMPACT PICKUP TRUCK
                                                IS COMING
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-news-img-3">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    News
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                NOVITEC SHOWS OFF ITS VERSION OF
                                                THE FERRARI 812
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-news-img-4">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    News
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                PORSCHE TAYCAN FACTORY WILL HELP
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
                    <MenuItem to="/reviews">Reviews</MenuItem>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <div className="sub-menu-item-link-blocks">
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-reviews-img-1">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Reviews
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                TOYOTA PRIUS AWD-E FIRST DRIVE
                                                REVIEW
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-reviews-img-2">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Reviews
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                HERITAGE EDITION FORD MUSTANG
                                                REVIEW
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-reviews-img-3">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Reviews
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                CHEVY SILVERADO 1500 TRAIL BOSS
                                                DRIVERS REVIEW
                                            </a>
                                        </h3>
                                        <p className="sub-menu-block-date">
                                            December 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="sub-menu-block">
                                    <a href="/some/valid/uri">
                                        <div className="sub-menu-block-reviews-img-4">
                                            <p className="sub-menu-block-category">
                                                <a href="/some/valid/uri">
                                                    Reviews
                                                </a>
                                            </p>
                                        </div>
                                    </a>

                                    <div className="sub-menu-block-content">
                                        <h3 className="sub-menu-block-header">
                                            <a href="/some/valid/uri">
                                                FORD F-150 RAPTOR DRIVERS’ NOTES
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
                    <MenuItem to="/favorites">
                        Favorites:{' '}
                        <span>{Object.keys(favoriteArticles).length}: {' '}</span>
                        <span>
                            {Object.keys(favoriteArticles).map((articleId) => (
                                <span key={articleId}>
                                    {articleId} : {favoriteArticles[parseInt(articleId)]};
                                </span>
                            ))}
                        </span>
                    </MenuItem>
                </li>
                <li className="header-nav-list-item">
                    <MenuItem to="/about">About</MenuItem>
                </li>
                <li className="header-nav-list-item">
                    <MenuItem to="/contacts">Contacts</MenuItem>
                </li>
            </ul>
        </nav>
    )
}
export default Menu
