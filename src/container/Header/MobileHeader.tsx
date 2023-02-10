import './MobileHeader.scss'
import mobilelogo from './images/carbloglogo.png'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import MenuItem from 'components/Menu/MenuItem'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

type Anchor = 'left'

type Props = {}
const MobileHeader = (props: Props) => {
    const favoritesArticles = useAppSelector((state) => state.favoritesArticles)
    const [state, setState] = React.useState({
        left: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 270 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="mobile-nav-list-menu">
                <div className="close-menu-btn-block">
                    <Button
                        className="close-menu-btn"
                        onClick={toggleDrawer(anchor, true)}
                    >
                        X
                    </Button>
                </div>
                <div className="mobile-nav-socials">
                    <Link
                        className="mobile-nav-social fa-facebook"
                        to={'/error'}
                    ></Link>
                    <Link
                        className="mobile-nav-social fa-twitter"
                        to={'/error'}
                    ></Link>
                    <Link
                        className="mobile-nav-social fa-instagram"
                        to={'/error'}
                    ></Link>
                    <Link
                        className="mobile-nav-social fa-pinterest"
                        to={'/error'}
                    ></Link>
                    <Link
                        className="mobile-nav-social fa-youtube"
                        to={'/error'}
                    ></Link>
                    <Link
                        className="mobile-nav-social fa-email"
                        to={'/error'}
                    ></Link>
                </div>
                <div className="line"></div>
                <ul className="mobile-nav-list">
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/">Home</MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/deals">Deals</MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/news">News</MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/reviews">Reviews</MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/favorites">
                            Favorites:{' '}
                            <span>{Object.keys(favoritesArticles).length}</span>
                        </MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/about">About</MenuItem>
                    </li>
                    <li className="mobile-nav-list-item">
                        <MenuItem to="/contacts">Contacts</MenuItem>
                    </li>
                </ul>
            </List>
        </Box>
    )
    return (
        <header>
            <div className="container">
                <div className="mobile-header">
                    <div>
                        {(['left'] as const).map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button
                                    className="nav-button-mobile"
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    <span className="nav-button-mobile-icon"></span>
                                </Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="mobile-logo">
                        <Link to="/">
                            <img
                                className="mobile-logo-img"
                                src={mobilelogo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="mobile-header-search">
                        <div className="mobile-search-field-block">
                            <input
                                className="mobile-search-field"
                                type="search"
                                name=""
                                id=""
                                placeholder="Type and hit enter "
                            />
                        </div>

                        <div className="mobile-header-search-button"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default MobileHeader
