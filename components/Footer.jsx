function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span>EI</span>
                </a>
                <h4>КАФЕДРА ЕЛЕКТРИЧНОЇ ІНЖЕНЕРІЇ</h4>
                <p>
                  ТЕРНОПІЛЬСЬКИЙ НАЦІОНАЛЬНИЙ ТЕХНІЧНИЙ УНІВЕРСИТЕТ ІМЕНІ ІВАНА
                  ПУЛЮЯ
                </p>
                <div className="social-links d-flex  mt-3">
                  <a
                    href="https://scholar.google.com.ua/citations?user=IKmXP1oAAAAJ"
                    className="google"
                  >
                    <i className="bi bi-google"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/kaf.ei.tntu/"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCkRiBJEjnihxVqZvl5lAv_A"
                    className="youtube"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                {/* <h4>Сторінки сайту</h4> */}

                <ul>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Головна</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Організатори</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Програма</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Умови участі</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Сайт КАФЕДРИ</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                {/* <h4>Архів</h4> */}
                <ul>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Архів 2014</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Архів 2015</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Архів 2019</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Наші контакти</h4>
                <address>
                  <a
                    href="https://goo.gl/maps/qJNoGqTf4UAnhGhK9"
                    target="_blank"
                  >
                    м. Тернопіль, вул. Микулинецька 46
                    <br /> корпус ТНТУ № 7, кімн. 403
                  </a>
                </address>

                <p>
                  <strong>Телефон: </strong>
                  <a href="tel:+380352435114">(0352) 43-51-14</a>
                  <br />
                  <strong>Email: </strong>
                  <a href="kaf_ei@tu.edu.te.ua">kaf_ei@tu.edu.te.ua</a>
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
  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
