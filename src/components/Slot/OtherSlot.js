import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSlot,
  StyledSlotTime,
  StyledSlotTitle,
  StyledSlotContent,
  StyledSlotType,
  StyledSlotTimeContainer,
} from './SlotStyles';

const OtherSlot = ({ collection }) => (
  <StyledSlot>
    <StyledSlotType type="other" />
    <StyledSlotTimeContainer>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
    </StyledSlotTimeContainer>
    <StyledSlotContent>
      <StyledSlotTitle>{collection.title}</StyledSlotTitle>
    </StyledSlotContent>
  </StyledSlot>
);

OtherSlot.propTypes = {
  collection: PropTypes.object,
};

export default OtherSlot;
