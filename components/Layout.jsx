const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
