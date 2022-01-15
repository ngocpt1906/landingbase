import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './style.module.scss';
import ScrollDown from '../LottieIcons/ScrollDown';

const ReactTypingEffect = dynamic(
  () => import('react-typing-effect'),
  {
    ssr: false
  }
)

const HeadBlock = ({ compact, text }) => {
  return (
    <div className={compact ? `${styles.WrapHeadBlock} ${styles.Compact}` : styles.WrapHeadBlock}>
      <ReactTypingEffect
        speed={200}
        typingDelay={1000}
        text={["TechSearch"]}
        // staticText="Tech Search"
        className={styles.HeadText}
      />
      <div className={styles.FirstTitle}>{text}</div>
      {!compact && <div className={styles.SecondaryTitle}>
        <ScrollDown></ScrollDown>
      </div>}
      {!compact && <div className={styles.Corner}></div>}
    </div>
  );
}

export default HeadBlock;