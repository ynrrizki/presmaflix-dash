import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#131313] h-screen text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
