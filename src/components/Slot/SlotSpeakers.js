import React from 'react';
import SpeakerModal from '../SpeakerModal';
import styled from '@emotion/styled';
import Person from '@material-ui/icons/Person';
import mediaQueries from '../../util/mediaQueries';

const StyledModalContent = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  grid-template-columns: 30% 70%;
  align-items: center;
  grid-template-areas:
    'image title'
    'image description';

  @media (${mediaQueries.medium}) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    align-items: center;
    grid-template-areas:
      'image'
      'title'
      'description';
  }
`;

const StyledTitle = styled.h2`
  grid-area: title;
`;

const StyledDescription = styled.span`
  grid-area: description;
  align-self: start;
`;

const StyledImage = styled.img`
  grid-area: image;
  max-width: 75%;
  align-self: start;

  @media (${mediaQueries.medium}) {
    max-width: 100%;
  }
`;

const StyledIcon = styled.span`
  grid-area: image;
  align-self: start;
  & > svg {
    font-size: 15rem;
  }

  @media (${mediaQueries.medium}) {
    & > svg {
      display: none;
    }
  }
`;

const SlotSpeakers = ({ slot: { userIds, speaker_bio, speaker_image } }) => {
  const imageUrl =
    speaker_image &&
    speaker_image.localFiles[0] &&
    speaker_image.localFiles[0].childImageSharp &&
    speaker_image.localFiles[0].childImageSharp.fluid.src;

  return (
    <SpeakerModal buttonText={userIds}>
      <StyledModalContent>
        {imageUrl ? (
          <StyledImage src={imageUrl} />
        ) : (
          <StyledIcon>
            <Person fontSize="large" />
          </StyledIcon>
        )}
        <StyledTitle>{userIds}</StyledTitle>
        <StyledDescription>
          {speaker_bio ||
            'Vi har dessverre ingen beskrivelse på denne personen :('}
        </StyledDescription>
      </StyledModalContent>
    </SpeakerModal>
  );
};

export default SlotSpeakers;
