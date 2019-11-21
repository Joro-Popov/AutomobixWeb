import React, { Component } from 'react';
import Slider from '../component/home/slider';
import AdditionalInfo from '../component/home/additionalInfo';

export default class Home extends Component {
    render() {
        return(
        <div>
            <Slider />
            <AdditionalInfo />
        </div>
        )
    }
}