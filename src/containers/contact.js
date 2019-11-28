import React, { Component } from 'react';
import ContactForm from '../component/contact/contactForm';

export default class Contact extends Component {
    render() {
        return(
        <div>
            <div class="limiter">
                <ContactForm />
            </div>
        </div>
        )
    }
}