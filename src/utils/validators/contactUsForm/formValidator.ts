import * as Yup from 'yup';
import { maxNameLength } from '../../../constants/constants';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .max(maxNameLength, 'Name must be no more than 20 characters'),
  number: Yup.string().required('Number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});
