'use client';

import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from './Book.module.css';

export default function Book({ pages }) {
  return (
    <HTMLFlipBook width={400} height={600} className={styles.book} showCover>
      {pages.map((PageComponent, i) => (
        <div key={i} className={styles.page}>
          <PageComponent />
        </div>
      ))}
    </HTMLFlipBook>
  );
}