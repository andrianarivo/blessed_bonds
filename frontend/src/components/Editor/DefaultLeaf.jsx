/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const DefaultLeaf = ({ attributes, leaf, children }) => (
  <span {...attributes} style={{ fontWeight: leaf.bold ? 'bold' : 'normal' }}>
    {children}
  </span>
);

DefaultLeaf.propTypes = {
  attributes: PropTypes.shape({
    'data-slate-leaf': PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    text: PropTypes.string,
  }),
  children: PropTypes.element,
};

export default DefaultLeaf;
