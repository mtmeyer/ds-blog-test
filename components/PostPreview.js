import React from "react";
import Link from "next/link";

import styles from "./PostPreview.module.scss";
const PostPreview = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref={true}>
      <div className={styles.container}>
        <h2>{post.heading}</h2>
        <p>Some sort of epic description</p>
      </div>
    </Link>
  );
};

export default PostPreview;
