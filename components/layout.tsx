import Head from "next/head";
import React from "react";
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Header from "./header";

interface ILayout {
  children?: JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.17.0/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <title>Matinka</title>
        <meta
          name="description"
          content="Yoga related blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer className={styles.footer}>
            <Image src="/footer-logo.svg" alt="Vercel Logo" width={144} height={32} />
      </footer>
    </div>
  );
};

export default Layout;
