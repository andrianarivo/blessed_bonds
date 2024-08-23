import React from 'react';

const Status = () => (
  <div className="min-w-96 rounded-tl-2xl rounded-tr-2xl bg-gray-100 p-4">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-orange-600" />
      <p className="font-medium">Vision</p>
      <div className="w-5 h-5 rounded-full bg-gray-300 text-xs flex justify-center items-center">
        1
      </div>
    </div>
    <div className="h-[2px] w-full my-4 bg-orange-600" />
  </div>
);

Status.propTypes = {};

export default Status;
