import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import PostPreview from "../components/PostPreview";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DS Update Blog Test</title>
        <meta name="description" content="Test design system update blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/AP_Logo.svg" alt="Auspost logo" width={32} height={32} />
        <h1>DS Blog Test</h1>
      </header>
      <main className={styles.main}>
        <PostPreview title="Test blog post" />
      </main>
    </div>
  );
}
