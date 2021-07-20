import PropTypes from 'prop-types';

export default function H3({ children, className }) {
  const classname = `text-secondary font-bold text-3xl lg:text-4xl mb-4 lg:mb-6 ${className}`;
  return <h3 className={classname}>{children}</h3>;
}

H3.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
