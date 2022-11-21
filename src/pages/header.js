import React from 'react';

class Header extends React.Component {
    render() {
        const openMenu = () => {
            $('#mobile-menu').toggleClass("active");
            $('#ham').toggleClass("active");
        }

        const openSearch = () => {
            $('#searchbox').addClass("active");
        }

        const openMadeByUs = () => {
            $('#madebyusbox').addClass("active");
        }

        const closeSubMenu = (anchorLink) => {
            $('.mega-menu--multiLevel').removeClass("active");
        }
        return (
            <header>
                <nav className="d-flex flex-wrap justify-content-center border-bottom transition-03-all" aria-label="EBM Menu">
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-between py-lg-0">
                            <a href="index.html" aria-label="EBM logo" className="d-flex align-items-center mb-lg-0 mb-md-0 me-md-auto text-dark text-decoration-none"> <i className="ebm-logo-icon logo"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></i> <i className="ebm-logo-line logo-sep " /> <i className="logo-text">Nourishing lives, <br />hearts &amp; communities</i> </a>
                            <div className="menu-box d-none d-sm-none d-md-none d-lg-block">
                                <ul className="nav pull-right">
                                    <li className="nav-item"><a href="about.html" className="nav-link" aria-current="page">About us</a>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link open-menu dropbtn" id="open-menu-made-by-us">Made by us <i className="ebm-arrow-down-dropdown" /></a>
                                    </li>
                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                    <li className="nav-item">
                                        <form className="desk-nav-search">
                                            <input type="Search" placeholder="Search" />
                                            <a className="seach-btn" href="#"><img src="./assets/images/search.svg" alt="Search" /></a>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-nav-btn-box d-xs-block d-sm-block d-lg-none py-2">
                                <div className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
                                    <div className="search-menu mobile-nav"  id="ser" onClick={openSearch}> <i className="ebm-search-icon-mobile" /> </div>
                                    <div className="hamburger-menu mobile-nav" id="ham" onClick={openMenu}> <i className="ebm-hamburger-icon" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Desktop Menu*/}
                    <div className="mega-menu open-menu-made-by-us d-none d-sm-none d-md-none d-lg-block" style={{ visibility: 'hidden', height: '0px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-2" />
                                <div className="col-3">
                                    <div className="maker-details-dropdown">
                                        <h3>EBM, makers <br />of Peek Freans</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <ul className="mega-dropdown-list">
                                        <li><a href="#"><span className="round-btn" /> Explore Peek Freans</a></li>
                                        <li><a href="#"><span className="round-btn" /> See our products</a></li>
                                        <li><a href="#"><span className="round-btn" /> Try our recipes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Desktop Menu*/}
                    {/*Mobile Menu*/}
                    <div className="nav hamburger-menu mobile-nav d-xs-block d-sm-block d-lg-none transition-03-all">
                        <div className="navbar transition-03-all" id="mobile-menu">
                            <ul className="menu menu-bar transition-03-all">
                                <li className="navParent"><a href="#" className="menu-link menu-bar-link">About <span className="round-btn white" /></a></li>
                                <li className="navParent"><a href="javascript:void(0);" onClick={openMadeByUs} className="menu-link menu-bar-link">Made by us <span className="round-btn white" /></a>
                                </li>
                                <li className="navParent"><a href="#" className="menu-link menu-bar-link">Contact <span className="round-btn white" /></a></li>
                                <li className="navParent"><a href="javascript:void(0);" onClick={openSearch} className="menu-link menu-bar-link"><i className="ebm-search-icon-mobile" />Search</a></li>
                            </ul>
                        </div>
                        <div className="mega-menu mega-menu--multiLevel" id="madebyusbox">
                            <div className="mb-tp-mega-menu">
                                <a href="javascript:void(0);" onClick={closeSubMenu} className="menu-link mobile-menu-back-link"><img src="./assets/images/back-icon.png" alt="Back" /></a>
                                <span className="mbu">Made by us</span>
                                <h4 className="mob-nav-heading">EBM, makers <br />of Peek Freans</h4>
                                <p className="mob-nav-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna</p>
                            </div>
                            <div className="mb-btm-mega-menu">
                                <ul className="mega-menu2">
                                    <li><a href="#" className="menu-link mega-menu-link mega-menu-header">Explore Peek Freans <span className="round-btn white" /></a></li>
                                    <li><a href="#" className="menu-link mega-menu-link mega-menu-header">See our products <span className="round-btn white" /></a></li>
                                    <li><a href="#" className="menu-link mega-menu-link mega-menu-header">Try our recipes <span className="round-btn white" /></a></li>
                                    <li><a href="#" className="menu-link mega-menu-link mega-menu-header"><i className="ebm-search-icon-mobile" /> Search <span className="round-btn white" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mega-menu mega-menu--multiLevel" id="searchbox">
                            <div className="mb-tp-mega-menu mb-4">
                                <a href="javascript:void(0);" onClick={closeSubMenu} className="menu-link mobile-menu-back-link"><img src="./assets/images/back-icon.png" alt="Back" /></a>
                                <h4 className="mob-nav-heading">Search to find out <br />more about our products <br />or EBM </h4>
                            </div>
                            <div className="menu-search-block">
                                <form>
                                    <input type="search" placeholder="Search" /> <span className="rgt-search-arrow" />
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*Mobile Menu*/}
                </nav>
                <div className="breadcrumb d-flex flex-wrap justify-content-center py-lg-3 border-bottom d-none">
                    <div className="container">
                        <div className="breadcrumb-box">
                            <a href="/" className="back-btn d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none"> <i className="ebm-arrow-left" /> Back </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;