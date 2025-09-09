import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { Token } from "../typescripts/types";

export const Login: React.FC = () => {
  const database_url = import.meta.env.VITE_DATABASE_URL;
  // const database_url = "http://127.0.0.1:8000/";

  // USE STATE FOR LOGIN FORM DATA
  const [loginFormData, setLoginFormData] = useState<FormData>();

  // USE STATE FOR TOKEN
  const [token, setToken] = useState<string | null>(null);

  // USE STATE FOR IF USER IS LOGGED IN
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();
  const routeToHome = (userLoggedIn: boolean) => {
    if (userLoggedIn) {
      navigate("/home");
    }
  };

  const formDataToObjectLogin = (loginFormData: FormData) => {
    if (loginFormData)
      return {
        username: String(loginFormData.get("username")),
        password: String(loginFormData.get("password")),
      };
  };

  // LOGIN FUNCTION
  const loginUser = async (loginFormData: FormData) => {
    try {
      const response = await fetch(`${database_url}token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToObjectLogin(loginFormData)),
      });
      if (!response.ok) {
        throw new Error(`Username or Password incorrect!`);
      }
      setUserLoggedIn(true);
      const result: Token = await response.json();
      setToken(result.token);
      routeToHome(userLoggedIn);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (loginFormData) {
      loginUser(loginFormData);
    }
  }, [loginFormData]);

  return (
    <main className="flex flex-col items-center w-full h-[50vh] mt-5">
      <h1 className="text-2xl">Login</h1>
      <form action={setLoginFormData} onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-evenly w-[50%] h-full">
        <div className="w-[50%]">
          <h1 className="self-start">USERNAME</h1>
          <input name="username" autoComplete="off" autoFocus className="w-full h-10 bg-[#2A2A2A]" />
        </div>
        <div className="w-[50%]">
          <h1 className="self-start">PASSWORD</h1>
          <input name="password" autoComplete="off" className="w-full h-10 bg-[#2A2A2A]" />
          <Link to={"/signup"} className="w-[40%] self-end hover:bg-[#ec1f27] transition">
            Need an account?
          </Link>
        </div>
        <button type="submit" className="cursor-pointer w-[50%] h-10 hover:bg-[#ec1f27] transition">
          LOGIN
        </button>
      </form>
    </main>
  );
};
