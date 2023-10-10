import { useState } from "react";
import { addIcon, trashIcon } from "../assets";
import { Button } from "../components/Button/Button";
import CreateProductModal from "../components/CreateProductModal/CreateProductModal";
import { Table } from "../components/Table/Table";
import { useAppSelector } from "../hook/store";
import { useProductsActions } from "../hook/useProductsActions";

export default function ManageProducts() {
  const Products = useAppSelector((state) => state.products);
  const { removeProduct } = useProductsActions();
  const [showCreateProductModal, setShowCreateProductModal] =
    useState<boolean>(false);

  const handdleRemove = (id: string) => {
    removeProduct(id);
  };
  return (
    <>
      <div className="mt-16">
        <h2 className="text-center font-display text-3xl font-bold  text-slate-900 md:text-4xl">
          Panel de Administracion de la Tienda
        </h2>
        <div className="flex flex-col items-center justify-center my-5">
          <div className="w-full flex items-end justify-end mb-2">
            <Button
              title="Producto "
              type="button"
              onClick={() => {
                setShowCreateProductModal(true);
              }}
              icon={addIcon}
              classButton=" m-0 mr-20 py-1 px-3 flex flex-row items-centrer justify-center text-md bg-purple-400 hover:bg-purple-700"
              classIcon="invert w-[22px] mt-[3px] object-containb"
            />
          </div>
          <Table
            columns={[
              "Imagen",
              "Marca",
              "Nombre",
              "Descripcion",
              "Categorias",
              "ACCIONES",
            ]}
            classContainer="w-4/5"
            classTable="bg-white"
          >
            <>
              {Products.map((product, index) => (
                <tr key={"row-" + index} className="hover:bg-slate-100">
                  <td className=" w-auto  border-b border-gray-200">
                    <img
                      src={product.img}
                      alt={product.name}
                      className=" w-32 h-32 object-contain"
                    />
                  </td>
                  <td className="w-24 py-4 px-6 border-b border-gray-200">
                    {product.brand}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 truncate">
                    {product.name}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 ">
                    <div className="flex flex-row flex-wrap h-full justify-center items-center gap-1">
                      {product.categories?.map((category) => (
                        <span
                          key={category + "-key"}
                          className="bg-orange-300 text-white py-1 px-2 rounded-full text-xs whitespace-nowrap"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-center ">
                    <Button
                      title=""
                      onClick={() => {
                        handdleRemove(product.id);
                      }}
                      type="button"
                      classButton="rounded-lg  py-2 px-4 bg-primary hover:bg-orange-900"
                      classIcon="w-4 h-4 invert"
                      icon={trashIcon}
                    />
                  </td>
                </tr>
              ))}
            </>
          </Table>
        </div>
      </div>
      <CreateProductModal
        show={showCreateProductModal}
        setShow={setShowCreateProductModal}
      />
    </>
  );
}
