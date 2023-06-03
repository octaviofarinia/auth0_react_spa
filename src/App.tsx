import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import AdminPage from "./views/AdminPage";
import ClientPage from "./views/ClientPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="cliente" element={<ClientPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
