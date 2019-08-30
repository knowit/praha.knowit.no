import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typeColors } from '../Slot/SlotStyles';
import Button from '../Button';
import css from '@emotion/css';
import spacing from '../../util/spacing';
import mediaQueries from '../../util/mediaQueries';
const filters = [
  { label: 'Felles', type: 'other' },
  { label: 'Keynote', type: 'keynote' },
  { label: 'Talk', type: 'talk' },
];

const StyledFilters = styled.div`
  display: grid;
  width: 40%;
  grid-template-rows: ${spacing.large};
  grid-template-columns: 30% 30% 30%;
  margin: 0 auto;
  grid-column-gap: ${spacing.normal};
  @media (${mediaQueries.medium}) {
    width: 100%;
    margin-top: ${spacing.large};
  }
`;

const filledFilter = type => css`
  dipfont-weight: 700;
  border-radius: 5px;
  color: white;
  background-color: ${typeColors[type]};
`;

const outlinedFilter = type => css`
  font-weight: 700;
  border-radius: 5px;
  color: black;
  background-color: inherit;
  border: 2px solid ${typeColors[type]};
`;

const getStyle = (isHover, isActive, isFilter, type) => {
  if (!isFilter) {
    return isHover ? outlinedFilter(type) : filledFilter(type);
  }
  if (isHover) {
    return isActive ? outlinedFilter(type) : filledFilter(type);
  }
  return isActive ? filledFilter(type) : outlinedFilter(type);
};

const filterButtonStyle = (type = 'other', isActive = false, isFilter) => css`
  &,
  &:focus {
    ${getStyle(false, isActive, isFilter, type)};
  }

  &:hover {
    ${getStyle(true, isActive, isFilter, type)};
  }
`;

const Filters = ({ activeFilter, onChangeActiveFilter }) => {
  const isFilter = activeFilter !== '';
  return (
    <StyledFilters>
      {filters.map(filter => (
        <Button
          key={filter.type}
          onClick={() => onChangeActiveFilter(filter.type)}
          appearance="stripped"
          css={filterButtonStyle(
            filter.type,
            filter.type === activeFilter,
            isFilter,
          )}>
          {filter.label}
        </Button>
      ))}
    </StyledFilters>
  );
};

Filters.propTypes = {
  activeFilter: PropTypes.string,
  onChangeActiveFilter: PropTypes.func.isRequired,
};

export default Filters;
