import React from 'react';
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

const buttonGroupStyle = numberOfButtons => css`
  margin: ${spacing.large} auto;

  @media (${mediaQueries.medium}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(${numberOfButtons}, auto [col-start]);
    grid-row-gap: 10px;
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
  align-items: center;
  white-space: nowrap;
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
  @media (${mediaQueries.medium}) {
    grid-area: arrow;
  }
`;

class SchedulePage extends React.Component {
  constructor() {
    super();
    this.onDayClick = this.onDayClick.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      activeIndex: 0,
    };
  }

  onDayClick(evt, activeIndex) {
    evt.preventDefault();
    this.setState({ activeIndex }, () => {
      window.location.hash = `#${activeIndex}`;
    });
  }

  onSelectChange(evt) {
    const scheduleDay = viewmodel.schedules[evt.target.value];
    window.location.hash = `#${
      viewmodel.schedules[evt.target.value]
        ? scheduleDay.date
        : viewmodel.schedules[0].date
    }`;
  }

  render() {
    const { location } = this.props;
    const StyledSafeLink = StyledLink.withComponent(SafeLink);
    const dayInUrl = viewmodel.schedules.find(
      scheduleDay => scheduleDay.date === location.hash.substring(1),
    );
    const activeDay = dayInUrl || viewmodel.days[0];
    console.log(activeDay);
    if (!activeDay || !activeDay.date) {
      return <span>Her skjedde noe feil gitt...</span>;
    }
    return (
      <DefaultLayout>
        <Content>
          <ContentSection
            minHeight="10vh"
            backgroundColor={colors.blueDark}
            color="white">
            <ButtonGroup
              css={buttonGroupStyle(viewmodel.days.length)}
              numberOfButtons={viewmodel.days.length}>
              {viewmodel.days.map(day => (
                <StyledLinkContainer id={day.date} key={day.label}>
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
          <ContentSection withTopSeperator withBottomSeperator>
            <Slots
              slots={viewmodel.schedules.filter(
                slot => slot.date === activeDay.date,
              )}
            />
          </ContentSection>
        </Content>
      </DefaultLayout>
    );
  }
}

export default SchedulePage;
