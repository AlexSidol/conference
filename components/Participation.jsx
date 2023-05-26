function Participation() {
  return (
    <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Умови участі</h2>
          <h3 className="titleDescription">
            Для того щоб узяти учать у конференції оберіть актуальну тему
            виступу і оформить тезу згідно з вимогами. Також заповніть заявку на
            участь і оплатіть загальний внесок. Після чого заповнену заявку і
            копію квитанції відправте нам на пошту універ@gmail.com
          </h3>
        </div>

        <div className="row gy-5">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon flex-shrink-0">
              <i
                className="bi bi-brightness-high"
                style={{ color: "#f5cf13" }}
              ></i>
            </div>
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Напрями та секції
                </a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon flex-shrink-0">
              <i
                className="bi bi-card-checklist"
                style={{ color: "#15a04a" }}
              ></i>
            </div>
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Оформлення тез
                </a>
              </h4>
              <p className="description">
                Тези повині бути оформленні згідно загалих вимог які описані в
                документації... Тези повині бути оформленні згідно загалих вимог
                які описані в документації... Тези повині бути оформленні згідно
                загалих вимог які описані в документації... Тези повині бути
                оформленні згідно загалих вимог які описані в документації...
                Тези повині бути оформленні згідно загалих вимог які описані в
                документації...Тези повині бути оформленні згідно загалих вимог
                які описані в документації...Тези повині бути оформленні згідно
                загалих вимог які описані в документації...Тези повині бути
                оформленні згідно загалих вимог які описані в документації...
                оформленні згідно загалих вимог які описані в документації...
                оформленні згідно загалих вимог які описані в документації...
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-briefcase" style={{ color: "#f57813" }}></i>
            </div>
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Заявка та внесок
                </a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Participation;
