import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import spacing from '../../util/spacing';
import colors from '../../util/colors';

const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
`;

const NextUp = () => {
  return (
    <div>
      <StyledHeader>
        <AccessTime
          css={css`
            margin-right: ${spacing.small};
            color: ${colors.blue};
          `}
        />
        Det neste som skjer
      </StyledHeader>
      <p>Kommer...</p>
    </div>
  );
};

export default NextUp;
