import React, { Component } from 'react';

const repairDate = () => {
    return(
    <div className="date-status-container">
        <div className="date-status">
            <div className="wrap-login100" style={{ width: '60%' }}>
                <div className="service-container" style={{ backgroundColor: '#ee1515' }}>
                    <p className="service-font" style={{ color: 'white' }}>Repair Date</p>
                </div>
                <p className="service-font" style={{ textAlign: 'center'}}>19/12/2019</p>
            </div>
        </div>
        <div className="date-status">
            <div className="wrap-login100" style={{ width: '60%' }}>
                <div className="service-container" style={{ backgroundColor: '#ee1515' }}>
                    <p className="service-font" style={{ color: 'white' }}>Status</p>
                </div>
                <p className="service-font" style={{ textAlign: 'center'}}>Completed</p>
            </div>
        </div>
    </div>
    );
  };

export default repairDate;