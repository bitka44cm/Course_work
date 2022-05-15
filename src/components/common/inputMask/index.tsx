/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseTextFieldProps, Box } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import styles from './styles';

interface InputProps extends BaseTextFieldProps {
  name: string;
  control: Control<any, object>;
  mask: string;
  errorMsg?: string;
  values?: string;
}

export const InputWithMask = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, mask, control, errorMsg, values, ...props }, ref) => {
    return (
      <Box css={styles.wrapperStyles}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              name={name}
              mask={mask}
              onChange={onChange}
              value={value}
              style={{ height: '72px', padding: '10px' }}
            />
          )}
        />
      </Box>
    );
  },
);
