import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
