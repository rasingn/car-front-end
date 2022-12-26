import Footer from "./Footer";
import Menu from "./Menu";
import Counter from '../Components/Counter'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>
        <Menu/>   
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
