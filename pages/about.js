import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abput</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>I am about page, youo</p>
    </div>
  );
}
