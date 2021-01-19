import { u, lw } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const header = {
    borderBottom: `${lw}px solid ${colors.n20}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    height: u * 17,
    position: 'fixed',
    width: '100%',
    top: 0,
    background: colors.n0,
};

export const logoNav = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: u * 7,
    '> a': { paddingRight: u * 7 },
    svg: {
        marginRight: u * 3,
    },
};

export const mainNav = {
    display: 'flex',
    borderLeft: `${lw}px solid ${colors.n20}`,
    ul: {
        display: 'flex',
        flexDirection: 'row',
        li: {
            display: 'flex',
            fontWeight: 600,
            marginRight: u * 8,
            a: {
                color: colors.n40,
                textDecoration: 'none',
                '&.active': {
                    color: colors.b100,
                },
            },
        },
    },
};

export const signInUp = {
    marginRight: u * 6,
};
