import React, { Component } from 'react';
import Menu from '../components/commun/menu';
import Footer from '../components/commun/footer';

import './index.css'

class MainLayout extends Component {
    render() {
        return (
            <div id="layout">
                <Menu navigation={this.props} />
                <div className="content" >
                    {this.props.children}
                </div>
                <Footer navigation={this.props} />
            </div>
        );
    }
}

export default MainLayout;
