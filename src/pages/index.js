import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { withPrefix } from 'gatsby-link';
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
import ContentSection from '../components/ContentSection';
import PrahaLogo from '../components/Icons/PrahaLogo';
import TwoColumnInfo from '../components/Favorites';

const StyledLogoContainer = styled.div`
  text-align: center;
  margin-top: ${spacing.spacingUnit * 4}px;
`;

const IndexPage = () => (
  <Layout showGoogleMaps>
    <Content>
      <ContentSection backgroundColor={colors.blueDark} color="white">
        <StyledLogoContainer>
          <PrahaLogo />
          <Paragraph color="white">
            {eventData.startDate} - {eventData.endDate} {eventData.year}
          </Paragraph>
        </StyledLogoContainer>
      </ContentSection>
      <ContentSection
        previousSectionColor={colors.blueDark}
        withBottomSeperator
        withTopSeperator>
        <h1>
          Fagseminar {eventData.season.longCapitalized} {eventData.year}
        </h1>
        <Paragraph>
          Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. Våren 2019 vil den bli avholdt 22. mars -
          23. mars 2019 i Strømstad, Sverige.
        </Paragraph>
        <Paragraph>
          Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard,
          Reykjavik, Palma, Ljubljana etc.
        </Paragraph>
        <CodeOfConduct />
      </ContentSection>
      <ContentSection withBottomSeperator withTopSeperator>
        <TwoColumnInfo />
      </ContentSection>
    </Content>
  </Layout>
);

export default IndexPage;
