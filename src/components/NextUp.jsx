import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import take from 'lodash/take';
import { closestIndexTo, isAfter } from 'date-fns';
import { css } from '@emotion/core';
import spacing from '../util/spacing';
import colors from '../util/colors';
import HeaderTwoWithIcon from './HeaderTwoWithIcon';
import Slots from './Slot/Slots';
import viewmodel, { eventData } from '../json';

const NextUp = () => {
  const today = new Date();
  const slots = viewmodel.schedules;
  const nextUpDates = slots
    .map(slot => {
      const startContainsColon = slot.start.includes(':');
      const splittedStart = slot.start.split(':');
      const hour = startContainsColon ? splittedStart[0] : slot.start;
      const minute = startContainsColon ? splittedStart[1] : slot.start;
      return new Date(
        eventData.year,
        eventData.monthNumber - 1, //0 indexed....
        slot.date,
        hour,
        minute,
      );
    })
    .filter(date => {
      return !isAfter(today, date);
    });
  const indexClosest = closestIndexTo(today, nextUpDates);
  const fourNextUp =
    nextUpDates.length !== 0 ? take(slots.slice(indexClosest), 4) : [];
  return (
    <div>
      <HeaderTwoWithIcon>
        <AccessTime
          css={css`
            margin-right: ${spacing.small};
            color: ${colors.blue};
          `}
        />
        Det neste som skjer
      </HeaderTwoWithIcon>
      {fourNextUp.length !== 0 ? (
        <Slots noGroupBy slots={fourNextUp} />
      ) : (
        <div>
          <p>Virker som det er over gitt :/</p>
        </div>
      )}
    </div>
  );
};

export default NextUp;
