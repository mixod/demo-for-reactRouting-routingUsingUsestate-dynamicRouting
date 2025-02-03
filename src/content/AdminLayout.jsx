import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <div className="h-[100px] bg-sky-200">NAV</div>
      <div className="flex h-[calc(100vh-100px)]">
        <div className="w-[200] bg-amber-500">SIde nav</div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
