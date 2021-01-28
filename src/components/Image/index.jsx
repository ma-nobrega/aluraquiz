import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.image`
 margin-left: 16px;
`;

Image.propTypes = {
  type: PropTypes.oneOf(['src', 'width', 'height']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Image;
