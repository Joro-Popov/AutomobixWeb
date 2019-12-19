import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const serviceInfo = () => {
    return(
    <div className="second-container">
        <div className="wrap-login100" style={{ width: '100%', padding: '1%' }}>
            <div className="service-container">
                <p className="service-font">Service History</p>
            </div>
            <div className="hr-container">
                <hr style={{ backgroundColor: '#ee1515'}}/>
            </div>
            <div className="box-item">
                <p className="box-item-content box-item-service">Engine service</p>
                <NavLink className="button" to="/repairs/1">Details</NavLink>
            </div>
            <div className="box-item">
                <p className="box-item-content box-item-service">Clutch change</p>
                <NavLink className="button" to="/repairs/2">Details</NavLink>
            </div><div className="box-item">
                <p className="box-item-content box-item-service">Transmission oil change</p>
                <NavLink className="button" to="/repairs/3">Details</NavLink>
            </div>
        </div>
    </div>
    );
  };

export default serviceInfo;