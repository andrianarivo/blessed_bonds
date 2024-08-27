import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';

const Droppable = ({ children, id, className }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className={className}>
      {children}
    </div>
  );
};

Droppable.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Droppable;
