import { FC, isValidElement } from "react";
import { login, signup } from "./actions";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-[100vh] flex jusify-center items-center">
      <form className="flex flex-col gap-2 w-[20vw] m-auto p-10 bg-gray-200 rounded-lg shadow-lg">
        <input
          name="email"
          required
          type="email"
          className="outline-none border-gray-200 w-full border-[2px] rounded-lg p-2 "
        />
        <input
          name="password"
          required
          type="password"
          className="outline-none border-gray-200 w-full border-[2px] rounded-lg p-2 "
        />
        <button formAction={login} className="bg-blue-300 p-2 rounded-lg">
          Login in
        </button>
        <button formAction={signup} className="bg-blue-300 p-2 rounded-lg">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default page;
