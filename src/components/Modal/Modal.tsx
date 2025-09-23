// components/Modal/Modal.tsx
import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.modal} ${styles[size]}`}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
