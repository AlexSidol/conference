import Link from "next/link";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <span>EI</span>
                </Link>
                <h4>КАФЕДРА ЕЛЕКТРИЧНОЇ ІНЖЕНЕРІЇ</h4>
                <p>
                  ТЕРНОПІЛЬСЬКИЙ НАЦІОНАЛЬНИЙ ТЕХНІЧНИЙ УНІВЕРСИТЕТ ІМЕНІ ІВАНА
                  ПУЛЮЯ
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link
                    href="https://scholar.google.com.ua/citations?user=IKmXP1oAAAAJ"
                    className="google"
                  >
                    <i className="bi bi-google"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/kaf.ei.tntu/"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link href="https://www.instagram.com/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCkRiBJEjnihxVqZvl5lAv_A"
                    className="youtube"
                  >
                    <i className="bi bi-youtube"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                {/* <h4>Сторінки сайту</h4> */}

                <ul>
                  <li>
                    <i className="bi bi-dash"></i> <Link href="/">Головна</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="organizers">Організатори</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="program">Програма</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="participation-terms">Умови участі</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="tntu.org.ua">Сайт КАФЕДРИ</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                {/* <h4>Архів</h4> */}
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="#">Архів 2014</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="#">Архів 2015</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <Link href="#">Архів 2019</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Наші контакти</h4>
                <address>
                  <Link
                    href="https://goo.gl/maps/qJNoGqTf4UAnhGhK9"
                    target="_blank"
                  >
                    м. Тернопіль, вул. Микулинецька 46
                    <br /> корпус ТНТУ № 7, кімн. 403
                  </Link>
                </address>

                <p>
                  <strong>Телефон: </strong>
                  <Link href="tel:+380352435114">(0352) 43-51-14</Link>
                  <br />
                  <strong>Email: </strong>
                  <Link href="kaf_ei@tu.edu.te.ua">kaf_ei@tu.edu.te.ua</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Nova</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
  <!-- You can delete the links only if you purchased the pro version. -->
  <!-- Licensing information: https://bootstrapmade.com/license/ -->
  <!-- Purchase the pro version with working PHP/LinkJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ --> */}
              Designed by{" "}
              <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
