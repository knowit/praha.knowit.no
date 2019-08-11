import React from 'react';
import styled from '@emotion/styled';
import colors from '../../util/colors';
import spacing from '../../util/spacing';
import NextUp from './NextUp';
import Favorites from './Favorites';

const StyledTwoColumn = styled.div`
  display: grid;
  grid-column-gap: ${spacing.normal};
  grid-template-columns: repeat(2, auto [col-start]);
  min-height: 30vh;
  & > div:first-child {
    border-right: 2px solid ${colors.blue};
  }
`;

const TwoColumnInfo = () => {
  return (
    <StyledTwoColumn>
      <NextUp />
      <Favorites />
    </StyledTwoColumn>
  );
};

export default TwoColumnInfo;
