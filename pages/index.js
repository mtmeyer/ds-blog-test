import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import PostPreview from "../components/PostPreview";
import { fetchPosts } from "../utils/Contentful";
import Header from "../components/Header";

export default function Home({ posts }) {
  let blogPosts = posts.map((post) => (
    <PostPreview post={post} key={post.slug} />
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>DS Update Blog Test</title>
        <meta name="description" content="Test design system update blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{blogPosts}</main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchPosts();
  const posts = await res.map((post) => {
    return post.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
