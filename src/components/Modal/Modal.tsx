import { useEffect } from "react";
import { ModalBasic } from "../../types";
import "./Modal.css";
import { CloseButton } from "./components/CloseButton";

export function Modal({
  children,
  show,
  setShow,
  classContent,
  classContainer,
  id,
  title,
}: ModalBasic) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <div
      id={id}
      className={`modal-container ${show ? "flex" : "hidden"} ${
        classContainer || ""
      }`}
    >
      <div id="modal-backdrop" className={show ? "block" : "hidden"}></div>

      <div id="parallax">
        <div className={`content ${classContent}`}>
          <div className="flex flex-row "></div>
          {!title ? (
            <CloseButton show={show} setShow={setShow} />
          ) : (
            <div className="flex px-4 py-3 border-b border-gray-200 justify-between">
              <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
              <CloseButton show={show} setShow={setShow} />
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
