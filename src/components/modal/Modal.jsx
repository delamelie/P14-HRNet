import { useRef, useEffect } from "react";
import "./modal.css";

export default function Modal({
  icon,
  message,
  buttonText,
  ariaLabel,
  closeModal,
  buttonStyle,
  iconStyle,
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    function handleTabKeyPress(event) {
      if (event.key === "Tab") {
        event.preventDefault();
        buttonElement.focus();
      }
    }

    function handleEscKeyPress(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    buttonElement.addEventListener("keydown", handleTabKeyPress);
    buttonElement.addEventListener("keydown", handleEscKeyPress);

    return () => {
      buttonElement.removeEventListener("keydown", handleTabKeyPress);
      buttonElement.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [closeModal]);

  return (
    <div role="alertdialog" aria-modal="true" aria-labelledby="dialog_label">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-title">
              <div className="modal-icon" style={iconStyle}>
                {icon}
              </div>
              <h3 className="modal-message" id="dialog_label">
                {message}
              </h3>
            </div>

            <button
              type="button"
              className="modal-button"
              ref={buttonRef}
              aria-label={ariaLabel}
              onClick={closeModal}
              style={buttonStyle}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
