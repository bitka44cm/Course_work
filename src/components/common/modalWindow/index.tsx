/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React, { ReactElement } from 'react';
import { styles } from './styles';

interface ModalProps {
  children: ReactElement | string;
  closeModal?: () => void;
  modalStyleZ?: SerializedStyles;
}

export function Modal({ children, closeModal, modalStyleZ = styles.modalStyle }: ModalProps) {
  return (
    <div css={modalStyleZ} onClick={closeModal}>
      <div css={styles.modalDialogStyle} onClick={(e) => e.stopPropagation()}>
        <div css={styles.modalBodyStyle}>
          <div css={styles.modalContentStyle}>{children}</div>
        </div>
      </div>
    </div>
  );
}
