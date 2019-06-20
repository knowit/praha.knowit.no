import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const StyledContent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  background-color: ${p => p.backgroundColor || 'white'};
`;

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }

  .c-schedule-transition-enter {
    opacity: 0.01;
  }

  .c-schedule-transition-enter.c-schedule-transition-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .c-schedule-transition-leave {
    opacity: 1;
  }

  .c-schedule-transition-leave.c-schedule-transition-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const Content = ({ children, ...rest }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <StyledContent {...rest}>{children}</StyledContent>
  </Fragment>
);

export default Content;
