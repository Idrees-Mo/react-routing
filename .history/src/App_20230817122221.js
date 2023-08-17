import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// routes
const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

// App component
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
