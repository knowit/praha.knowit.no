import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import ButtonGroup from '../components/ButtonGroup';
import Content, { ContentContainer, TopContent } from '../components/Content';
import colors from '../util/colors';
import SafeLink from '../components/SafeLink';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
`;

const textAlignCenterCss = css`
  text-align: center;
`;

const CfpPage = () => {
  return (
    <Content backgroundColor={colors.greyLightest}>
      <TopContent backgroundColor={colors.primary}>
        <StyledHeader>Call For Papers</StyledHeader>
        <ButtonGroup css={buttonGroupStyle} numberOfButtons={2}>
          <SafeLink hoverColor={colors.secondary} to="/">
            Forside
          </SafeLink>
          <SafeLink hoverColor={colors.secondary} to="/schedule/">
            Skjema
          </SafeLink>
        </ButtonGroup>
      </TopContent>
      <ContentContainer css={textAlignCenterCss}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd8b1dD8x8wYrfYOADKy3e-EIrsp687AauDz-bEHir-FP5XjA/viewform?embedded=true"
          width="640"
          height="1381"
          frameborder="0"
          marginheight="0"
          marginwidth="0">
          Laster...
        </iframe>
      </ContentContainer>
    </Content>
  );
};

export default CfpPage;
