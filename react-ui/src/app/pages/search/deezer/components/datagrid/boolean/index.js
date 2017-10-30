import React, { Component } from 'react';
import { 
    DataTypeProvider
} from '@devexpress/dx-react-grid';

const BooleanTypeProvider = () => (
    <DataTypeProvider
        type="boolean"
        formatterTemplate={({ value }) =>
            <span className="label label-default">{value ? 'Disponible' : 'Indisponible'}</span>}
            editorTemplate={({ value, onValueChange }) => (
            <select
                className="form-control"
                value={value || false}
                onChange={e => onValueChange(e.target.value === 'true')}
            >
                <option value={false}>Indisponible</option>
                <option value={true}>Disponible</option>
            </select>
        )}
    />
);

export default BooleanTypeProvider;