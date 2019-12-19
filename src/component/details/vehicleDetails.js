import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const vehicleDetails = () => {
    return(
    <div className="second-container">
        <div className="wrap-login100" style={{ width: '60%', padding: '1%' }}>
            <div className="box-item">
                <p className="box-item-content box-item-service">Changed parts</p>
                <NavLink className="button" to="/repairs/details/1">Details</NavLink>
            </div>
            <div className="hr-container">
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div className="box-item">
                <p className="box-item-content box-item-service">Total parts costs</p>
                <p className="box-item-content box-item-service">120 lv.</p>
            </div>
            <div className="hr-container">
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div className="box-item">
                <p className="box-item-content box-item-service">Service total price</p>
                <p className="box-item-content box-item-service">200 lv.</p>
            </div>
            <div className="hr-container">
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div className="box-item">
                <p className="box-item-content box-item-service">Total Costs</p>
                <p className="box-item-content box-item-service">320 lv</p>
            </div>
            <div className="hr-container">
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
        </div>
    </div>
    );
  };

export default vehicleDetails;