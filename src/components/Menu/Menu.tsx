import './Menu.scss'
import MenuItem from './MenuItem'
import { useAppSelector } from 'redux/hooks'

const Menu = () => {
    const favoritesArticles = useAppSelector((state) => state.favoritesArticles)

    return (
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-list-item">
                    <MenuItem to="/">Home</MenuItem>
                </li>
                <li className="header-nav-list-item has-child">
                    <MenuItem to="/deals">Deals</MenuItem>
                </li>
                <li className="header-nav-list-item has-child">
                    <MenuItem to="/news">News</MenuItem>
                </li>
                <li className="header-nav-list-item has-child">
                    <MenuItem to="/reviews">Reviews</MenuItem>
                </li>
                <li className="header-nav-list-item">
                    <MenuItem to="/favorites">
                        Favorites:{' '}
                        <span>{Object.keys(favoritesArticles).length}</span>
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
