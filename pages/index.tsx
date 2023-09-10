"use client";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import styles from "../components/Navbar.module.css";
const GTM_ID = "GTM-WFSV3X76";

export default function Home() {
  return (
    <>
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
        <title>Home Page</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h2>GTM and GA4 </h2>
        <div>
          <p>
            Google Tag Manager is a tag management system (TMS) that allows us
            to quickly and easily update measurement codes and related code
            fragments collectively known as tags on your website or mobile apps.
            With the help of GTM, we can set the tracking on the website, and
            mobile apps as well, and server-side tracking can be also possible.
            Everything is in one place, as we can easily understand what tags
            are firing at what conditions. If we watch the GTM interface, it
            shows the Google Analytics code that fires on all website pages.
            Similarly, the Google ads conversion code is fired on the Contact Us
            page. you can easily understand which tags are fired and what is the
            trigger of those tags or in which condition the tags are fired. So
            for that, you can easily edit or update the tags as per your
            requirement.
          </p>
        </div>
      </div>
    </>
  );
}
