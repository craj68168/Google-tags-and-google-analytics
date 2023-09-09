import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../components/Navbar.module.css";
const GTM_ID = "GTM-WFSV3X76";

const About = () => {
  return (
    <>
      <Navbar />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }}
      />
      <Head>
        <title>About Us</title>
      </Head>
      <div className={styles.main}>
        <h2>About Us</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
            veniam inventore ipsum similique quos animi ipsa asperiores fuga
            dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis deleniti rem aspernatur odit hic autem neque repellat
            alias? Debitis veniam inventore ipsum similique quos animi ipsa
            asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis deleniti rem aspernatur odit hic autem
            neque repellat alias? Debitis veniam inventore ipsum similique quos
            animi ipsa asperiores fuga dolor id.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
