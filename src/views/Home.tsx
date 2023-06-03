import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);

  return (
    <div className="flex flex-col justify-center items-center mx-96">
      <h1 className="text-2xl font-bold mb-4">Esta el la pagina de inicio.</h1>
      <div className="mb-4 px-6 text-justify">
        Este proyecto utiliza el sdk de Auth0 para administrar login, logout y
        registro de usuario, ademas de aplicar validaciones de permisos tanto
        para las rutas establecidad en con react-router-dom como en las
        peticiones que se realizaran a una API Rest hecha con Spring Boot.
      </div>
      {isAuthenticated ? (
        <div className="text-green-500 font-semibold">
          Has iniciado sesion como {user?.name}{" "}
        </div>
      ) : (
        <div className="text-red-500 font-semibold">
          Actualmente no has iniciado sesion
        </div>
      )}
    </div>
  );
};

export default Home;
