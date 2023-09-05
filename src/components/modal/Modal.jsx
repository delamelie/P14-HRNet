import { useRef, useEffect } from "react";
import "./modal.css";

//// Handles escape tab, traps focus, hide background content, transition, accessibility, responsive

export default function Modal({
  icon,
  message,
  buttonText,
  ariaLabel,
  closeModal,
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log(buttonRef.current);
    buttonRef.current.focus();
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    function handleKeyPress(event) {
      switch (event.key) {
        case "Tab":
          event.preventDefault();
          buttonElement.focus();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    }

    buttonElement.addEventListener("keydown", handleKeyPress);

    return () => {
      buttonElement.removeEventListener("keydown", handleKeyPress);
    };
  }, [closeModal]);

  return (
    <div role="alertdialog" aria-modal="true" aria-labelledby="dialog_label">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-title">
              <div className="modal-icon">{icon}</div>
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
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
