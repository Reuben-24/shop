import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Showcase from "./components/Showcase";
import Browse from "./components/Browse";
import Cart from "./components/Cart";
import Product from "./components/Product";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Showcase />},
      { path: "browse", element: <Browse /> },
      { path: "product/:productId", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ]
  },
];

export default routes;