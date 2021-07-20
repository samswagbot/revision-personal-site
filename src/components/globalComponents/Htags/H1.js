import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSizes.extraLarge};
  color: ${(p) => p.theme.colors.lightGray};
  display: flex;
`;

export default function H1({ children, className }) {
  return <StyledH1 className={className}>{children}</StyledH1>;
}

H1.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
