import { Outlet } from "react-router-dom";
import AppBars from "../AppBars/AppBars";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <AppBars />

      <Outlet />

      <Footer />
    </>
  );
}
