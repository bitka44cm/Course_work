/* eslint-disable @typescript-eslint/no-magic-numbers */
import * as yup from 'yup';
import { DateTime } from 'luxon';

const validateData = (data: string) => {
  const date = DateTime.fromFormat(data, 'dd/MM/yy');
  return date < DateTime.now() && !!DateTime.invalid;
};

const validateLength = (data: string, length: number) => {
  const valLengthWithOutDashes = data.replace(/[.*+?^${}()|[\]\\/_-\s]/g, '');
  return valLengthWithOutDashes.length === length;
};

export const validationSchema = yup.object().shape({
  dateOfBirth: yup.string().test('len', 'Invalid Date', (value) => {
    if (!value) return true;
    return validateLength(value!, 6) && validateData(value!);
  }),
  startingDay: yup.string().test('len', 'Invalid Date', (value) => {
    if (!value) return true;
    return validateLength(value!, 6) && validateData(value!);
  }),
  phoneNumber: yup.string().test('len', 'Invalid Phone number', (value) => {
    if (!value) return true;
    return validateLength(value!, 12);
  }),
  contactInfo: yup.string(),
});
