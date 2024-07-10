/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const BoldLeaf = ({ attributes, children }) => (
  <strong {...attributes}>{children}</strong>
);

BoldLeaf.propTypes = {
  attributes: PropTypes.shape({
    'data-slate-leaf': PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    text: PropTypes.string,
  }),
  children: PropTypes.element,
};

export default BoldLeaf;
