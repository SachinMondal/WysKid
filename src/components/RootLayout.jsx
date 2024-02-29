import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function RootLayout() {
  return (
    <div className="relative Parent h-screen w-screen flex items-center justify-center ">
      <Sidebar />
      <Outlet />
    </div>
  );
}
