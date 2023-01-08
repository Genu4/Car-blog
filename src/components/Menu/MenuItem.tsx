import './MenuItem.scss'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'header-nav-list-link-active' : 'header-nav-list-link'
            }
        >
            {children}
        </NavLink>
    )
}
export default MenuItem
