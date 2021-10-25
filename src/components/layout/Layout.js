import layclass from "./Layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={layclass.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
