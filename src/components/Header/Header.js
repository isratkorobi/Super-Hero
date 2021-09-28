import React from 'react';
import './Header.css'
import logo from '../../image/1.jpg'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""/>
            <h1 className="heading"> SAARC Member State Countries Prime Minister</h1>
            <h3>South Asian Association for Regional Cooperation</h3>
            <p className="para">The South Asian Association for Regional Cooperation (SAARC) is the regional intergovernmental organization and geopolitical union of states in South Asia.
            Its member states are Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka.
            </p>
        </div>
    );
};

export default Header;