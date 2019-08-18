import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Slot from '../components/Slot';
import Content from '../components/Content';
import colors from '../util/colors';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import SafeLink from '../components/SafeLink';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import ExpandMore from '@material-ui/icons/ExpandMore';

const buttonGroupStyle = css`
  margin: ${spacing.large} auto;
`;

const isActiveStyle = css`
  color: white;
  background-color: ${colors.blueDarkest};
  border-color: ${colors.blueDarkest};
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  @media (${mediaQueries.medium}) {
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
  ${p => p.isActive && isActiveStyle};
  &:hover,
  &:focus {
    ${isActiveStyle};
  }
  @media (${mediaQueries.medium}) {
  }
`;

const expandMoreStyle = css`
  margin-top: ${spacing.xsmall};
  color: ${colors.blue};
`;

const SchedulePage = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onDayClick = (evt, activeIndex) => {
    evt.preventDefault();
    setActiveIndex((window.location.hash = `#${activeIndex}`));
  };

  const onSelectChange = evt => {
    const scheduleDay = viewmodel.schedules(evt.target.value);
    window.location.hash = `#${
      viewmodel.schedules[evt.target.value]
        ? scheduleDay.date
        : viewmodel.schedules[0].date
    }`;
  };

  const { location } = props;
  const StyledSafeLink = StyledLink.withComponent(SafeLink);
  const dayInUrl = viewmodel.schedules.find(
    scheduleDay => scheduleDay.date === location.hash.substring(1),
  );
  const activeDay = dayInUrl || viewmodel.schedules[0];

  if (!activeDay || !activeDay.day) {
    return <span>Her skjedde noe feil gitt...</span>;
  }

  const data = useStaticQuery(graphql`
        query data { 
        allAirtable {
            edges {
               node {
                 data {
                   title,
                   userId,
                   beskrivelse,
                   type,
                   start,
                   end,
                   date,
                   duration,
                   rom
                 }
               }
              }
           }
          }
        `);

  console.log(data);

  return (
    <DefaultLayout>
      <Content>
        <ContentSection
          minHeight="10vh"
          backgroundColor={colors.blueDark}
          color="white">
          <ButtonGroup
            css={buttonGroupStyle}
            overflow="scroll"
            numberOfButtons={viewmodel.schedules.length}>
            {viewmodel.schedules.map((day, index) => (
              <StyledLinkContainer id={day.date}>
                <StyledSafeLink
                  key={day.day}
                  isActive={activeDay.date === day.date}
                  to={`/schedule#${day.date}`}>
                  {day.day}
                </StyledSafeLink>
                {activeDay.date === day.date && (
                  <ExpandMore css={expandMoreStyle} fontSize="large" />
                )}
              </StyledLinkContainer>
            ))}
          </ButtonGroup>
        </ContentSection>
        <ContentSection withTopSeperator withBottomSeperator>
          {activeDay.collections.map((collection, index) => (
            <Slot
              key={`${collection.title}_${index}`}
              collection={collection}
            />
          ))}
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default SchedulePage;
