import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                 <section className="backtotop text-center">
                    <div className="container h-100 position-relative">
                        <span className="back-to-top-btn"><a href="#" aria-label="top" className /></span>
                        <a href="#" aria-label="top" className="mb-3 mb-md-0 me-md-auto text-center">Back to top</a>
                    </div>
                </section>
                <footer id="footer-desk" className="d-none d-sm-none d-md-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-md-3 col-lg-2">
                            <a href="#" aria-label="footer logo"> <i className="ebm-foot-logo foot-logo"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></i> </a>
                        </div>
                        <div className="col-3 col-md-4 col-lg-3">
                            <div className="foot-address">
                                <h4 className="text-light">Contact</h4>
                                <p className="text-light py-2">Address: P.O Box 5536,
                                    <br /> Karachi, Pakistan
                                    <br /> Plot 1-4, Sector 23,
                                    <br /> Korangi Industrial Area,
                                    <br /> Karachi, 74900,
                                    <br /> Pakistan</p>
                                <p className="text-light py-2">Phone: <a href="tel:+9221111326326" aria-label="phone">(+92 21) 111
                                    326 326</a>
                                    <br /> Fax: <a href="tel:+922135060825" aria-label="Fax">(+92 21) 3506 0825</a>
                                    <br /> Email: <a href="mailto:aapkirai@ebm.com.pk" aria-label="email">aapkirai@ebm.com.pk</a></p>
                            </div>
                        </div>
                        <div className="col-2 col-md-2 col-lg-2">
                            <nav className="foot-links" aria-label="footer nav">
                                <h4>Sitemap</h4>
                                <ul className=" py-2">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul className=" py-2">
                                    <li><a href="#">Brand 1</a></li>
                                    <li><a href="#">Brand 2</a></li>
                                    <li><a href="#">Brand 3</a></li>
                                    <li><a href="#">Brand 4</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-3 col-md-3 col-lg-3">
                            <nav className="foot-links" aria-label="footer social">
                                <h4>Explore</h4>
                                <ul className="social py-2">
                                    <li>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <figure> <img src="./assets/images/tw-icon.svg" alt="Twitter" className="img-fluid" />
                                            </figure>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <figure> <img src="./assets/images/fb-icon.svg" alt="Facebook" className="img-fluid" />
                                            </figure>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <figure> <img src="./assets/images/li-icon.svg" alt="Instagram" className="img-fluid" />
                                            </figure>
                                        </a>
                                    </li>
                                </ul>
                                <ul className=" py-2">
                                    <li><a href="#">Legal</a></li>
                                    <li><a href="#">Cookies</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer><footer id="ftr-mob" className="py-5 d-xs-block d-sm-block d-lg-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <a href="#" aria-label="footer logo"> <i className="ebm-foot-logo foot-logo"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></i> </a>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <nav className="foot-links" aria-label="footer nav">
                                            <ul className=" py-2">
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Peek Freans</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-6">
                                        <nav className="foot-links" aria-label="footer nav">
                                            <ul className=" py-2">
                                                <li><a href="#">Terms &amp; Conditions</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Cookies Policy</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="foot-search"> <i className="ebm-search-icon" />
                                    <input type="text" placeholder="Search a product" /> </div>
                            </div>
                            <div className="col-12">
                                <nav className="foot-links" aria-label="footer social">
                                    <ul className="social py-2">
                                        <li>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <figure> <img src="./assets/images/tw-icon.svg" alt="Twitter" className="img-fluid" />
                                                </figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <figure> <img src="./assets/images/fb-icon.svg" alt="Facebook" className="img-fluid" />
                                                </figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <figure> <img src="./assets/images/li-icon.svg" alt="Instagram" className="img-fluid" />
                                                </figure>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-12">
                                <div className="foot-address">
                                    <h4 className="text-light">Contact</h4>
                                    <p className="text-light py-2">Address:
                                        <br /> P.O Box 5536, Karachi, Pakistan
                                        <br /> Plot 1-4, Sector 23, Korangi Industrial Area,
                                        <br /> Karachi, 74900, Pakistan</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="foot-copyright">
                                    <p><a href="#">Copyright</a> / <a href="#">Trademark</a> / <a href="#">Registered</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer></div>
        )
    }
}

export default Footer;