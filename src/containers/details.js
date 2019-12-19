import React, { Component } from 'react';
import Description from '../component/details/description';
import RepairDate from '../component/details/repairDate';
import VehicleDetails from '../component/details/vehicleDetails';

export default class Details extends Component {
    render() {
        return(
        <div>
            <Description />
            <RepairDate />
            <VehicleDetails />
        </div>
        )
    }
}