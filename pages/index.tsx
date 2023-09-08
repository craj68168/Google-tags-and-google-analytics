"use client";
import Head from "next/head";
import styled from "styled-components";
import Script from "next/script";
const GTM_ID = "GTM-WFSV3X76";

const Wrapper = styled.div`
  max-width: 760px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;
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
      <Wrapper>
        <h2>Welcome to Gaming Vibes</h2>
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
      </Wrapper>
    </>
  );
}
