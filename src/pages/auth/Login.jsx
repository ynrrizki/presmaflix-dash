import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-primary shadow-md rounded w-96 px-10 pt-6 pb-8 mb-4">
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-slate-400 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-slate-400 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
          <p className="mt-6">
            New on our platform?{" "}
            <Link to="#" className="text-red-400 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
