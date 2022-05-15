/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import React from 'react';
import styles from './styles';

export function GlobalStyles() {
  return <Global styles={styles.rootStyles} />;
}
