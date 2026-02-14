import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const handleDelete = () => {
    onDelete(card._id);
  };
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button className="modal__close" type="button" onClick={onClose} />
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <button
            className="modal__delete-btn"
            type="button"
            onClick={onDelete}
          >
            Delete item
          </button>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
