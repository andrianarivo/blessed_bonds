/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const CodeElement = (props) => {
  const { children, attributes } = props;
  return (
    <pre className="text-white bg-slate-500" {...attributes}>
      <code>{children}</code>
    </pre>
  );
};

CodeElement.propTypes = {
  attributes: PropTypes.shape({
    'data-slate-node': PropTypes.string,
    ref: PropTypes.func,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default CodeElement;
