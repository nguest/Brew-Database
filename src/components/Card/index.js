/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

import { card } from './styles';

export const Card = ({ data }) => {
    const { uuid, title } = data;
    return (
        <Link to={`/yeast/${uuid}`} css={card}>
            <h3>{title}</h3>
            <p>{JSON.stringify(data)}</p>
        </Link>
    );
};
