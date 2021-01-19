/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { globalFooter } from './styles';

export const GlobalFooter = () => {
    return (
        <footer css={globalFooter}>
           <div>Lots of fun things here</div>
           <div>And here</div>
        </footer>   
    );
};

