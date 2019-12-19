import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const carInfo = () => {
    return(
    <div className="main-container">
        <div className="wrap-login100">
            <div className="box-item">
                <p className="box-item-content">Plate Number:</p>
                <p className="box-item-content">X4122BX</p>
            </div>
            <div className="box-item">
                <p className="box-item-content">VIN</p>
                <p className="box-item-content">2G61P5S34D9186094</p>
            </div>
            <div className="box-item">
                <p className="box-item-content">Completed Repairs</p>
                <p className="box-item-content">6</p>
            </div>
            <div className="box-item">
                <p className="box-item-content">Repairs in progress</p>
                <p className="box-item-content">4</p>
            </div>
            <div className="button-container">
                <button className="button">
                    All Repairs
                </button>
                <button className="button">
                    Last Repair
                </button>
            </div>
        </div>
    </div>
    );
  };

export default carInfo;