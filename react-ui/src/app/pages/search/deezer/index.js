import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';
import DataGrid from './datagrid';
import './index.css';

class DeezerSearch extends Component {
    constructor(props) {
        super(props);
        
        this.songs          = false;
    }

    render() {
        return (
            <MainLayout>
                <DataGrid Songs={this.songs} />
            </ MainLayout>
        )
    }
}

export default DeezerSearch;
