import React from "react";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_confirm">
        <button className="modal__close" type="button" onClick={onClose} />
        <p className="modal__confirm-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          className="modal__confirm-btn"
          type="button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button className="modal__cancel-btn" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default ConfirmDeleteModal;
