/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment, useEffect, useState } from 'react';
import { Card } from '../Card';

import { cardGrid } from './styles';

export const YeastGrid = ({ filters, yeasts }) => {
    const [filteredYeasts, setFilteredYeasts] = useState(yeasts);

    useEffect(() => {
        const getFilteredYeasts = () => {
            if (filters.length === 0) {
                return yeasts;
            }
            return Object.keys(filters).reduce((agg, currFilter) => {
                return agg.filter((yeast) => {
                    if (filters[currFilter].label.includes('All')) {
                        return agg;
                    }
                    return yeast[currFilter] === filters[currFilter].label;
                });
            }, yeasts);
        };
        setFilteredYeasts(getFilteredYeasts());
    }, [filters, yeasts]);

    return (
        <Fragment>
            <p>{`Showing ${filteredYeasts.length} of ${yeasts.length} strains`}</p>
            <section css={cardGrid}>
                {filteredYeasts.map((yeast) => (
                    <Card data={yeast} />
                ))}
            </section>
        </Fragment>
    );
};
