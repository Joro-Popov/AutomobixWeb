import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from '../component/home/slider';
import AdditionalInfo from '../component/home/additionalInfo';

class Home extends Component {
    render() {
        const { isAuthenticated } = this.props;
        
        return(
        <div>
            { !isAuthenticated ? 
                <div>
                    <Slider />
                    <AdditionalInfo />
                </div>
                :
               <div>
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
                                <button className="button">
                                    Details
                                </button>
                            </div>
                            <div className="box-item">
                                <p className="box-item-content">Engine service</p>
                                <button className="button">
                                    Details
                                </button>
                            </div>
                            <div className="box-item">
                                <p className="box-item-content">Engine service</p>
                                <button className="button">
                                    Details
                                </button>
                            </div>
                            <div className="box-item">
                                <p className="box-item-content">Engine service</p>
                                <button className="button">
                                    Details
                                </button>
                            </div>
                            <div className="box-item">
                                <p className="box-item-content">Engine service</p>
                                <button className="button">
                                    Details
                                </button>
                            </div>
                            <div className="box-item">
                                <p className="box-item-content">Engine service</p>
                                <button className="button">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <AdditionalInfo />
               </div>
            }
        </div>
        )
    }
}

const mapStateToProps = state => ({ 
    isAuthenticated: state.authReducer.isAuthenticated, 
});

export default connect(mapStateToProps, null)(Home) 