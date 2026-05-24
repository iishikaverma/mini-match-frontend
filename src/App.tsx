import "./index.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Body from "./pages/Body";
import AddCandidate from "./pages/AddCandidate";

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <Body />
  },

  {
    path: "/add-candidate",
    element: <AddCandidate />
  }

]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;