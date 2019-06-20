import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
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
  @media (${mediaQueries.medium}) {
    display: none;
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
    display: none;
  }
`;

const StyledSelect = styled.select`
  border-radius: 0;
  height: 4rem;
  width: 90%;
  background-color: white;
  margin: 0 auto;
  margin-bottom: ${spacing.small};
  display: none;

  @media (${mediaQueries.medium}) {
    display: block;
  }
`;

const expandMoreStyle = css`
  margin-top: ${spacing.xsmall};
  color: ${colors.blue};
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
    const activeDay = dayInUrl || viewmodel.schedules[0];

    if (!activeDay || !activeDay.day) {
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
              css={buttonGroupStyle}
              numberOfButtons={viewmodel.schedules.length}>
              {viewmodel.schedules.map((day, index) => (
                <StyledLinkContainer>
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
            <StyledSelect onChange={this.onSelectChange}>
              {viewmodel.schedules.map((day, index) => (
                <option
                  key={day.day}
                  value={index}
                  onClick={evt => this.onDayClick(evt, index)}>
                  {day.day}
                </option>
              ))}
            </StyledSelect>
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
  }
}

export default SchedulePage;
