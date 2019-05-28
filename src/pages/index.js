import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { withPrefix } from 'gatsby-link';
import darken from 'polished/lib/color/darken';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import viewmodel, { eventData } from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';
import spacing from '../util/spacing';
import SafeLink from '../components/SafeLink';

const arrowBottomCss = color => css`
  &:after {
    background: ${color};
    bottom: -50px;
    background: inherit;
  }
`;

const lineSeperatorTopCss = color => css`
  &::before,
  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    top: 1px;
    left: 0;
    z-index: -1;
    width: 150%;
    height: 75%;
    background: inherit;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  &::before {
    height: 70%;
    background: ${darken(color === 'white' ? 0 : 0.15, color)};
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
`;

const StyledIntroContent = styled.div`
  min-height: 50vh;
  justify-content: space-between;
  position: relative;
  background-color: ${p => p.backgroundColor || colors.primary};
  z-index: 33;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: ${p => p.paddingBottom || 0};
  ${p =>
    p.lineSeperatorTop &&
    lineSeperatorTopCss(p.backgroundColor || colors.primary)};
  ${p => p.arrowBottom && arrowBottomCss(p.backgroundColor || colors.primary)};

  & > * {
    margin: 0 auto;
    text-align: center;
    display: block;
    padding: ${spacing.normal} 0;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  margin: 0 auto;
`;

const StyledContentInfo = styled.div`
  min-height: 30vh;
  text-align: center;
  z-index: 34;
  background-color: white;
  position: relative;
  ${p => p.lineSeperatorTop && lineSeperatorTopCss('white')};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding-top: ${spacing.xlarge};
`;

const StyledDivder = styled.div`
  border-bottom: 3px solid ${p => p.color || colors.primary};
  width: 3rem;
  margin: ${spacing.normal} auto;
`;

const arrowDropDownStyle = css`
  color: white;
  height: 50px;
  width: 50px;
`;

const IndexPage = () => (
  <Layout>
    <Content
      css={css`
        overflow: hidden;
      `}>
      <StyledIntroContent
        backgroundColor={colors.secondary}
        paddingBottom={spacing.large}>
        <StyledLogo
          alt={`${viewmodel.event.city} Knowit logo`}
          src={withPrefix('/static/logo.png')}
        />
        <SafeLink to="/cfp">Call for Papers</SafeLink>
      </StyledIntroContent>
      <StyledIntroContent lineSeperatorTop paddingBottom={spacing.large}>
        <h1>{viewmodel.title}</h1>
        <div>
          <Paragraph color="white">Tid: {viewmodel.event.date}</Paragraph>
          <StyledDivder color="white" />
          <Paragraph color="white">
            Sted: {viewmodel.event.city}, {viewmodel.event.country}
          </Paragraph>
        </div>
        <ButtonGroup numberOfButtons={1}>
          <SafeLink to="/schedule/">Program</SafeLink>
        </ButtonGroup>
        <br />
      </StyledIntroContent>

      <StyledIntroContent
        lineSeperatorTop
        paddingBottom={spacing.large}
        backgroundColor={colors.knowit.green}>
        <h1>Neste hendelse:</h1>
      </StyledIntroContent>
      <StyledContentInfo lineSeperatorTop id="info">
        <h2>Informasjon</h2>
        <Paragraph>
          {`Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. ${eventData.season.longCapitalized} ${
            eventData.year
          } vil den bli avholdt ${eventData.date} i ${eventData.city}, ${
            eventData.country
          }.`}
        </Paragraph>
        <StyledDivder />
        <Paragraph>
          {`Tidligere har vi besøkt ${eventData.cities.join(', ')} etc.`}
        </Paragraph>
      </StyledContentInfo>
      <CodeOfConduct />
    </Content>
  </Layout>
);

export default IndexPage;
