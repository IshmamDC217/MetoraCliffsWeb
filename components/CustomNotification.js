import React from 'react';

const CustomNotification = ({ message, type = 'info', onClose }) => {
  const backgroundColor = {
    info: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 90,
        right: '40%',
        // backgroundColor: '#08304e',
        backgroundColor: '#12161c',
        color: 'white',
        padding: '10px 20px',
        borderRadius: 5,
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      onClick={handleClose}
    >
      {message}
    </div>
  );
};

export default CustomNotification;
