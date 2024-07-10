/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

const DefaultElement = (props) => {
  const { children, attributes } = props;
  return <p {...attributes}>{children}</p>;
};

DefaultElement.propTypes = {
  attributes: PropTypes.shape({
    'data-slate-node': PropTypes.string,
    ref: PropTypes.func,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default DefaultElement;
