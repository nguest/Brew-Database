/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Select from 'react-select';

import { select } from './styles';

export const SelectInput = ({ filter, fieldType, options, placeholder, onChangeSelection }) => {
    const onChange = (selectedOption) => {
        onChangeSelection({ fieldType, selectedOption })
    };

    return (
        <Select
            defaultValue={filter || options[0]}
            value={filter}
            onChange={onChange}
            options={options}
            styles={select}
            isSearchable={false}
            placeholder={options[0] && options[0].label}
        />
    );
};
