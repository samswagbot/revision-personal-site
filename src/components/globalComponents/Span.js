import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  font-size: ${(p) => p.theme.fontSizes.small};
  display: flex;
  align-self: center;
`;

export default function Span({ children, className }) {
  return <StyledSpan className={className}>{children}</StyledSpan>;
}

Span.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
