import './Footer.scss'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-socials">
                    <div className="footer-socials-part">
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-facebook"></div>
                            <p className="socials-name">FACEBOOK</p>
                        </a>
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-twitter"></div>
                            <p className="socials-name">TWITTER</p>
                        </a>
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-instagram"></div>
                            <p className="socials-name">INSTAGRAM</p>
                        </a>
                    </div>
                    <div className="footer-socials-part">
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-pinterest"></div>
                            <p className="socials-name">PINTEREST</p>
                        </a>
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-youtube"></div>
                            <p className="socials-name">YOUTUBE</p>
                        </a>
                        <a className="socials-link" href="/">
                            <div className="footer-socials-logo-email"></div>
                            <p className="socials-name">EMAIL</p>
                        </a>
                    </div>
                </div>
                <div className="subscribe-newsletter"></div>
            </div>
        </div>
    )
}
export default Footer
