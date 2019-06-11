import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import SafeLink from '../components/SafeLink';
import colors from '../util/colors';
import spacing from '../util/spacing';

const StyledNavigationContainer = styled.div`
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 3;
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 3px solid ${colors.blueDarkest};
  background-color: ${colors.blueDark};
`;

const StyledNavigation = styled.div`
  color: white;
  justify-content: center;
  display: grid;
  grid-column-gap: ${spacing.normal};
  grid-template-columns: repeat(3, ${spacing.spacingUnit * 4}px [col-start]);
`;

const routes = [
  { to: '/', title: 'Praha 2019' },
  { to: '/schedule', title: 'Program' },
  { to: '/favorites', title: 'Favoritter' },
];

const StyledSafeLink = styled(SafeLink)`
  justify-self: center;
  padding: ${spacing.small} 0;
  ${p =>
    p.isActive &&
    css`
      border-bottom: 3px solid ${colors.blue};
      margin-bottom: -3px;
    `};
`;

const Navigation = () => {
  const [activeRoute, setActiveRoute] = useState('/');
  return (
    <StyledNavigationContainer>
      <StyledNavigation>
        {routes.map(route => (
          <StyledSafeLink
            onClick={() => setActiveRoute(route.to)}
            key={route.to}
            to={route.to}
            isActive={activeRoute === route.to}>
            {route.title}
          </StyledSafeLink>
        ))}
      </StyledNavigation>
    </StyledNavigationContainer>
  );
};

export default Navigation;
