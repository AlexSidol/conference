import { Html, Head, Main, NextScript, Script } from 'next/document';
// import '@/styles/styles.css'

export default function Document() {
  return (
    <Html lang="uk">
      <Head>

        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        {/* <link href=" images/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" /> */}

        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />



      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Vendor JS Files */}
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
        {/* <script src="assets/vendor/aos/aos.js" defer></script> */}
        <script src="/assets/vendor/glightbox/js/glightbox.min.js" defer></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js" defer></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" defer></script>
        <script src="/assets/vendor/php-email-form/validate.js" defer></script>

        {/* Template Main JS File */}
        <script src="/assets/js/main.js" defer></script>


      </body>
    </Html>
  )
}
