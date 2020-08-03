import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>{children}</Main>
    <Footer />
  </>
);

PageDefault.defaultProps = {
  paddingAll: 'var(--bodyPaddingTop) 5% 0',
};

PageDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  paddingAll: PropTypes.string,
};

export default PageDefault;
