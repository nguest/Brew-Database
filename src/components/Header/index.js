/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { header, logoNav, mainNav, signInUp } from './styles';

export const Header = () => {
    return (
        <header css={header}>
            <div css={logoNav}>
                {/* <div className="hamburger">
                    <svg width="16" height="12" viewBox="0 0 16 12">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM16 10H0V12H16V10Z" fill="#323436"></path>
                    </svg>
                </div> */}
                <NavLink to="/" activeClassName="active">
                <svg className="logo" width="15px" height="20px" viewBox="0 0 15 20">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path
                            d="M7,14 C8.65685425,14 10,15.3431458 10,17 C10,18.6568542 8.65685425,20 7,20 C5.34314575,20 4,18.6568542 4,17 C4,15.3431458 5.34314575,14 7,14 Z M12.5,11 C13.3284271,11 14,11.6715729 14,12.5 C14,13.3284271 13.3284271,14 12.5,14 C11.6715729,14 11,13.3284271 11,12.5 C11,11.6715729 11.6715729,11 12.5,11 Z M2.5,8 C3.88071187,8 5,9.11928813 5,10.5 C5,11.8807119 3.88071187,13 2.5,13 C1.11928813,13 0,11.8807119 0,10.5 C0,9.11928813 1.11928813,8 2.5,8 Z M7.5,7 C8.32842712,7 9,7.67157288 9,8.5 C9,9.32842712 8.32842712,10 7.5,10 C6.67157288,10 6,9.32842712 6,8.5 C6,7.67157288 6.67157288,7 7.5,7 Z M12.5,4 C13.8807119,4 15,5.11928813 15,6.5 C15,7.88071187 13.8807119,9 12.5,9 C11.1192881,9 10,7.88071187 10,6.5 C10,5.11928813 11.1192881,4 12.5,4 Z M3.5,2 C4.32842712,2 5,2.67157288 5,3.5 C5,4.32842712 4.32842712,5 3.5,5 C2.67157288,5 2,4.32842712 2,3.5 C2,2.67157288 2.67157288,2 3.5,2 Z M8.5,0 C9.32842712,0 10,0.671572875 10,1.5 C10,2.32842712 9.32842712,3 8.5,3 C7.67157288,3 7,2.32842712 7,1.5 C7,0.671572875 7.67157288,0 8.5,0 Z"
                            id="Combined-Shape"
                            fill="#007AFF"
                        ></path>
                    </g>
                </svg>
                
                <span className="logotype">Brew Database</span>
                </NavLink>
                <nav css={mainNav}>
                    <ul>
                        <li>
                            <NavLink to="/yeast" activeClassName="active" exact>Yeast</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hops" activeClassName="active">Hops</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div css={signInUp}>
                <Button linkType="anchor" url="/login" text="Sign In" buttonStyle="secondary" />
                <Button text="Sign Up!" buttonStyle="primary"/>
            </div>
        </header>
    );
};
