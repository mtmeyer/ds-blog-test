import React from "react";
import Link from "next/link";

import styles from "./PostPreview.module.scss";
const PostPreview = ({ title }) => {
  return (
    <Link href="/" passHref={true}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>Some sort of epic description</p>
      </div>
    </Link>
  );
};

export default PostPreview;
