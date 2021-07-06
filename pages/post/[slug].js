import React from "react";
import Head from "next/head";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { fetchPosts, fetchBlogPost } from "../../utils/Contentful";
import styles from "../../styles/Post.module.scss";
import Header from "../../components/Header";

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>DS Update Blog Test</title>
        <meta name="description" content="Test design system update blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showHomeLink />
      <main className={styles.main}>
        <h1>{post.fields.heading}</h1>
        {documentToReactComponents(post.fields.body, {
          renderNode: {
            // eslint-disable-next-line react/display-name
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
                alt={node.data.target.fields.description}
              />
            ),
          },
        })}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetchPosts();
  const posts = await res.map((post) => {
    return post.fields;
  });

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const folioPiece = await fetchBlogPost(params.slug);
  return {
    props: {
      post: folioPiece,
    },
  };
}
