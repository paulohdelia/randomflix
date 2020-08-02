import React from 'react';

import styled, { keyframes } from 'styled-components';

const upDown = keyframes`
    from {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -5px);
    }
    to {
      transform: translate(0, -0);
    }
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  --animationDuration: 800ms;
  padding: 16px 0;
`;

const Dot = styled.span`
  display: inline-block;

  margin-left: 1px;

  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: var(--primary);

  animation: ${upDown} var(--animationDuration) linear infinite;
  animation-delay: calc(var(--animationDuration) / 4);

  :first-of-type {
    animation: ${upDown} var(--animationDuration) linear infinite;
    animation-delay: calc(var(--animationDuration) / 2);
  }

  :last-of-type {
    animation: ${upDown} var(--animationDuration) linear infinite;
  }
`;

const Loading = () => (
  <LoadingWrapper>
    <Dot />
    <Dot />
    <Dot />
  </LoadingWrapper>
);

export default Loading;
