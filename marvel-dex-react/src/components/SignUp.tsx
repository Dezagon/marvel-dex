import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
  const database_url = import.meta.env.VITE_DATABASE_URL;
  // const database_url = "http://127.0.0.1:8000/";

  // USE STATE FOR SIGN UP FORM DATA
  const [signUpFormData, setSignUpFormData] = useState<FormData>();

  // USE STATE WHEN ACCOUNT IS CREATED
  const [accountCreated, setAccountCreated] = useState<boolean>(false);

  const navigate = useNavigate();

  const routeToLogin = (accountCreated: boolean) => {
    if (accountCreated) {
      navigate("/");
    }
  };

  const formDataToObjectSignUp = (signUpFormData: FormData) => {
    if (signUpFormData) {
      return {
        username: String(signUpFormData.get("username")),
        password: String(signUpFormData.get("password")),
      };
    }
  };

  const createUser = async (signUpFormData: FormData) => {
    try {
      const response = await fetch(`${database_url}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToObjectSignUp(signUpFormData)),
      });
      if (!response.ok) {
        throw new Error(`Failed to create user!`);
      }
      setAccountCreated(true);
      routeToLogin(accountCreated);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (signUpFormData) {
      createUser(signUpFormData);
    }
  }, [signUpFormData]);

  // const handleSubmit = (event: Event, formData: FormData) => {
  //   event.preventDefault()
  //   formAction();
  return (
    <main className="flex flex-col items-center w-full h-[50vh] mt-5">
      <h1 className="text-2xl">Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSignUpFormData;
        }}
        className="flex flex-col items-center justify-evenly w-[50%] h-full"
      >
        <div className="w-[50%]">
          <h1 className="self-start">USERNAME</h1>
          <input name="username" autoComplete="off" autoFocus className="w-full h-10 bg-[#2A2A2A]" />
        </div>
        {/* <div className="w-[50%]">
          <h1 className="self-start">FULL NAME</h1>
          <input name="fullname" autoComplete="off" autoFocus className="w-full h-10 bg-[#2A2A2A]" />
        </div> */}
        <div className="w-[50%]">
          <h1 className="self-start">PASSWORD</h1>
          <input name="password" autoComplete="off" className="w-full h-10 bg-[#2A2A2A]" />
          <Link to={"/"} className="w-[40%] self-end hover:bg-[#ec1f27] transition">
            Have an account?
          </Link>
        </div>
        <button type="submit" className="cursor-pointer w-[50%] h-10 hover:bg-[#ec1f27] transition">
          SIGN UP
        </button>
      </form>
    </main>
  );
};
