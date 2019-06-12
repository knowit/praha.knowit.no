import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  StyledSlot,
  StyledSlotTime,
  StyledSlotContent,
  StyledSlotType,
} from './SlotStyles';
import Villages from '../Villages/Villages';

const StyledSpan = styled.span`
  padding: 2rem;
  display: inline-block;
`;

const OtherSlot = ({ collection }) => {
  return (
    <StyledSlot>
      <StyledSlotType type="other" />
      <StyledSlotTime>{collection.time}</StyledSlotTime>
      <StyledSlotContent>
        <StyledSpan>{collection.title}</StyledSpan>
      </StyledSlotContent>
    </StyledSlot>
  );
};

OtherSlot.propTypes = {
  collection: PropTypes.object,
};

export default OtherSlot;
