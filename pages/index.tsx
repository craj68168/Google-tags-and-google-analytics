"use client";
import Head from "next/head";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 760px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;
export default function Home() {
  return (
    <>
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
