import PropTypes from 'prop-types';

export const Tag = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
});

export const Note = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool,
});
