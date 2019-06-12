import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlot, StyledSlotTime, StyledSlotContent } from './SlotStyles';

const BreakSlot = ({ collection }) => {
  return (
    <StyledSlot>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
      <StyledSlotContent>
        <span>{collection.title}</span>
      </StyledSlotContent>
    </StyledSlot>
  );
};

BreakSlot.propTypes = {
  collection: PropTypes.object,
};

export default BreakSlot;
