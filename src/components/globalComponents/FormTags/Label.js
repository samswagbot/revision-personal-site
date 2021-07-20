import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

export default function Label({ htmlFor, children, className }) {
  const classname = `${className} absolute text-tertiary text-sm`;
  return (
    <StyledLabel className={classname} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.string,
};
