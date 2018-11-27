import React from 'react';
import '../stylesheets/spinner.css'
import Bars from '../assets/images/bars.svg'

const Spinner = () => {
    return (
        <div className='spinnerWrapper'>
            <img alt="Not Available" src={Bars} className='spinner'/>
        </div>
    );

};
export default Spinner
