import React from 'react';
import { 
    DataTypeProvider
} from '@devexpress/dx-react-grid';

const ImgTypeProvider = () => (
    <DataTypeProvider
        type="img"
        formatterTemplate={({ value }) =>
            <a href={ value } target='_blank' rel="noopener noreferrer">
                <img alt='Cover' width='25' height='25' src={value} />
            </a>
        }
    />
);

export default ImgTypeProvider;