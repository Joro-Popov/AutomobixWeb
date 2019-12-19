import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from '../component/home/slider';
import AdditionalInfo from '../component/home/additionalInfo';
import MainCarInfo from '../component/home/carInfo';
import ServicesInfo from '../component/home/servicesInfo';

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
                    <MainCarInfo />
                    <ServicesInfo />
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