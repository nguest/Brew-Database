import { u, lw, br } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const button = (buttonStyle) => ({
    background: buttonStyle === 'primary' ? colors.b100 : 'none',
    border: `${lw}px solid ${buttonStyle === 'primary' ? 'transparent': colors.b100}`,
    color: buttonStyle === 'primary' ? colors.n0 : colors.b100,
    borderRadius: br * 0.5,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: u * 8.5,
    padding: `0 ${u * 3}px`,
});
