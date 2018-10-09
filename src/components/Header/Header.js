import React, { Component } from 'react';
import '../../App.scss';
import background from '../../assets/header.jpg';

class Header extends Component {

  render() {
    return (
      <div className='row top'>
          <img src={background}/>
          <div className='top_branding'>
              <div className='top_branding_title'>
                  <a href="https://drop.grabley.net/" rel="home">Grabley Dropshipping Tools (2.1.4)</a>
                  <p>Autocheck listings Amazon, Ebay, Walmart</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Header;

