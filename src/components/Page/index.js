/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { page } from './styles';

export const Page = ({children}) => {
    return (
        <main css={page}>
           {children}
        </main>
    );
};

