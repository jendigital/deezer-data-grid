import React, { Component } from 'react';
import { 
    DataTypeProvider
} from '@devexpress/dx-react-grid';

const DeezerTypeProvider = () => (
    <DataTypeProvider
        type="deezer"
        formatterTemplate={({ value }) =>
            <a href={ value } target='_blank' rel="noopener noreferrer">
                <img alt='Deezer' width='50' height='25' src='https://storage.googleapis.com/deezer-data-grid/Deezer_logo.png' />
            </a>
        }
    />
);

export default DeezerTypeProvider;