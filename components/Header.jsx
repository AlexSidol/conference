import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}

          <Image src="/logo-white.png" alt="logo" width={100} height={80} />
        </Link>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/" className="active">
                Головна
              </Link>
            </li>
            <li>
              <Link href="organizers">Організатори</Link>
            </li>
            <li>
              <Link href="program">Програма</Link>
            </li>
            <li>
              <Link href="participation-terms">Умови участі</Link>
            </li>
            <li>
              <Link href="archive">Архів</Link>
            </li>
            <li>
              <Link href="contacts">Контакти</Link>
            </li>
          </ul>
        </nav>
        {/* <!-- .navbar --> */}
      </div>
    </header>
  );
}

export default Header;
