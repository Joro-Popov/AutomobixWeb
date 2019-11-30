import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default class MoreInfo extends Component {
    render() {
        return(
        <div className="moreInfo">
           <div className="contact-header">More contacts</div>
          <div className="contact-container">
            <div>
                <div className="header-with-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="contact-header-item" >Addresses</p>
                </div>
                <p>Sofia Dianabad 95</p>
                <p>Sofia Dianabad 95</p>
                <p>Sofia Dianabad 95</p>
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div>
               <div  className="header-with-icon">
                    <FontAwesomeIcon icon={faMailBulk} />
                    <p className="contact-header-item">Email</p>
               </div>
                <p>automobix@gmail.com</p>
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div>
                <div  className="header-with-icon">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="contact-header-item">Phone Numbers</p>
                </div>
                <p>+359 876 34 56 88</p>
                <p>+359 876 34 56 88</p>
                <p>+359 876 34 56 88</p>
            </div>
          </div>
        </div>
        )
    }
}