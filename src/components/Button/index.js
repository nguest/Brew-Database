/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

import { button } from './styles';

export const Button = ({ buttonStyle, text, linkType, onClick, url }) => {
    if (linkType === 'anchor') {
        return (
            <Link to={url} css={button(buttonStyle)}>
                {text}
            </Link>
        );  
    }
    return (
        <button type="button" css={button(buttonStyle)} onClick={onClick}>
            {text}
        </button>
    );
};
