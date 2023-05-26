import TopScroll from "./TopScroll";

const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
      <TopScroll />
    </>
  );
}

export default Layout;
