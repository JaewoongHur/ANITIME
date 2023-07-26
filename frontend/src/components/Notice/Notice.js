import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function Notice() {
  const [isOpen, setIsOpen] = useState(false);

  const openNotice = () => {
    setIsOpen(true);
  };
  const closeNotice = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img
        src={`/icons/ic_notification.svg`}
        alt="notice"
        onClick={openNotice}
      />
      {isOpen && (
        <Modal isNotice={true} close={closeNotice}>
          <p>notice</p>
        </Modal>
      )}
    </>
  );
}
