import { u, lw, br } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const card = {
    borderRadius: br,
    background: colors.n0,
    boxShadow: '0px 10px 40px -10px rgba(102, 115, 128, 0.2)',
    padding: u * 4,
    minHeight: 240, //debug
    ':hover': {
        boxShadow: '0px 10px 40px -10px rgba(102, 115, 128, 0.5)',
    },
};
