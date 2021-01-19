import { u, lw } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const subHeader = {
    borderBottom: `${lw}px solid ${colors.n20}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    height: u * 17,
    padding: `0 ${u * 6}px`,
    position: 'fixed',
    width: '100%',
    top: u * 17,
    left: 0,
    background: colors.n0
};

export const filterContainer = {
    display: 'flex',
}

export const filterSearch = {
    display: 'flex',
};

export const searchInput = {
    border: `${lw}px solid ${colors.n20}`,
    borderRadius: u * 4.5,
    height: u * 9,
    padding: `0 ${u * 3}px ${u * 0.5}px ${u * 3}px`,
}
