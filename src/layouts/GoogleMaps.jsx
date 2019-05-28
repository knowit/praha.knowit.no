import React from 'react';
import styled from '@emotion/styled';
import viewmodel from '../json';
import colors from '../util/colors';
import mediaQueries from '../util/mediaQueries';

const StyledGoogleMapsWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  border-top: 3px solid ${colors.primary};
`;

const StyledGoogleMapsBlocker = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const StyledGoogleMaps = styled.iframe`
  height: 100vh;
  width: 100vw;
  border: none;
`;

const GoogleMaps = () => {
  return (
    <StyledGoogleMapsWrapper>
      <StyledGoogleMapsBlocker />
      <StyledGoogleMaps src={viewmodel.event.gmapsUrl} frameBorder="0" />
    </StyledGoogleMapsWrapper>
  );
};

export default GoogleMaps;
