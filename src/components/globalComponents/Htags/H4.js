import PropTypes from 'prop-types';

export default function H4({ children, className }) {
  const classname = `${className} text-secondary text-right flex self-start m-0`;
  return <h4 className={classname}>{children}</h4>;
}

H4.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};
