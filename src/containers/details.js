import React, { Component } from 'react';
import ChangedPartItem from '../component/details/changedPartItem';

export default class Details extends Component {
    render() {
        return(
        <div className="second-container">
            <div className="wrap-login100" style={{ width: '60%', padding: '1%' }}>
                <div className="service-container">
                    <p className="service-font">Needed Parts</p>
                </div>
                <div className="hr-container">
                    <hr style={{ backgroundColor: '#ee1515'}}/>
                </div>
                <ChangedPartItem />
                <ChangedPartItem />
                <ChangedPartItem />
                <ChangedPartItem />
                <ChangedPartItem />
            </div>
        </div>
        )
    }
}