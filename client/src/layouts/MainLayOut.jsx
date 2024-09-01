import { Outlet } from "react-router-dom";
export default function MainLayOut() {
  return (
    <div>
      <h1>Navbar Section</h1>
      <Outlet />
    </div>
  );
}
