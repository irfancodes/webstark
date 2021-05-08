import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Webstark Informatics</title>
        <meta
          name='description'
          content='Let your business fly with over top notch app services'
        />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <main>
        {/* Navbar */}
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.Navbar}>
          <div className={styles.Logo}>
            <Image src='/logo.svg' alt='Vercel Logo' width={60} height={37} />
          </div>
          <div className={styles.middleNav}>
            <a href='#' className={styles.active}>
              Home{" "}
            </a>
            <a href='/#products'>Products </a>
            <a href='/#what-we-do'>What We Do? </a>
            <a href='/blog'>Blog </a>
          </div>
          <div className={styles.rightNav}>
            <a href='/new/project' className={styles.cta}>
              Develop with us
            </a>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.circle_dark}></div>
          <div className={styles.circle_outline}></div>

          <h1>The best Product Experience Starts Here</h1>
          <p>
            Traditional development is slow. So Do you Need an application with
            best interface? Give your business a chance of accepting new
            opportunities
          </p>
          <button className={styles.cta_btn}>Get Started</button>
        </div>
      </main>
    </div>
  );
}
