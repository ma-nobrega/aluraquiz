import React from 'react';
import styled from 'styled-components';
import Img from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <Img
      className={className}
      src="/logo.png"
      width="auto"
      height={67}
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
