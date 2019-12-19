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
                                    <a data-aos="fade-right" data-aos-delay="300" href="#" class="btn btn-primary">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="texture"></div>
            <div class="diag-bg"></div>
        </section>
        )
    }
}