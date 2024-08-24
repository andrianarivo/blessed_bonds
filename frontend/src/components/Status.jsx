import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ title, badge = 0, color = '#5030e5', children }) => (
  <div className="w-status rounded-tl-2xl rounded-tr-2xl bg-gray-100 pt-4 flex flex-col shrink-0">
    <div className="flex items-center gap-2 mx-4">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <p className="font-medium">{title}</p>
      {badge > 0 && (
        <div className="badge badge-ghost bg-gray-300">{badge}</div>
      )}
    </div>
    <div className="h-[2px] my-4 mx-4" style={{ backgroundColor: color }} />
    <div className="flex-1 overflow-auto flex flex-col gap-2 items-center pb-4">
      {children}
    </div>
  </div>
);

Status.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.element,
};

export default Status;
