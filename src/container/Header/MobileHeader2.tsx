import './MobileHeader2.scss'
import mobilelogo from 'D:/Rabota/IT/FrontEnd/React/blog-project/src/assets/carblog_logo.png'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

type Anchor = 'left'

type Props = {}
const MobileHeader = (props: Props) => {
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
                    <a className="mobile-nav-social fa-facebook" href="#"></a>
                    <a className="mobile-nav-social fa-twitter" href="#"></a>
                    <a className="mobile-nav-social fa-instagram" href="#"></a>
                    <a className="mobile-nav-social fa-pinterest" href="#"></a>
                    <a className="mobile-nav-social fa-youtube" href="#"></a>
                    <a className="mobile-nav-social fa-email" href="#"></a>
                </div>
                <div className="line"></div>
                <ul className="mobile-nav-list">
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            HOME
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            CAR DEALS
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            NEWS
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            REVIEWS
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            FAVOURITES
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            ABOUT
                        </a>
                    </li>
                    <li className="mobile-nav-list-item">
                        <a className="mobile-nav-list-link" href="">
                            CONTACTS
                        </a>
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
                        <img src={mobilelogo} alt="Logo" />
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
