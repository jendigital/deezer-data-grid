import React, { Component } from 'react';
//import { Icon } from 'react-fa';
import './index.css';

class Menu extends Component {
    render() {
        return (
            <div id='header'>
                <a href='/'>
                    <div id='logo_container'>
                        <img className='logo' alt='Deezer' src='https://storage.googleapis.com/deezer-data-grid/Deezer_logo.png' />
                    </div>
                </a>
            </div>
        );
    }
}

export default Menu;
