import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";

// routes

const routes = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

// App component
function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
    </div>
  );
}

export default App;
