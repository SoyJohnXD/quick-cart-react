import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { Modal as IModal, ProductForm, product } from "../../types";
import { Button } from "../Button/Button";
import { placeholder } from "../../assets";
import { useState } from "react";
import { PROD_EMPTY } from "../../constants";
import { useProductsActions } from "../../hook/useProductsActions";

export default function CreateProductModal({ show, setShow }: IModal) {
  const { addProduct } = useProductsActions();
  const [formData, setFormData] = useState<ProductForm>(PROD_EMPTY);
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

  const handdleCreate = () => {
    setResult(null);
    const product: product = {
      id: crypto.randomUUID(),
      name: formData.name,
      brand: formData.brand,
      description: formData.description,
      img: placeholder,
      variants: [
        {
          price: formData.price,
          unit: formData.unit,
          quantity: formData.quantity,
          is_outstanding: false,
          stock: formData.stock,
        },
      ],
      categories: formData.categories.split(","),
    };
    addProduct(product);
    setFormData(PROD_EMPTY);
    return setResult("ok");
  };

  return (
    <Modal
      id="create-prodcut-modal"
      show={show}
      setShow={setShow}
      classContent="w-fit"
    >
      <div className="px-6 py-6 lg:px-8 flex flex-row gap-1">
        <div className="w-auto sm:w-96">
          <h3 className="mb-4 font-bold text-black text-4xl mt-2 text-center">
            Crear un nuevo producto
          </h3>
          <form className="space-y-2" action="#">
            <Input
              label="*Marca"
              name="brand"
              type="text"
              placeholder="Escriba la marca"
              isRequired
              onChage={handdleChange}
              value={formData.brand}
            />
            <Input
              label="*Nombre"
              name="name"
              type="text"
              placeholder="Escriba el nombre del producto"
              isRequired
              onChage={handdleChange}
              value={formData.name}
            />
            <Input
              label="*Descripcion"
              name="description"
              type="text"
              placeholder="Describa el producto brevemente"
              isRequired
              onChage={handdleChange}
              value={formData.description}
            />
            <div>
              <Input
                label="*Categorias"
                name="categories"
                type="text"
                placeholder="Bebidas, REFISAL ,Alimentos..."
                isRequired
                onChage={handdleChange}
                value={formData.categories}
              />
              <span className="text-xs text-primary">
                Escriba las categorias separadas por una ","
              </span>
            </div>

            <Input
              label="*Precio"
              name="price"
              type="text"
              placeholder="Escriba el precio de su producto..."
              isRequired
              onChage={handdleChange}
              value={String(formData.price || "")}
            />
            <div className="w-full flex flex-row gap-2">
              <Input
                label="*Cantida"
                name="quantity"
                type="text"
                placeholder="Escriba la cantidad de producto ..."
                isRequired
                onChage={handdleChange}
                value={String(formData.quantity || "")}
                classContainer="w-2/3"
              />
              <Input
                label="*Unidad"
                name="unit"
                type="text"
                placeholder="Gr | mL | L | Unidad"
                isRequired
                onChage={handdleChange}
                value={String(formData.unit)}
                classContainer="w-1/3"
              />
            </div>

            <Button
              type="button"
              title="Guardar producto"
              classButton="mx-auto block py-2"
              onClick={() => {
                handdleCreate();
              }}
            />
            {result === "ok" &&
              setTimeout(() => {
                setResult(null);
              }, 3000) && (
                <p className="text-md text-green-700 mx-auto text-center">
                  Producto registrado correctamente!
                </p>
              )}
          </form>
        </div>
        <div className="p-2 w-96 hidden md:flex items-center justify-center">
          <img
            src={placeholder}
            className="object-cover w-full h-auto border rounded-md shadow-sm"
            alt="register-image"
          />
        </div>
      </div>
    </Modal>
  );
}
