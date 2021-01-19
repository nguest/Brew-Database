import { u, lw, br } from '../../styles/spacing';
import { colors } from '../../styles/colors';

export const select = {
    container: (provided) => ({
        ...provided,
        width: u * 40,
        marginRight: u,
    }),
    // option: (provided, state) => ({
    //     ...provided,
    //     borderBottom: '1px dotted pink',
    //     color: state.isSelected ? 'red' : 'blue',
    //     padding: 20,
    // }),
    // control: () => ({
    //     // none of react-select's styles are passed to <Control />
    //     width: 200,
    // }),
    // singleValue: (provided, state) => {
    //     const opacity = state.isDisabled ? 0.5 : 1;
    //     const transition = 'opacity 300ms';

    //     return { ...provided, opacity, transition };
    // },
};
