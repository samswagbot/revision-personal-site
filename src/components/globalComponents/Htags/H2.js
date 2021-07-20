import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  color: ${(p) => p.theme.colors.lightGray};
  letter-spacing: 2px;
  width: 100%;
  @media ${(p) => p.theme.device.mobileS} {
    font-size: ${(p) => p.theme.fontSizes.medium};
    letter-spacing: 0px;
    margin-top: 40px;
  }

  @media ${(p) => p.theme.device.laptop} {
    font-size: ${(p) => p.theme.fontSizes.large};
    font-weight: ${(p) => p.theme.fontWeight.bold};
    letter-spacing: 2px;
    width: 100%;
  }
`;

export default function H2({ children, className }) {
  return <StyledH2 className={className}>{children}</StyledH2>;
}

H2.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
