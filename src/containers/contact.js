import React, { Component } from 'react';
import ContactForm from '../component/contact/contactForm';
import MoreInfo from '../component/contact/moreInfo';

export default class Contact extends Component {
    render() {
        return(
        <div>
            <div class="limiter">
                <ContactForm />
                <MoreInfo />
            </div>
        </div>
        )
    }
}