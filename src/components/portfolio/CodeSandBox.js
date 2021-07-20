import PropTypes from 'prop-types';

export default function CodeSandBox({ src, title }) {
  return (
    <iframe
      className="w-full h-96 border-none rounded overflow-hidden"
      src={src}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}

CodeSandBox.propType = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
