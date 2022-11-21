import React from 'react';
import Header from './header';
import Footer from './footer';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import AOS from 'aos';
import "aos/dist/aos.css";

class Home extends React.Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div>
                {/* header */}
                <Header />
                {/* header */}
                {/* slider */}
                <section className="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="main-banner-slider"
                                >
                                    <SwiperSlide>
                                        <div className="banner-wrapper">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-12">
                                                        <h2 className="mb-3 mb-md-0 me-md-auto text-light align-middle h-100">
                                                            Animation</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="banner-wrapper">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-12">
                                                        <h2 className="mb-3 mb-md-0 me-md-auto text-light align-middle h-100">
                                                            Animation</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="banner-wrapper">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-12">
                                                        <h2 className="mb-3 mb-md-0 me-md-auto text-light align-middle h-100">
                                                            Animation</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                {/* slider */}
                {/* we nourish */}
                <section id="nourish" className="we-nourish py-3">
                    <div className="container h-100">
                        <div className="desktop-view">
                            <div className="row justify-content-between">
                                <div className="col-12 col-lg-5">
                                    <figure> <img src="./assets/images/webp/we-nourish.webp" alt="We nourish generation after generation." className="img-fluid cus-width" /> </figure>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h3 className="cus-width">For you
                                        and generations to come.</h3>
                                    <p>As a business, it’s in our
                                        nature to innovate and evolve. And we always will. One thing that won’t ever change is our
                                        core values. We remain just as committed to supporting our communities today as when we
                                        started 50 years ago.</p>
                                    <p>We’re proud that our brands
                                        are a much-loved source of nutrition and play such a positive role in those communities.
                                        Now, every day, over 100 million biscuits bring joy and nourishment to people of all ages,
                                        nationalities and ethnicities across the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-view">
                            <div className="row justify-content-between">
                                <div className="col-12">
                                    <h3 className="cus-width">For you
                                        and generations to come.</h3>
                                    <p>As a business, it’s in our
                                        nature to innovate and evolve. And we always will. One thing that won’t ever change is our
                                        core values. We remain just as committed to supporting our communities today as when we
                                        started 50 years ago.</p>
                                    <p>We’re proud that our
                                        brands are a much-loved source of nutrition and play such a positive role in those
                                        communities. Now, every day, over 100 million biscuits bring joy and nourishment to people
                                        of all ages, nationalities and ethnicities across the world.</p>
                                </div>
                                <div className="col-12">
                                    <figure> <img src="./assets/images/webp/we-nourish.webp" alt="We nourish generation after generation." className="img-fluid cus-width" /> </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* we nourish */}
                {/* about EBM */}
                <section id="ebm" className="about-EBM py-3 bg-element-yellow">
                    <div className="container h-100">
                        <div className="desktop-view">
                            <div className="row">
                                <div className="col-12 col-lg-5">
                                    <h3 className="cus-width">EBM,
                                        makers of Peek Freans</h3>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor.</p>
                                    <a aria-label="products" href="javascript:void(0);" className="btn transition-03-all">View products</a>
                                </div>
                                <div className="col-12 col-lg-7">
                                    <figure> <img src="./assets/images/webp/peak-freance-charac.webp" alt="peak freance" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-view">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="cus-width">EBM,
                                        makers of Peek Freans</h3>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor.</p>
                                    <a href="javascript:void(0);" aria-label="products" className="btn transition-03-all">View products</a>
                                </div>
                                <div className="col-12">
                                    <figure> <img src="./assets/images/webp/peak-freance-charac.webp" alt="peak freance" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="products-box">
                                    <h4 >Our product stories</h4>
                                    {/* swiper slider start */}
                                    <Swiper
                                        slidesPerView={4}
                                        spaceBetween={50}
                                        pagination={{
                                            type: "progressbar",
                                            className: "swiper-pagination-progressbar",
                                            clickable: true,
                                        }}
                                        navigation= {{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        breakpoints={{
                                            300: {
                                                spaceBetween: 10,
                                                slidesPerView: 1
                                            },
                                            375: {
                                                spaceBetween: 10,
                                                slidesPerView: 1
                                            },
                                            420: {
                                                spaceBetween: 10,
                                                slidesPerView: 1.2
                                            },
                                            520: {
                                                spaceBetween: 10,
                                                slidesPerView: 1.5
                                            },
                                            767: {
                                                spaceBetween: 10,
                                                slidesPerView: 1.8
                                            },
                                            991: {
                                                spaceBetween: 10,
                                                slidesPerView: 2
                                            },
                                            1024: {
                                                spaceBetween: 10,
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                spaceBetween: 18,
                                                slidesPerView: 3
                                            },
                                            1440: {
                                                spaceBetween: 18,
                                                slidesPerView: 3
                                            },
                                            1700: {
                                                spaceBetween: 24
                                            },
                                        }}
                                        modules={[Pagination, Navigation]}
                                        className="progress-products"
                                    >
                                        <SwiperSlide>
                                            <div className="product-wrap">
                                                <div className="product-image">
                                                    <img src="./assets/images/webp/sooper.webp" className="img-fluid" alt="product" />
                                                </div>
                                                <h5>Sooper <span>One of life’s simple joys</span></h5>
                                                <p>The perfectly balanced flavour of egg and milk, Sooper is comfortingly
                                                    familiar every time. Bringing small heartfelt moments of joy with each bite,
                                                    there are millions of reasons it’s the nation’s favourite.</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/rio.webp" className="img-fluid" alt="product" />
                                                <h5>Rio <span>For kids, adults and everyone in between</span></h5>
                                                <p>Not just for kids but for the kid in all of us, Rio delights the tastebuds
                                                    with a smooth fluffy filling, sandwiched between two crispy biscuits. No
                                                    wonder Pakistan’s favourite cream biscuit puts a smile on everyone’s face.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/gluco.webp" className="img-fluid" alt="product" />
                                                <h5>Gluco <span>Food for the mind, body &amp; soul.</span></h5>
                                                <p>Full of wheat, milk &amp; butter, Gluco really packs a nutrition punch. The power
                                                    pack your child needs to be stronger &amp; sharper. Being the second largest
                                                    plain biscuit brand in Pakistan, Gluco, with its iconic shape and flavor is
                                                    a favorite, all around!
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/smile.webp" className="img-fluid" alt="product" />
                                                <h5>Smile<span>Keeping it real</span></h5>
                                                <p>Our sandwiches don’t just embrace life, they squeeze it together between two
                                                    crunchy biscuits. Bold and rich, both Creamy Lemon and Belgian Chocolate
                                                    have been living by their own delicious rules since 1973</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/wheat.webp" className="img-fluid" alt="product" />
                                                <h5>Wholewheat <span>One of life’s simple joys</span></h5>
                                                <p>The perfectly balanced flavour of egg and milk, Sooper is comfortingly
                                                    familiar every time. Bringing small heartfelt moments of joy with each bite,
                                                    there are millions of reasons it’s the nation’s favourite.</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/saltish.webp" className="img-fluid" alt="product" />
                                                <h5>Saltish <span>Keeping it real</span></h5>
                                                <p>Our sandwiches don’t just embrace life, they squeeze it together between two
                                                    crunchy biscuits. Bold and rich, both Creamy Lemon and Belgian Chocolate
                                                    have been living by their own delicious rules since 1973</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/peanutpik.webp" className="img-fluid" alt="product" />
                                                <h5>Peanut Pik <span>One of life’s simple joys</span></h5>
                                                <p>The perfectly balanced flavour of egg and milk, Sooper is comfortingly
                                                    familiar every time. Bringing small heartfelt moments of joy with each bite,
                                                    there are millions of reasons it’s the nation’s favourite.</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/marie.webp" className="img-fluid" alt="product" />
                                                <h5>Marie <span>For kids, adults and everyone in between</span></h5>
                                                <p>Not just for kids but for the kid in all of us, Rio delights the tastebuds
                                                    with a smooth fluffy filling, sandwiched between two crispy biscuits. No
                                                    wonder Pakistan’s favourite cream biscuit puts a smile on everyone’s face.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/lemon.webp" className="img-fluid" alt="product" />
                                                <h5>Lemon<span>For kids, adults and everyone in between</span></h5>
                                                <p>Not just for kids but for the kid in all of us, Rio delights the tastebuds
                                                    with a smooth fluffy filling, sandwiched between two crispy biscuits. No
                                                    wonder Pakistan’s favourite cream biscuit puts a smile on everyone’s face.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/gluco-teddy.webp" className="img-fluid" alt="product" />
                                                <h5>Gluco Teddy <span>Keeping it real</span></h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
                                                    dignissimos, ea quas provident nesciunt cupiditate necessitatibus nam quae.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/click.webp" className="img-fluid" alt="product" />
                                                <h5>Click<span>One of life’s simple joys</span></h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
                                                    dignissimos, ea quas provident nesciunt cupiditate necessitatibus nam quae.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/choco.webp" className="img-fluid" alt="product" />
                                                <h5>Chocolicious<span>For kids, adults and everyone in between</span></h5>
                                                <p>Not just for kids but for the kid in all of us, Rio delights the tastebuds
                                                    with a smooth fluffy filling, sandwiched between two crispy biscuits. No
                                                    wonder Pakistan’s favourite cream biscuit puts a smile on everyone’s face.
                                                </p> <a href="javascript:void(0);" aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/cakeup.webp" className="img-fluid" alt="product" />
                                                <h5>Cake-Up<span>Keeping it real</span></h5>
                                                <p>Our sandwiches don’t just embrace life, they squeeze it together between two
                                                    crunchy biscuits. Bold and rich, both Creamy Lemon and Belgian Chocolate
                                                    have been living by their own delicious rules since 1973</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="product-wrap"> <img src="./assets/images/webp/butterpuff.webp" className="img-fluid" alt="product" />
                                                <h5>Butterpuff <span>Keeping it real</span></h5>
                                                <p>Our sandwiches don’t just embrace life, they squeeze it together between two
                                                    crunchy biscuits. Bold and rich, both Creamy Lemon and Belgian Chocolate
                                                    have been living by their own delicious rules since 1973</p> <a href="javascript:void(0);"
                                                        aria-label="view more">View more</a>
                                            </div>
                                        </SwiperSlide>
                                        <div class="button-wrap">
                                            <div class="swiper-button-next round-btn"></div>
                                            <div class="swiper-button-prev round-btn left"></div>
                                        </div>
                                    </Swiper>
                                    {/* swiper slider end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about EBM */}
                {/* CSR */}
                <section id="csr" className="csr-EBM py-3 bg-element-green">
                    <div className="container h-100">
                        <div className="desktop-view">
                            <div className="row justify-content-end">
                                <div className="col-12 col-lg-6">
                                    <p>Caring for the communities
                                        we serve goes beyond providing wholesome foods to meet nutritional needs. It means nurturing
                                        a sustainable environment that allows growth for future generations. We encourage everyone
                                        at EBM to embrace our culture of sustainability through three key pillars: Lifelong
                                        nourishment, Livelihoods and Environment.<br />This initiative drives our Sustainable
                                        Development Goals agenda and demonstrates our commitment to becoming a truly sustainable
                                        organisation.
                                    </p>
                                    <a href="javascript:void(0);" aria-label="view csr" className="btn transition-03-all">View CSR</a>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-view">
                            <div className="row">
                                <div className="col-12">
                                    <p>Caring for the communities
                                        we serve goes beyond providing wholesome foods to meet nutritional needs. It means nurturing
                                        a sustainable environment that allows growth for future generations. We encourage everyone
                                        at EBM to embrace our culture of sustainability through three key pillars: Lifelong
                                        nourishment, Livelihoods and Environment.<br />This initiative drives our Sustainable
                                        Development Goals agenda and demonstrates our commitment to becoming a truly sustainable
                                        organisation.</p>
                                    <a href="javascript:void(0);" aria-label="view csr" className="btn transition-03-all">View CSR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CSR */}
                {/* next step */}
                <section id="next" className="next-step bg-element-blue next">
                    <div className="container-fluid py-3 right-pic">
                        <div className="container h-100">
                            <div className="desktop-view">
                                <div className="row">
                                    <div className="col-12 col-lg-5">
                                        <h3>Be a part of <br />something bigger</h3>
                                        <p>If you want to work with some of the nation’s most popular brands and create positive
                                            change in our communities, join us and make a difference. </p>
                                        <a href="javascript:void(0);" aria-label="view linkedin" className="btn btn-inverted transition-03-all">View Linkedin</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-view">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Your next step</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <a href="javascript:void(0);" aria-label="view linkedin" className="btn btn-inverted transition-03-all">View Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* next step */}
                {/* footer */}
                <Footer />
                {/* footer */}
            </div>
        )
    }
}

export default Home;