import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { Anchor } from "../Anchor/Anchor";
import { AuthForm, ModalLogin } from "../../types";
import { Button } from "../Button/Button";
import { LOGIN_EMPTY } from "../../constants";
import { useState } from "react";
import { useAuthActions } from "../../hook/useAuthActions";
import { useAppSelector } from "../../hook/store";

export default function LoginModal({
  show,
  setShow,
  setRegisterModalshow,
}: ModalLogin) {
  const Users = useAppSelector((state) => state.users);
  const { loginUser } = useAuthActions();
  const [formData, setFormData] = useState<AuthForm>(LOGIN_EMPTY);
  const [result, setResult] = useState<"ok" | "ko" | null>(null);
  const handdleChange = (
    element: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = element.target;
    setFormData({
      ...formData,
      ...{ [name]: value },
    });
  };

  const handdleLogin = () => {
    setResult(null);
    const user = Users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      loginUser({ name: user.name, email: user.email, role: user.role });
      setFormData(LOGIN_EMPTY);
      setResult("ok");
      return setShow(false);
    } else {
      setFormData({
        email: formData.email,
        password: "",
      });
      return setResult("ko");
    }
  };

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
            onChage={handdleChange}
            value={formData.email}
          />
          <Input
            label="*Contraseña"
            type="password"
            name="password"
            placeholder="••••••••"
            isRequired
            onChage={handdleChange}
            value={formData.password}
          />
          <div className="flex flex-col w-full text-center mt-2">
            <Button
              type="button"
              title="Ingresar"
              onClick={() => {
                handdleLogin();
              }}
            />
            {result === "ko" &&
              setTimeout(() => {
                setResult(null);
              }, 3000) && (
                <p className="text-xs text-red-700 ">
                  Algo salio mal verifique los datos.
                </p>
              )}
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
