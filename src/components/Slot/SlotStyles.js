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

const typeColors = {
  other: colors.green,
  talk: colors.blueDarkest,
  workshop: colors.blue,
};

const StyledSlotType = styled.div`
  background-color: ${p => (p.type ? typeColors[p.type] : typeColors.other)};
  width: ${spacing.small};
  border: 1px solid ${p => (p.type ? typeColors[p.type] : typeColors.other)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const StyledSlotTimeContainer = styled.span`
  width: 10%;
  margin-left: ${spacing.normal};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-right: ${spacing.normal};
`;

const StyledSlotDuration = styled.span`
  margin-top: ${spacing.small};
  color: ${colors.grey};
`;

const StyledSlotTitle = styled.strong`
  display: inline-block;
  padding: ${spacing.normal} 0;
`;

const StyledSlotDescription = styled.span`
  display: inline-block;
`;

export {
  StyledSlot,
  StyledSlotTitle,
  StyledSlotDescription,
  StyledSlotTime,
  StyledSlotContent,
  StyledSlotType,
  StyledSlotDuration,
  StyledSlotTimeContainer,
};
