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
import AddFavorite from '../Favorites/AddFavorite';

const OtherSlot = ({ collection, date, favorites, setFavorites }) => (
  <StyledSlot>
    <StyledSlotType type="other" />
    <StyledSlotTimeContainer>
      <StyledSlotTime>{collection.time}</StyledSlotTime>
    </StyledSlotTimeContainer>
    <StyledSlotContent>
      <StyledSlotTitle>{collection.title}</StyledSlotTitle>
    </StyledSlotContent>
    <AddFavorite
      date={date}
      title={collection.title}
      startTime={collection.time}
      setFavorites={setFavorites}
      favorites={favorites}
    />
  </StyledSlot>
);

OtherSlot.propTypes = {
  collection: PropTypes.object,
  date: PropTypes.string.isRequired,
};

export default OtherSlot;
