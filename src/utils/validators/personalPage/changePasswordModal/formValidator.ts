import * as Yup from 'yup';
import { minPasswordLength } from '../../../../constants/constants';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(minPasswordLength, 'Password must be at least 8 characters')
    .required('Old password is required'),
  newPassword: Yup.string()
    .min(minPasswordLength, 'Password must be at least 8 characters')
    .notOneOf([Yup.ref('password'), null], 'You cant use your current password as new')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Passwords don't match")
    .required('Please confirm your password'),
});
