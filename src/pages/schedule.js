import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Content from '../components/Content';
import colors from '../util/colors';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import SafeLink from '../components/SafeLink';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Slots from '../components/Slot/Slots';
import Filters from '../components/Filters';

const buttonGroupStyle = numberOfButtons => css`
  margin: ${spacing.large} auto;
  margin-bottom: 0;
  grid-template-columns: 100%;
  grid-template-rows: ${spacing.xlarge};
  grid-template-columns: 25% 25% 25% 25%;
  width: 80%;
  grid-template-rows: auto;

  @media (${mediaQueries.medium}) {
    grid-row-gap: 10px;
    width: 100%;
    grid-template-rows: auto auto;
    grid-template-columns: 50% 50%;
    margin-bottom: ${spacing.normal};
  }
`;

const isActiveStyle = css`
  color: white;
  background-color: ${colors.blueDarkest};
  border-color: ${colors.blueDarkest};
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (${mediaQueries.medium}) {
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-rows: auto;
    grid-template-areas: 'button arrow';
  }
`;

const StyledLink = styled.a`
  padding: ${spacing.small} ${spacing.normal};
  background-color: ${colors.blue};
  text-decoration: none;
  color: white;
  border: 1px solid ${colors.blue};
  border-radius: 50px;
  text-align: center;
  display: ${p => p.isActive && isActiveStyle};
  &:hover,
  &:focus {
    ${isActiveStyle};
  }
  @media (${mediaQueries.medium}) {
    grid-area: button;
  }
`;

const expandMoreStyle = css`
  margin-top: ${spacing.xsmall};
  color: ${colors.blue};
  visibility: visible;
  align-self: center;
  @media (${mediaQueries.medium}) {
    grid-area: arrow;
    visibility: hidden;
  }
`;

const SchedulePage = ({ location }) => {
  const StyledSafeLink = StyledLink.withComponent(SafeLink);
  const [activeFilter, setActiveFilter] = useState('');
  const dayInUrl = viewmodel.schedules.find(
    scheduleDay => scheduleDay.date === location.hash.substring(1),
  );
  const activeDay = dayInUrl || viewmodel.days[0];
  console.log(activeDay);
  if (!activeDay || !activeDay.date) {
    return <span>Her skjedde noe feil gitt...</span>;
  }

  const onChangeActiveFilter = newFilter => {
    const updatedActiveFilter = newFilter === activeFilter ? '' : newFilter;
    setActiveFilter(updatedActiveFilter);
  };

  useEffect(
    () => {
      setActiveFilter('');
    },
    [location],
  );

  const currenSlots = viewmodel.schedules
    .filter(slot => slot.date === activeDay.date)
    .filter(slot => {
      if (activeFilter === '') {
        return true;
      }
      if (!slot.type) {
        return activeFilter === 'other';
      }
      return slot.type === activeFilter;
    });

  return (
    <DefaultLayout>
      <Content>
        <ContentSection
          minHeight="5vh"
          backgroundColor={colors.blueDark}
          color="white">
          <ButtonGroup
            css={buttonGroupStyle(viewmodel.days.length)}
            numberOfButtons={viewmodel.days.length}>
            {viewmodel.days.map(day => (
              <StyledLinkContainer key={day.label}>
                <StyledSafeLink
                  isActive={activeDay.date === day.date}
                  to={`/schedule#${day.date}`}>
                  {day.label}
                </StyledSafeLink>
                {activeDay.date === day.date && (
                  <ExpandMore css={expandMoreStyle} fontSize="large" />
                )}
              </StyledLinkContainer>
            ))}
          </ButtonGroup>
        </ContentSection>
        <ContentSection minHeight="95vh" withTopSeperator withBottomSeperator>
          <Filters
            activeFilter={activeFilter}
            onChangeActiveFilter={onChangeActiveFilter}
          />
          <Slots activeFilter={activeFilter} slots={currenSlots} />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default SchedulePage;
