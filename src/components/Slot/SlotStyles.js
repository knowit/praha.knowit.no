import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../../util/colors';
import mediaQueries from '../../util/mediaQueries';
import spacing from '../../util/spacing';

const StyledSlot = styled.div`
  margin-top: 1rem;
  display: flex;
  background-color: white;
  flex-flow: row;
  border-radius: 5px;

  &:last-child {
    margin-bottom: ${spacing.large};
  }

  @media (${mediaQueries.medium}) {
    flex-flow: column;
  }
`;

const StyledSlotTime = styled.span`
  align-self: center;
  width: 10%;
  margin-left: ${spacing.normal};
  @media (${mediaQueries.medium}) {
    align-self: center;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const StyledSlotContent = styled.div`
  padding: 1rem 0;
  width: 90%;
  @media (${mediaQueries.medium}) {
    padding: 1rem 0;
    font-weight: bold;
    width: 100%;
  }
`;

const StyledSlotType = styled.div`
  background-color: ${colors.green};
  width: ${spacing.small};
  border: 1px solid ${colors.green};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export { StyledSlot, StyledSlotTime, StyledSlotContent, StyledSlotType };
