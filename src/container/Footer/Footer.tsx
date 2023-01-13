import './Footer.scss'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-socials">
                    <h4 className="footer-socials-header">
                        you can contact us
                    </h4>
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
                <div className="subscribe-newsletter">
                    <h4 className="subscribe-newsletter-header">
                        SUBSCRIBE NEWSLETTER
                    </h4>
                    <p className="subscribe-newsletter-description">
                        Subscribe our Newsletter for new car update. Let's stay
                        updated!
                    </p>
                    <div className="subscribe-input-field-block">
                        <input
                            className="subscribe-input-field"
                            type="text"
                            placeholder="Name..."
                        />
                    </div>
                    <div className="subscribe-input-field-block">
                        <input
                            className="subscribe-input-field"
                            type="text"
                            placeholder="Email..."
                        />
                    </div>
                    <button className="subscribe-newsletter-btn">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div className="copyright">
                <p>
                    @2023 - All Right Reserved. Designed and Developed by{' '}
                    <span className="developer-name">Gen</span>{' '}
                </p>
            </div>
        </div>
    )
}
export default Footer
