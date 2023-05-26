import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const router = useRouter();
  const { pathname } = router;
  console.log("pathname", pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={
        scrollY > 100
          ? isOpen
            ? "header d-flex align-items-center fixed-top sticked page-index mobile-nav-active"
            : "header d-flex align-items-center fixed-top sticked"
          : isOpen
          ? "header d-flex align-items-center fixed-top page-index mobile-nav-active"
          : "header d-flex align-items-center fixed-top"
      }
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}

          <Image src="/logo-white.png" alt="logo" width={100} height={80} />
        </Link>
        <i
          onClick={mobileToggle}
          className={
            isOpen
              ? "mobile-nav-toggle mobile-nav-show bi bi-list d-none"
              : "mobile-nav-toggle mobile-nav-show bi bi-list"
          }
        ></i>
        <i
          onClick={mobileToggle}
          className={
            isOpen
              ? "mobile-nav-toggle mobile-nav-hide bi bi-x"
              : "mobile-nav-toggle mobile-nav-hide bi bi-x d-none "
          }
        ></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="/"
                className={pathname === "/" ? "active" : null}
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="organizers"
                className={pathname === "/organizers" ? "active" : null}
              >
                Організатори
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="program"
                className={pathname === "/program" ? "active" : null}
              >
                Програма
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="participation-terms"
                className={
                  pathname === "/participation-terms" ? "active" : null
                }
              >
                Умови участі
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="archive"
                className={pathname === "/archive" ? "active" : null}
              >
                Архів
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="contacts"
                className={pathname === "/contacts" ? "active" : null}
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        {/* <!-- .navbar --> */}
      </div>
    </header>
  );
}

export default Header;
