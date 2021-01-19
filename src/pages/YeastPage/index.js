import React, { Fragment, useState } from 'react';
import { YeastGrid } from '../../components/YeastGrid';
import { SubHeader } from '../../components/SubHeader';
import { yeasts } from '../../dummyContent/yeasts';

export const YeastPage = () => {
    const [filters, setFilters] = useState([]);
    console.log({ filters });

    return (
        <Fragment>
            <SubHeader setFilters={setFilters} filters={filters} yeasts={yeasts} />
            <h2>Yeast</h2>
            <YeastGrid filters={filters} yeasts={yeasts} />
        </Fragment>
    );
};
