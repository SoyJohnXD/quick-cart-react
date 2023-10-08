import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { Anchor } from "../Anchor/Anchor";
import { ModalLogin } from "../../types";
import { Button } from "../Button/Button";

export default function LoginModal({
  show,
  setShow,
  setRegisterModalshow,
}: ModalLogin) {
  return (
    <Modal id="login-modal" show={show} setShow={setShow}>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-6 font-bold text-black text-4xl mt-2 text-center">
          Inicia Sesion
        </h3>
        <form className="space-y-4" action="#">
          <Input
            label="*Correo Electronico"
            type="email"
            name="email"
            placeholder="name@company.com"
            isRequired
            onChage={(): void => {}}
          />
          <Input
            label="*Contraseña"
            type="password"
            name="password"
            placeholder="••••••••"
            isRequired
            onChage={(): void => {}}
          />
          <div className="flex flex-col w-full text-center mt-2">
            <Button type="submit" title="Ingresar" onClick={() => {}} />
            <div className="flex justify-center gap-3 mt-3">
              <Anchor title=" Olvide mi contraseña" classAnchor="text-xs" />
              <Anchor
                title=" Registrarme"
                classAnchor="text-xs"
                onClick={() => {
                  setShow(false);
                  setRegisterModalshow(true);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
