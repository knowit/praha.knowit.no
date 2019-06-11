import React from 'react';
import Favorite from '@material-ui/icons/Favorite';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import spacing from '../../util/spacing';
import colors from '../../util/colors';
const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
`;

const Favorites = () => {
  return (
    <div>
      <StyledHeader>
        <Favorite
          css={css`
            margin-right: ${spacing.small};
            color: ${colors.heartRed};
          `}
        />
        Favoritter
      </StyledHeader>
      <p>Kommer...</p>
    </div>
  );
};

export default Favorites;
