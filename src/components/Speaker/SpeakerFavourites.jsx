import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';

const StyledSpeakerFavourites = styled.div`
  grid-area: favourites;
  align-self: start;
  margin: 0;
`;

const StyledList = styled.ul`
  margin: 0;
`;

const SpeakerFavourites = ({ speaker_favourites }) => {
  if (!speaker_favourites) {
    return null;
  }
  const splittedFavourites = speaker_favourites.split(';');
  return (
    <StyledSpeakerFavourites>
      <h2
        css={css`
          padding-left: 1rem;
        `}>
        Hva liker du?
      </h2>
      <StyledList>
        {splittedFavourites.map(favourite => (
          <li key={`favourite_${favourite}`}>{favourite}</li>
        ))}
      </StyledList>
    </StyledSpeakerFavourites>
  );
};

export default SpeakerFavourites;
