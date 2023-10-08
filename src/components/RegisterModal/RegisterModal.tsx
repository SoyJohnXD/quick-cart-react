import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { Modal as IModal } from "../../types";
import { Button } from "../Button/Button";
import { registerIlustration } from "../../assets";

export default function RegisterModal({ show, setShow }: IModal) {
  return (
    <Modal
      id="register-modal"
      show={show}
      setShow={setShow}
      classContent="w-fit"
    >
      <div className="px-6 py-6 lg:px-8 flex flex-row gap-1">
        <div className="w-auto sm:w-96">
          <h3 className="mb-4 font-bold text-black text-4xl mt-2 text-center">
            Registro de usuario
          </h3>
          <form className="space-y-6" action="#">
            <Input
              label="*Nombres"
              name="name"
              type="text"
              placeholder="Escriba su nombre"
              isRequired
              onChage={() => {}}
            />
            <Input
              label="*Apellidos"
              name="lastname"
              type="text"
              placeholder="Escriba su apellido"
              isRequired
              onChage={() => {}}
            />
            <Input
              label="*Correo electronico"
              name="email"
              type="email"
              placeholder="name@company.com"
              isRequired
              onChage={() => {}}
            />
            <Input
              label="*Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
              isRequired
              onChage={() => {}}
            />
            <Input
              label="*Confirmar contraseña"
              name="confirm_password"
              type="password"
              placeholder="••••••••"
              isRequired
              onChage={() => {}}
            />
            <Button
              type="submit"
              title="Registrarse"
              classButton="mx-auto block"
              onClick={() => {}}
            />
          </form>
        </div>
        <div className="p-2 w-96 hidden md:flex items-center justify-center">
          <img
            src={registerIlustration}
            className="object-cover w-full h-auto"
            alt="register-image"
          />
        </div>
      </div>
    </Modal>
  );
}
