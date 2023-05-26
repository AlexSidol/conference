import Link from "next/link";
import { useEffect, useState } from "react";

function TopScroll() {
  const [scrollY, setScrollY] = useState(0);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    scrollY > 150 && (
      <Link
        onClick={handleClick}
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center active"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    )
  );
}

export default TopScroll;
