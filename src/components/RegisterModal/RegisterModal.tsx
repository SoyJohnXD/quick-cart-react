import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { Modal as IModal, RegisterUser } from "../../types";
import { Button } from "../Button/Button";
import { registerIlustration } from "../../assets";
import { useUserActions } from "../../hook/useUserActions";
import { useState } from "react";
import { USER_EMPTY } from "../../constants";

export default function RegisterModal({ show, setShow }: IModal) {
  const { addUser } = useUserActions();
  const [formData, setFormData] = useState<RegisterUser>(USER_EMPTY);
  const [passwordIsConfirmed, setPasswordIsConfirmed] = useState(false);
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const [validatePass, setValidatePass] = useState(false);

  const handdleChange = (
    element: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = element.target;
    setFormData({
      ...formData,
      ...{ [name]: value },
    });
    if (name === "confirm_password") {
      setValidatePass(true);
      if (formData.password === value) {
        setPasswordIsConfirmed(true);
        setValidatePass(false);
      }
    }
  };

  const handdleCreate = () => {
    setResult(null);
    addUser({ ...formData, role: "client" });
    setFormData(USER_EMPTY);
    return setResult("ok");
  };

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
              onChage={handdleChange}
              value={formData.name}
            />
            <Input
              label="*Apellidos"
              name="lastname"
              type="text"
              placeholder="Escriba su apellido"
              isRequired
              onChage={handdleChange}
              value={formData.lastname}
            />
            <Input
              label="*Correo electronico"
              name="email"
              type="email"
              placeholder="name@company.com"
              isRequired
              onChage={handdleChange}
              value={formData.email}
            />
            <Input
              label="*Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
              isRequired
              onChage={handdleChange}
              value={formData.password}
            />
            <Input
              label="*Confirmar contraseña"
              name="confirm_password"
              type="password"
              placeholder="••••••••"
              isRequired
              onChage={handdleChange}
              value={formData.confirm_password}
            />
            {validatePass && (
              <p className="text-xs text-red-700 ">
                las contraseñas no coinciden
              </p>
            )}
            <Button
              type="button"
              title="Registrarse"
              classButton="mx-auto block"
              onClick={() => {
                if (passwordIsConfirmed) {
                  handdleCreate();
                }
              }}
            />
            {result === "ok" &&
              setTimeout(() => {
                setResult(null);
              }, 3000) && (
                <p className="text-md text-green-700 mx-auto text-center">
                  ¡Usuario registrado correctamente!
                </p>
              )}
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
