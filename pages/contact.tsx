import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navbar from "../components/Navbar";
const GTM_ID = "GTM-WFSV3X76";
import styles from "../components/Navbar.module.css";
const Contact = () => {
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
        <title>Contact Us</title>
      </Head>
      <div className={styles.main}>
        <h2>Google Analytics</h2>
        <div>
          <p>
            Google Analytics is a web analytics service provided by Google. It
            allows website owners to track and analyze various aspects of their
            website's performance and user behavior. Traditional Google
            Analytics has been widely used and is the most common version of the
            tool available at the time of my last update. When Google Analytics
            provides you with the code and if you implement your code to your
            website, Google Analytics as a tool gets connected with your
            websites, and your website tracking-related information can get
            access to Google Analytics. so you can create an account on Google
            Analytics after that you get the js code from it and implement that
            js code into the website head section. it will help to get access
            and track to every page of the websites.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
