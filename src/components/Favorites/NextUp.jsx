import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import { css } from '@emotion/core';
import spacing from '../../util/spacing';
import colors from '../../util/colors';
import HeaderTwoWithIcon from '../HeaderTwoWithIcon';

const NextUp = () => {
  return (
    <div>
      <HeaderTwoWithIcon>
        <AccessTime
          css={css`
            margin-right: ${spacing.small};
            color: ${colors.blue};
          `}
        />
        Det neste som skjer
      </HeaderTwoWithIcon>
      <p>Kommer...</p>
    </div>
  );
};

export default NextUp;
