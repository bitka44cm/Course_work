/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React from 'react';
import { Box, StandardTextFieldProps, TextField } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './styles';

interface InputProps extends StandardTextFieldProps {
  errorMsg?: string;
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  maxRows?: number;
  register: UseFormRegister<FieldValues>;
  textAreaStyles?: SerializedStyles;
}

export const TextArea = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMsg, label, register, name, id, placeholder, rows, maxRows, textAreaStyles, ...props },
    ref,
  ) => {
    return (
      <Box css={styles.wrapperStyles}>
        <TextField
          css={textAreaStyles}
          id={id}
          label={label}
          placeholder={placeholder}
          multiline
          rows={rows}
          maxRows={maxRows}
          {...register(name)}
          error={!!errorMsg}
          helperText={errorMsg || null}
          {...props}
        />
      </Box>
    );
  },
);
