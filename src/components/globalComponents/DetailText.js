import PropTypes from 'prop-types';

export default function DetailText({ children, className }) {
  const classname = `text-tertiary ${className}`;
  return <p className={classname}>{children}</p>;
}

DetailText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
