import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

// import styles from '@/styles/Home.module.css'
// import electricMan from '../public/assets/img/hero-img.png'

import { client } from "../lib/client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Archive from '@/components/Archive';
// const inter = Inter({ subsets: ['latin'] })

export default function Home({ fetchedData }) {

  console.log(fetchedData);

  const [swiperSlide, setSwiperSlide] = useState();
  useEffect(() => setSwiperSlide('swiper-slide'), []);


  return (
    <>
      <Head>
        <title>Конференція зі світлотехніки :: Головна сторінка</title>
        <meta name="description" content="Conference on lighting technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>

        {/* <!-- ======= Header ======= --> */}

        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <h2 data-aos="fade-up">Міжнародна<br />науково-технічна конференція</h2>
                <blockquote data-aos="fade-up" data-aos-delay="100">
                  <p>СВІТЛОТЕХНІКА Й ЕЛЕКТРОЕНЕРГЕТИКА:<br />
                    історія, проблеми, перспективи</p>
                </blockquote>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#about" className="btn-get-started">Get Started</a>
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Section --> */}

        <main>

          {/* <!-- ======= Why Choose Us Section ======= --> */}
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Why Choose Us</h2>

              </div>

              <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                <div className="col-xl-5 img-bg" style={{ backgroundImage: `url('assets/img/why-us-bg.jpg')` }}></div>
                {/* <div className="col-xl-7 slides  position-relative">

                  <div className="slides-1 swiper">
                    <div className="swiper-wrapper">

                     
                      <div className={`${swiperSlide}`}>
                        <div className="item">
                          <h3 className="mb-3">Let`s grow your business together</h3>
                          <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                        </div>
                      </div>
                    

                      
                      <div className={`${swiperSlide}`}>
                        <div className="item">
                          <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                          <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                          <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                        </div>
                      </div>
                  

                   
                      <div className={`${swiperSlide}`}>
                        <div className="item">
                          <h3 className="mb-3">Aliquid non alias minus</h3>
                          <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                          <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                        </div>
                      </div>
                  

                      <div className={`${swiperSlide}`}>
                        <div className="item">
                          <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
                          <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                          <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
                        </div>
                      </div>
                

                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div> */}

              </div >

            </div >
          </section >
          {/* <!-- End Why Choose Us Section --> */}

          {/* <!-- ======= Our Services Section ======= --> */}
          <section id="services-list" className="services-list">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Умови участі</h2>
                <h3 className="titleDescription">
                  Для того щоб узяти учать у конференції оберіть актуальну тему виступу і оформить тезу згідно з вимогами.
                  Також заповніть заявку на участь і оплатіть загальний внесок.
                  Після чого заповнену заявку і копію квитанції відправте нам на пошту універ@gmail.com
                </h3>
              </div>

              <div className="row gy-5">

                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{ color: "#f5cf13" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Напрями та секції</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" style={{ color: "#15a04a" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Оформлення тез</a></h4>
                    <p className="description">Тези повині бути оформленні згідно загалих вимог які описані в документації...</p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{ color: "#f57813" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Заявка та внесок</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                {/* <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon flex-shrink-0"><i className="bi bi-binoculars" style={{ color: "#15bfbc" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{ color: "#f5cf13" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                  <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" style={{ color: "#1335f5" }}></i></div>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div> */}


              </div>

            </div>
          </section>
          {/* <!-- End Our Services Section --> */}

          <Archive />

        </main >

      </div >
    </>
  )
}



export async function getStaticProps() {
  const fetchedData = await client.fetch(`*[_type == 'article']`);

  return {
    props: {
      fetchedData
    }
  };
}