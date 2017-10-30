import React, { Component } from 'react';
import { 
    DataTypeProvider
} from '@devexpress/dx-react-grid';

const ApiTypeProvider = () => (
    <DataTypeProvider
        type="api"
        formatterTemplate={({ value }) =>
            <a href={ value } target='_blank' rel="noopener noreferrer">
                <img alt='Deezer' width='120' height='25' src='https://storage.googleapis.com/deezer-data-grid/Footer/deeser_developer.png' />
            </a>
        }
    />
);

export default ApiTypeProvider;