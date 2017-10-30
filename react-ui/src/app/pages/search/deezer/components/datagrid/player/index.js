import React, { Component } from 'react';
import { 
    DataTypeProvider
} from '@devexpress/dx-react-grid';

const PlayerTypeProvider = () => (
    <DataTypeProvider
        type="player"
        formatterTemplate={({ value }) =>
            <a href={ value } target='_blank' rel="noopener noreferrer">
                <audio controls>
                    <source type='audio/mp3' src={ value } />
                </audio>
            </a>
        }
    />
);

export default PlayerTypeProvider;