import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import {
  StyledSlot,
  StyledSlotTime,
  StyledSlotContent,
  StyledSlotType,
  StyledSlotTitle,
  StyledSlotTimeContainer,
  StyledSlotDuration,
  StyledSlotDescription,
} from './SlotStyles';
import spacing from '../../util/spacing';
import Button from '../Button';

const maxLengthStyle = maxLength => css`
  max-width: ${maxLength}px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(${maxLength}px - 60px);
    height: 100%;
    width: 60px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const expandMoreStyle = rotation => css`
  transform: rotate(${rotation}deg);
  transition: transform 1s ease-in-out;
`;

const EntriesSlot = ({ collection }) => {
  const descriptionRef = React.createRef();
  const [maxLength, setMaxLength] = useState(undefined);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(
    () => {
      const getBoundingClientRectData = descriptionRef.current.getBoundingClientRect();
      if (getBoundingClientRectData.height > 25) {
        setMaxLength(getBoundingClientRectData.width - spacing.spacingUnit * 3);
      }
    },
    [collection.description],
  );
  console.log(maxLength);
  return (
    <StyledSlot>
      <StyledSlotType type="talk" />
      <StyledSlotTimeContainer>
        <StyledSlotTime>{`${collection.start} - ${
          collection.end
        }`}</StyledSlotTime>
        <StyledSlotDuration>60 min</StyledSlotDuration>
      </StyledSlotTimeContainer>
      <StyledSlotContent>
        <StyledSlotTitle>{collection.title}</StyledSlotTitle>
        <StyledSlotDescription
          ref={descriptionRef}
          css={maxLength && !showDescription && maxLengthStyle(maxLength)}>
          {collection.description}
        </StyledSlotDescription>
        <Button
          appearance="stripped"
          onClick={() => setShowDescription(!showDescription)}>
          <ExpandMore
            css={showDescription ? expandMoreStyle(180) : expandMoreStyle(0)}
          />
        </Button>
      </StyledSlotContent>
    </StyledSlot>
  );
};

EntriesSlot.propTypes = {
  collection: PropTypes.object,
};

export default EntriesSlot;
