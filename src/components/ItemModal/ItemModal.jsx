import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onClose}>
      <div
        className="modal__content modal__content_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close modal__close_type_preview"
          onClick={onClose}
        ></button>

        <img src={card?.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card?.name}</h2>
          <p className="modal__weather">Weather: {card?.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
