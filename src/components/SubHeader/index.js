/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SelectInput } from '../SelectInput';
import { filterContainer, searchInput, subHeader } from './styles';

const filterFields = ['country', 'lab'];

const getFilterOptions = (yeasts) => {
    return filterFields.reduce((aggFilters, field) => {
        const filtersForField = yeasts.reduce(
            (agg, curr) => {
                if (curr[field] && agg[field].filter((item) => item.label === curr[field]).length === 0) {
                    return {
                        ...agg,
                        [field]: [...agg[field], { label: curr[field] }],
                    };
                }
                return agg;
            },
            { [field]: [] },
        );
        const allFiltersForField = {
            [field]: [{ label: `All ${field}` }, ...filtersForField[field]],
        };
        return {
            ...aggFilters,
            ...allFiltersForField,
        };
    }, {});
};

export const SubHeader = ({ filters, setFilters, yeasts }) => {
    const onChangeFilter = (filter) => {
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [filter.fieldType]: filter.selectedOption,
            };
        });
    };

    const filterOptions = getFilterOptions(yeasts);

    return (
        <section css={subHeader}>
            <div className="filter-search">
                <form>
                    <input type="text" placeholder="Search strain names" name="search" css={searchInput} />
                </form>
                {/* <div className="mobile-options">
                    <a href="#" className="filters-toggle">
                        Show Filters
                    </a>
                    <a href="#" className="jump-to">
                        Jump to...
                    </a>
                </div> */}
            </div>
            <div css={filterContainer}>
                <SelectInput
                    placeholder="All Labs"
                    filter={filters['lab']}
                    options={filterOptions['lab']}
                    onChangeSelection={onChangeFilter}
                    fieldType="lab"
                />
                <SelectInput placeholder="All Types" options={[]} />
                <SelectInput placeholder="All Styles" options={[]} />
                <SelectInput
                    placeholder="All Countries"
                    filter={filters['country']}
                    options={filterOptions['country']}
                    onChangeSelection={onChangeFilter}
                    fieldType="country"
                />
            </div>
        </section>
    );
};
