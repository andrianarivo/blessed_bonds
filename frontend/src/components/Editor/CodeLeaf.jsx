/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const CodeLeaf = ({ attributes, children }) => (
  <code
    className="bg-slate-500 text-white py-1 px-2 rounded text-xs"
    {...attributes}
  >
    {children}
  </code>
);

CodeLeaf.propTypes = {
  attributes: PropTypes.shape({
    'data-slate-leaf': PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    text: PropTypes.string,
  }),
  children: PropTypes.element,
};

export default CodeLeaf;
