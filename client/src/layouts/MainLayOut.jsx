import { Outlet } from "react-router-dom";
import Headers from "../components/Header";
import FooterComponent from "../components/Footer";
export default function MainLayOut() {
  return (
    <div>
      <Headers />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
