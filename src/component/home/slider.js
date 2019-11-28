import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return(
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12 offset-md-1 col-md-11">
                        <div class="swiper-container hero-slider">
                            <div class="swiper-slide slide-content d-flex align-items-center">
                                <div class="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">Automobix is <br />next generation car service</h1>
                                    <p data-aos="fade-right" data-aos-delay="600">
                                    Crafted by innovative creators for Expecting
                                    Peoples’s predefined dummy text<br /> chunks as necessary, making this the first.
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">See More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">Get Now</a>
                                </div>
                                {/*Add mode slides*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <span class="arr-left"><i class="fa fa-angle-left"></i></span>
                <span class="arr-right"><i class="fa fa-angle-right"></i></span> */}
            </div>
            <div class="texture"></div>
            <div class="diag-bg"></div>
        </section>
        )
    }
}