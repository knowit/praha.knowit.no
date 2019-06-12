import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import viewmodel from '../json';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Slot from '../components/Slot';
import Content, { ContentContainer, TopContent } from '../components/Content';
import { oldColors as colors } from '../util/colors';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import SafeLink from '../components/SafeLink';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const pickDayButtonsStyle = css`
  @media (${mediaQueries.medium}) {
    display: none;
  }
`;

const StyledSelect = styled.select`
  border-radius: 0;
  height: 4rem;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  display: none;

  @media (${mediaQueries.medium}) {
    display: block;
  }
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
`;

const linkStyle = css`
  padding: 0.8rem 3rem;
  background-color: ${colors.primary};
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  border: 2px solid white;

  &:hover,
  &:focus {
    color: ${colors.primary};
    background-color: white;
  }
`;

const StyledDay = styled.div`
  border: 1px solid ${colors.greyLight};
  padding: 0 ${spacing.small};
  margin: ${spacing.large} 0;
`;

const StyledDayHeader = styled.h1`
  text-align: center;
  margin: ${spacing.large} 0;
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
    this.setState({ activeIndex: evt.target.value });
  }

  render() {
    const { activeIndex } = this.state;
    const activeDay =
      viewmodel && viewmodel.schedules[activeIndex]
        ? viewmodel.schedules[activeIndex]
        : undefined;
    if (!activeDay || !activeDay.day) {
      return <span>Her skjedde noe feil gitt...</span>;
    }
    return (
      <DefaultLayout>
        <Content>
          <ContentSection>
            <ButtonGroup numberOfButtons={viewmodel.schedules.length}>
              {viewmodel.schedules.map((day, index) => (
                <SafeLink
                  key={day.day}
                  to={`/schedule/${day.date}`}
                  css={pickDayButtonsStyle}>
                  {day.day}
                </SafeLink>
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
          <ContentSection backgroundColor={colors.greyLightest}>
            {viewmodel.schedules.map((day, index) => (
              <StyledDay id={index}>
                <StyledDayHeader>{day.day}</StyledDayHeader>
                {day.collections.map((collection, index) => (
                  <Slot
                    key={`${collection.title}_${index}`}
                    collection={collection}
                  />
                ))}
              </StyledDay>
            ))}
          </ContentSection>
        </Content>
      </DefaultLayout>
    );
  }
}

export default SchedulePage;
