import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const changedPartInfo = () => {
    return(
    <div>
       <div className="details-part">Castrol Edge Oil</div>
       <div className="details-unit">
        <div>Quantity</div>
        <div>5 liters</div>
       </div>
       <div className="details-unit">
        <div>Unit Price</div>
        <div>55 lv.</div>
       </div>
       <div className="details-unit">
        <div>Total Costs</div>
        <div>275 lv.</div>
       </div>
        <div className="hr-container">
            <hr style={{ backgroundColor: '#ee1515'}}/>
        </div>
    </div>
    );
  };

export default changedPartInfo;