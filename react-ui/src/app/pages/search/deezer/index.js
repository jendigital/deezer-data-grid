import React, { Component } from 'react';
import MainLayout from '../../../layouts/default';
import DataGrid from './components/datagrid';
import './index.css';

class DeezerSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <DataGrid />
            </ MainLayout>
        )
    }
}

export default DeezerSearch;
