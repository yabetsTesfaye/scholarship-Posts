import { Outlet } from "react-router-dom";
import Headers from "../components/Header";
export default function MainLayOut() {
  return (
    <div>
      <Headers />
      <Outlet />
    </div>
  );
}
