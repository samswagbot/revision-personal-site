import PropTypes from 'prop-types';

export default function Paragraph({ children, className }) {
  const classname = `text-2xl font-medium ${className}`;
  return <p className={classname}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
