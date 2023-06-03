import { useAuth0 } from "@auth0/auth0-react";

const RegistroButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
      onClick={() => loginWithRedirect()}
    >
      Sign up
    </button>
  );
};

export default RegistroButton;
