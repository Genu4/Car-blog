const MobileMenu = () => {
    return (
        <div className="mobile-nav">
            <div className="mobile-nav-socials">
                <a className="mobile-nav-social fa-facebook" href="#"></a>
                <a className="mobile-nav-social fa-twitter" href="#"></a>
                <a className="mobile-nav-social fa-instagram" href="#"></a>
                <a className="mobile-nav-social fa-pinterest" href="#"></a>
                <a className="mobile-nav-social fa-youtube" href="#"></a>
                <a className="mobile-nav-social fa-email" href="#"></a>
            </div>
            <ul className="mobile-nav-list">
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">HOME</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">CAR DEALS</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">NEWS</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">REVIEWS</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">FAVOURITES</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">ABOUT</a>
                </li>
                <li className="mobile-nav-list-item">
                    <a className="mobile-nav-list-link" href="">CONTACTS</a>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
