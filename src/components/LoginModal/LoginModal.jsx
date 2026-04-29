import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";

function LoginModal({ isOpen, onLogin, onClose, onRegisterClick }) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen]);

  function handleLogin(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleLogin}
      name="login"
      extraButton={
        <button
          type="button"
          className="modal__switch-btn"
          onClick={onRegisterClick}
        >
          Sign Up
        </button>
      }
    >
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

export default LoginModal;
