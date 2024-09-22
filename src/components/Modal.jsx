import React from "react";

function Modal({ isOpen, onClose, onConfirm, message, modalStyle }) {
  if (!isOpen) return null;

  return (
    <div className={modalStyle}>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Are you sure to continue?</h2>
        <p className="text-xl font-semibold mb-4">{message}</p>
        <div className="flex justify-center items-center gap-14 font-bold text-xl mb-4">
          <button
            className="border-2 border-[#FFFFFF] bg-[#32CD32] border-solid px-4 text-white rounded-lg text-shadow"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="border-2 border-[#FFFFFF] bg-[#FF0000] border-solid px-4 text-white rounded-lg text-shadow"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
