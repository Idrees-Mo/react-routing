import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";

// routes
const routes = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

// App component
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
