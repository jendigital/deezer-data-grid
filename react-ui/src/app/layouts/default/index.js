import React, { Component } from 'react';
import Menu from '../components/commun/menu';

import './index.css'

class MainLayout extends Component {
    render() {
        return (
            <div id="layout">
                <Menu navigation={this.props} />
                <div className="content" >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;
