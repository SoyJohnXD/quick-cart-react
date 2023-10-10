import { ReactNode } from "react";

export type Routes = {
  [key: string]: string;
};

export interface Modal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ModalBasic extends Modal {
  id: string;
  children: ReactNode;
  classContent?: string;
  classContainer?: string;
  title?: string;
}

export interface ModalLogin extends Modal {
  setRegisterModalshow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Input {
  name: string;
  label?: string;
  type: string;
  onChage: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  isRequired?: boolean;
  classLabel?: string;
  classContainer?: string;
  classInput?: string;
  value: string;
}

export interface SearchInput extends Input {
  whitIcon: boolean;
}

export interface Button {
  title: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  icon?: string;
  classButton?: string;
  classIcon?: string;
}

export interface Anchor {
  title: string;
  classAnchor?: string;
  onClick?: () => void;
  isLink?: boolean;
  to?: string;
}

export interface CartProduct extends product {
  quantity: number;
  quantity_buy: number;
  unit: string;
  price: number;
  is_outstanding: boolean;
  stock: number;
}

export interface Variants {
  quantity: number;
  unit: string;
  price: number;
  is_outstanding: boolean;
  stock: number;
}
export interface product {
  id: string;
  brand: string;
  name: string;
  img: string;
  variants: Variants[];
  description: string;
  categories?: string[];
}
export interface ListProduct {
  products: product[];
}

export interface Banner {
  imgUrl: string;
  classContainer?: string;
  classImg?: string;
}

export interface Category {
  imgUrl: string;
  title: string;
  to: string;
}

export interface Filter {
  filter: { title: string; isCheck: boolean };
  filters: { title: string; isCheck: boolean }[][];
  setFilters: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface SideFilters {
  productsList: product[];
  setProductsList: React.Dispatch<React.SetStateAction<product[]>>;
  products: product[];
}

export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: "admin" | "client";
}

export interface RegisterUser extends User {
  confirm_password: string;
}

export interface UserWithId extends User {
  id: string;
}

export interface userAuth {
  name: string;
  email: string;
  role: "admin" | "client";
}

export interface AuthForm {
  password: string;
  email: string;
}

export interface Navbar {
  auth: userAuth;
}
