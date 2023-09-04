import { useRef } from "react";
import "./modal.css";

export default function Modal({ icon, message, buttonText, closeModal }) {
  const cancelButtonRef = useRef(null);
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dialog_label"
      initialFocus={cancelButtonRef}
    >
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-title">
              <div className="modal-icon" aria-hidden="true">
                {icon}
              </div>
              <h3 className="modal-message" id="dialog_label">
                {message}
              </h3>
            </div>

            <button
              type="button"
              className="modal-button bg-lime-600 shadow-sm sm:ml-3"
              onClick={closeModal}
              ref={cancelButtonRef}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
