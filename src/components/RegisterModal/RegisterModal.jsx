import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";

function RegisterModal({ isOpen, onRegister, onClose, onLoginClick }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", avatar: "", email: "", password: "" });
    }
  }, [isOpen]);

  function handleRegister(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleRegister}
      name="register"
      extraButton={
        <button
          type="button"
          className="modal__switch-btn"
          onClick={onLoginClick}
        >
          Log In
        </button>
      }
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
        Avatar URL
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
