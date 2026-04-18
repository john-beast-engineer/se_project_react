import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";

function EditProfileModal({ isOpen, onUpdateUser, onClose }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", avatar: "" });
    }
  }, [isOpen]);

  function handleUpdateUser(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleUpdateUser}
      name="edit-profile"
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
