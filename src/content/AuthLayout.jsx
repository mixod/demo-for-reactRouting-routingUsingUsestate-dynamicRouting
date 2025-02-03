import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[500px] bg-amber-300"></div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
