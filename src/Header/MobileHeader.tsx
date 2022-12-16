type Props = {}
const MobileHeader = (props: Props) => {
    return (
        <header>
            <div className="container">
                <div className="mobile-header">
                    <button className="nav-button-mobile">
                        <span className="nav-button-mobile-icon"></span>
                    </button>

                    <div className="mobile-logo"></div>
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
