import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Seperator from './Seperator';
import colors from '../util/colors';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledSection = styled.div`
  background-color: ${p => p.backgroundColor || colors.blueLighest};
  min-height: 50vh;
  color: ${p => p.color || 'black'};
`;
const StyledInnerSection = styled.div`
  padding: 0 30%;
`;

const ContentSection = ({
  withTopSeperator,
  withBottomSeperator,
  previousSectionColor,
  nextSectionColor,
  children,
  ...rest
}) => {
  return (
    <Fragment>
      <StyledSection {...rest}>
        {withTopSeperator && (
          <Seperator
            previousSectionColor={previousSectionColor}
            nextSectionColor={nextSectionColor}
            position="top"
          />
        )}
        <StyledInnerSection>{children}</StyledInnerSection>
        {withBottomSeperator && (
          <Seperator
            previousSectionColor={previousSectionColor}
            nextSectionColor={nextSectionColor}
            position="bottom"
          />
        )}
      </StyledSection>
    </Fragment>
  );
};

ContentSection.defaultProps = {
  withTopSeperator: false,
  withBottomSeperator: false,
};

ContentSection.propTypes = {
  withBottomSeperator: PropTypes.bool,
  withTopSeperator: PropTypes.bool,
  previousSectionColor: PropTypes.string,
  nextSectionColor: PropTypes.string,
};

export default ContentSection;
