import {
  categoryFruits,
  categoryMeats,
  categoryPantry,
  categoryVine,
  categoryDrinks,
  cleanBanner,
  oil,
  tuna,
  salt,
  coffe,
  placeholder,
} from "../assets";
import {
  AuthForm,
  CartProductWhitId,
  ProductForm,
  RegisterUser,
  Routes,
  UserWithId,
  product,
  userAuth,
} from "../types";

export const banners = [
  {
    page: "Home",
    alt: "Descuento en productos de limpieza",
    imgUrl: cleanBanner,
  },
];

export const categories = [
  {
    id: "category-vine",
    title: "Vino y Licores",
    img: categoryVine,
    to: "/",
  },
  {
    id: "category-pantry",
    title: "Despensa",
    img: categoryPantry,
    to: "/",
  },
  {
    id: "category-drinks",
    title: "Bebidas y Pasabocas",
    img: categoryDrinks,
    to: "/",
  },
  {
    id: "category-fruits",
    title: "Frutas y verduras",
    img: categoryFruits,
    to: "/",
  },
  {
    id: "category-meats",
    title: "Carnes, Pollo y Pescado",
    img: categoryMeats,
    to: "/",
  },
];

export const products = [
  {
    id: "salt",
    brand: "REFISAL",
    name: "Sal refinada",
    img: salt,
    categories: ["Alimentos básicos", "REFISAL"],
    variants: [
      {
        quantity: 500,
        unit: "Gr",
        price: 1100,
        is_outstanding: true,
        stock: 50,
      },
      {
        quantity: 1000,
        unit: "Gr",
        price: 1920,
        is_outstanding: false,
        stock: 10,
      },
      {
        quantity: 500,
        unit: "Gr",
        price: 1100,
        is_outstanding: false,
        stock: 2,
      },
    ],
    description:
      "Refisal 1000 gr es una sal refinada de primera calidad, imprescindible en cualquier cocina. Creada mediante un proceso de refinación cuidadoso, garantiza la pureza y la textura fina que facilita su incorporación a tus recetas. Esta sal es ideal para sazonar y realzar el sabor de tus platos favoritos, desde sopas y guisos hasta carnes a la parrilla y ensaladas frescas. Su granulometría uniforme y suave al tacto te permiten controlar con precisión la cantidad que deseas utilizar.",
  },
  {
    id: "coffe",
    brand: "SELLO ROJO",
    name: "Cafe molido Lamidano",
    img: coffe,
    categories: ["Alimentos básicos", "Bebidas", "SELLO ROJO"],
    variants: [
      {
        quantity: 500,
        unit: "Gr",
        price: 14000,
        is_outstanding: true,
        stock: 100,
      },
    ],
    description:
      "Café molido Lamidano de Sello Rojo, con un aroma y sabor inigualables. Disfruta de una taza de café deliciosamente fragante y suave, perfecta para empezar tu día con energía.",
  },
  {
    id: "coffe 2",
    brand: "SELLO ROJO 2",
    name: "Cafe molido Lamidano",
    img: coffe,
    categories: ["Alimentos básicos", "SELLO ROJO"],
    variants: [
      {
        quantity: 500,
        unit: "Gr",
        price: 14000,
        is_outstanding: false,
        stock: 100,
      },
    ],
    description:
      "Café molido Lamidano de Sello Rojo, con un aroma y sabor inigualables. Disfruta de una taza de café deliciosamente fragante y suave, perfecta para empezar tu día con energía.",
  },
  {
    id: "tuna",
    brand: "VAN CAMPS",
    name: "Atún baby en aceite de oliva",
    img: tuna,
    categories: ["Alimentos básicos", "VAN CAMPS"],
    variants: [
      {
        quantity: 240,
        unit: "Gr",
        price: 16100,
        is_outstanding: true,
        stock: 75,
      },
    ],
    description:
      "Atún baby en aceite de oliva de Van Camps, elaborado con los mejores ingredientes para garantizar su frescura y sabor. Disfruta de este delicioso atún en ensaladas, sandwiches y platos gourmet.",
  },
  {
    id: "oil",
    brand: "GOURMET",
    name: "Aceite Familia Multiusos",
    img: oil,
    categories: ["Alimentos básicos", "GOURMET"],
    variants: [
      {
        quantity: 900,
        unit: "ml",
        price: 16280,
        is_outstanding: true,
        stock: 200,
      },
    ],
    description:
      "Aceite de oliva extra virgen Gourmet, perfecto para todas tus necesidades culinarias. Su sabor suave y aroma fresco realzarán el sabor de tus platillos. Úsalo para cocinar, aderezar ensaladas o sumergir pan fresco. Una opción saludable y deliciosa.",
  },
];

export const cartProducts: CartProductWhitId[] = [];

export const routes: Routes = {
  "/": "Inicio",
  "/products": "Lista de productos",
  "/product": "Lista de productos",
};

export const USER_EMPTY: RegisterUser = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "client",
};
export const PROD_EMPTY: ProductForm = {
  brand: "",
  name: "",
  img: placeholder,
  quantity: 0,
  unit: "",
  price: 0,
  is_outstanding: true,
  stock: 0,
  description: "",
  categories: "",
};

export const PROD_VOID: product = {
  id: "",
  brand: "",
  name: "",
  img: placeholder,
  variants: [
    {
      quantity: 0,
      unit: "",
      price: 0,
      is_outstanding: true,
      stock: 0,
    },
  ],
  description: "",
  categories: [],
};

export const LOGIN_EMPTY: AuthForm = {
  email: "",
  password: "",
};

export const AUTH_EMPTY: userAuth = {
  name: "",
  email: "",
  role: "client",
};

export const USERS_DEFAULT: UserWithId[] = [
  {
    id: "1",
    name: "Admin",
    lastname: "Admin",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
  },
  {
    id: "2",
    name: "John",
    lastname: "Doe",
    email: "user@gmail.com",
    password: "user",
    role: "client",
  },
];
