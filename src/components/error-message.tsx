"use client";

import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div className="error-message">
      <div className="error-content">
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="error-dismiss">
          Dismiss
        </button>
      )}
    </div>
  );
}
