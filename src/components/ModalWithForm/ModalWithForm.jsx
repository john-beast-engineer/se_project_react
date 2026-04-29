import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  name,
  children,
  extraButton,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <div className="modal__button-row">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {extraButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
