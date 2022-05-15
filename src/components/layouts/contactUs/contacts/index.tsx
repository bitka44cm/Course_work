/** @jsxImportSource @emotion/react */

import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Box } from '@mui/material';

import styles from './styles';

interface HomeProps {}

function Contacts(props: HomeProps) {
  return (
    <Box css={styles.contactsWrapperStyle}>
      <Box css={styles.contactsStyle}>
        <Box css={styles.contactInfoContainerStyle}>
          <Box>
            <HomeOutlinedIcon />
          </Box>
          <Box css={styles.homeAddressContainerStyle}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae consequuntur
              officiis facilis odit ipsum quo ullam repellat nesciunt, nostrum impedit libero
              incidunt, minima est! Laudantium soluta minus porro corrupti!
            </p>
          </Box>
        </Box>
        <Box css={styles.contactInfoContainerStyle}>
          <Box>
            <EmailIcon />
          </Box>
          <Box css={styles.emailContainerStyle}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae consequuntur
              officiis facilis odit ipsum quo ullam repellat nesciunt, nostrum impedit libero
              incidunt, minima est! Laudantium soluta minus porro corrupti!
            </p>
          </Box>
        </Box>
        <Box css={styles.contactInfoContainerStyle}>
          <Box>
            <PhoneOutlinedIcon />
          </Box>
          <Box css={styles.phoneContainerStyle}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae consequuntur
              officiis facilis odit ipsum quo ullam repellat nesciunt, nostrum impedit libero
              incidunt, minima est! Laudantium soluta minus porro corrupti!
            </p>
          </Box>
        </Box>
      </Box>
      <Box css={styles.socialIconsContainerStyle}>
        <Box css={styles.socialIconContainerStyle}>
          <a
            data-testid="contacts_social-icon"
            css={styles.socialIconStyle}
            href="https://www.facebook.com"
            rel="noreferrer"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 64 64">
              <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z" />
            </svg>
          </a>
        </Box>
        <Box css={styles.socialIconContainerStyle}>
          <a
            data-testid="contacts_social-icon"
            css={styles.socialIconStyle}
            href="https://twitter.com"
            rel="noreferrer"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 64 64">
              <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M44.927,26.226 c0.012,0.271,0.017,0.543,0.017,0.816c0,8.34-6.189,17.958-17.51,17.958c-3.476,0-6.711-1.045-9.435-2.835 c0.482,0.059,0.973,0.089,1.469,0.089c2.884,0,5.538-1.009,7.644-2.702c-2.693-0.051-4.966-1.877-5.749-4.384 c0.375,0.072,0.761,0.112,1.157,0.112c0.562,0,1.107-0.077,1.622-0.221c-2.816-0.579-4.937-3.13-4.937-6.188 c0-0.027,0-0.052,0-0.079c0.83,0.472,1.779,0.756,2.788,0.789c-1.651-1.131-2.737-3.063-2.737-5.252 c0-1.158,0.303-2.242,0.832-3.175c3.037,3.819,7.571,6.333,12.686,6.595c-0.104-0.46-0.159-0.943-0.159-1.438 c0-3.485,2.755-6.311,6.154-6.311c1.77,0,3.369,0.767,4.492,1.994c1.403-0.284,2.721-0.809,3.909-1.532 c-0.459,1.474-1.434,2.711-2.706,3.492C45.71,23.8,46.896,23.462,48,22.959C47.175,24.224,46.131,25.335,44.927,26.226z" />
            </svg>
          </a>
        </Box>
        <Box css={styles.socialIconContainerStyle}>
          <a
            data-testid="contacts_social-icon"
            css={styles.socialIconStyle}
            href="https://www.instagram.com"
            rel="noreferrer"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 24 24">
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
            </svg>
          </a>
        </Box>
        <Box css={styles.socialIconContainerStyle}>
          <a
            data-testid="contacts_social-icon"
            css={styles.socialIconStyle}
            href="https://by.linkedin.com"
            rel="noreferrer"
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
