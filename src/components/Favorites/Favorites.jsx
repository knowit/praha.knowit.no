import React from 'react';
import Favorite from '@material-ui/icons/Favorite';
import { css } from '@emotion/core';
import spacing from '../../util/spacing';
import colors from '../../util/colors';
import HeaderTwoWithIcon from '../HeaderTwoWithIcon';

const Favorites = () => {
  return (
    <div>
      <HeaderTwoWithIcon>
        <Favorite
          css={css`
            margin-right: ${spacing.small};
            color: ${colors.heartRed};
          `}
        />
        Favoritter
      </HeaderTwoWithIcon>
      <p>Kommer...</p>
    </div>
  );
};

export default Favorites;
