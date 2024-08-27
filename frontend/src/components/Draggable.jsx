import { useDraggable } from '@dnd-kit/core';
import PropTypes from 'prop-types';

const Draggable = ({ children, id, className }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={className}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Draggable;
