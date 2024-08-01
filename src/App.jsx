import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Create from "./pages/Create";
import Update from "./pages/Update";

const arrayRouter = [
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/Create",
    element: <Create />,
  },
  {
    path: "/Update",
    element: <Update />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
