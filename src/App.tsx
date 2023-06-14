import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import AdminPage from "./views/AdminPage";
import ClientPage from "./views/ClientPage";
import ErrorPage from "./views/ErrorPage";
import ClientProfilePage from "./views/ClientProfilePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cliente" element={<ClientPage />} />
        <Route path="/cliente/perfil" element={<ClientProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
