import React, { Component } from 'react';

export default class AdditionalInfo extends Component {
    render() {
        return(
        <section class="cta" data-aos="fade-up" data-aos-delay="0">
            <div class="container">
                <div class="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
                    <div class="content" data-aos="fade-right" data-aos-delay="200">
                        <h2>FOR BUILDING THE MODERN WEBSITE</h2>
                        <p>Packed with all the goodies you can get, Kallyas is our flagship premium template.</p>
                    </div>
                    <div class="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                        <a href="#" class="btn btn-primary">Join Newsletter</a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}