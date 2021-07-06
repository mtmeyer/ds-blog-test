import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

export default function Header({ showHomeLink = false }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image src="/AP_Logo.svg" alt="Auspost logo" width={32} height={32} />
        <h1>DS Blog Test</h1>
      </div>
      {showHomeLink ? (
        <Link href="/" passHref={true}>
          <div className={styles.homeLink}>Home</div>
        </Link>
      ) : (
        <></>
      )}
    </header>
  );
}
