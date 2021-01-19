import React, { Fragment } from 'react';
import { yeasts } from '../../dummyContent/yeasts';
import { useLocation, useRouteMatch } from 'react-router-dom';

export const YeastDetailPage = () => {
    const location = useLocation();
    const match = useRouteMatch('/yeast/:yeastUuid');
    console.log({ location, match });

    const uuid = match.params.yeastUuid;
    const data = yeasts.find((yeast) => yeast.uuid === uuid);

    if (data) {
        const { title } = data;
        return (
            <Fragment>
                <h2>{title}</h2>
                <div>{JSON.stringify(data)}</div>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <h2>No Yeast Found</h2>
        </Fragment>
    );
};
