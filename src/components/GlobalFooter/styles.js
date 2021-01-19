import { u, lw } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const globalFooter = {
    borderTop: `${lw}px solid ${colors.n20}`,
    display: 'grid',
    gridTemplateColumns: '1.75fr 1fr 1fr 1fr 1fr',
    gridGap: u * 16,
    padding: u * 10,
    background: colors.n0,
};
