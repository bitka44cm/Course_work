/** @jsxImportSource @emotion/react */
import React, { InputHTMLAttributes } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormControl, FormHelperText } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import styles from './styles';

interface PhoneInputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helperText?: string;
  control: Control<any, object> | undefined;
  dataTestId: string;
  inputStyle?: any;
  buttonStyle?: any;
  dropdownStyle?: any;
  disabled?: boolean;
}

export const CustomPhoneInput = React.forwardRef<HTMLInputElement, PhoneInputPropsType>(
  (props, ref) => {
    const {
      name,
      helperText,
      control,
      dataTestId,
      inputStyle = {
        width: '100%',
        height: '60px',
        fontSize: '16px',
        paddingLeft: '48px',
        borderRadius: '5px',
      },
      buttonStyle = {
        borderRadius: '5px 0 0 5px',
      },
      dropdownStyle = {
        width: '300px',
      },
      disabled,
    } = props;
    return (
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl fullWidth css={styles.wrapperStyles}>
            <ReactPhoneInput
              data-testid={dataTestId}
              country="by"
              onChange={onChange}
              value={value}
              placeholder="Type your phone here"
              inputStyle={inputStyle}
              buttonStyle={buttonStyle}
              dropdownStyle={dropdownStyle}
              disabled={disabled}
            />
            <FormHelperText css={styles.errorsStyles} error={!!error}>
              {helperText}
            </FormHelperText>
          </FormControl>
        )}
      />
    );
  },
);
