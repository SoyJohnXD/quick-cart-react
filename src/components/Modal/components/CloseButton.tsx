import React from "react";
import { Modal } from "../../../types";
import { closeIcon } from "../../../assets";

export function CloseButton({ show, setShow }: Modal) {
  return (
    <button
      onClick={(): void => setShow(!show)}
      type="button"
      className="close-btn"
    >
      <img className="w-5 h-5" src={closeIcon} alt="Cerrar modal" />
    </button>
  );
}
