import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  transition: opacity 0.5s;
  &:hover {
    opacity: ${(p) => p.theme.opacity.mainOpacity};
  }
  &:focus {
    outline: 0;
  }
`;
export default function Button({ children, type, value, className }) {
  const classname = `${className} p-3 bg-secondary text-white w-full text-sm rounded-md mb-8 border-none font-bold`;
  return (
    <StyledButton className={classname} type={type} value={value}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.string,
};
