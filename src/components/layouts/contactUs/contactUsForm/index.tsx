/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab/';
import { setSuccessMessage } from '../../../../redux/slices/contacts';
import { RootState } from '../../../../redux/store';
import { Input } from '../../../common';
import { CustomPhoneInput } from '../../../common/phoneNumberInput';
import { CustomSelect } from '../../../common/select';
import { TextArea } from '../../../common/textArea';
import { validationSchema } from '../../../../utils/validators/contactUsForm/formValidator';
import SuccessModal from './successModal';

import styles from './styles';

interface HomeProps {}

const subjectOptions = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
];

interface ContactForm {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

function ContactUsForm(props: HomeProps) {
  const [activeModal, setActiveModal] = useState(false);

  const dispatch = useDispatch();

  const successMsg = useSelector((state: RootState) => state.contactsReducer.message);

  const formOptions = {
    defaultValues: {
      name: '',
      number: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(validationSchema),
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm(formOptions);

  const onSubmit: SubmitHandler<ContactForm> = async (formData): Promise<void> => {
    dispatch(setSuccessMessage({ message: 'Your message has been sent!' }));
    setActiveModal(true);
  };

  const handleClose = () => {
    setActiveModal(false);
  };

  return (
    <Box css={styles.contactUsFormWrapperStyle}>
      <Box>
        <h2>Contact us</h2>
      </Box>
      <Box css={styles.contactUsInputsWrapperStyle}>
        <form css={styles.contactUsFormStyle} onSubmit={handleSubmit(onSubmit as any)}>
          <Input
            placeholder="Name"
            variant="outlined"
            label="Name"
            name="name"
            errorMsg={errors.name?.message}
            register={register}
          />
          <Input
            placeholder="Email"
            variant="outlined"
            label="Email"
            name="email"
            errorMsg={errors.email?.message}
            register={register}
          />
          <CustomPhoneInput
            placeholder="Number"
            name="number"
            helperText={errors.number?.message}
            control={control as any}
            dataTestId="contact_phone-number"
          />
          <CustomSelect
            placeholder="Subject"
            options={subjectOptions}
            label="Choose subject"
            name="subject"
            helperText={errors.subject?.message}
            required
            control={control as any}
            id="subject"
            dataTestId="contact_subject-select"
            boxStyles={styles.contactSelecContainerStyle}
          />
          <TextArea
            label="Message"
            name="message"
            textAreaStyles={styles.contactTextAreaStyle}
            placeholder="Message ..."
            errorMsg={errors.message?.message}
            register={register}
          />
          <Box css={styles.contactButtonContainerStyle}>
            <LoadingButton
              data-testid="contact_submit-btn"
              css={styles.contactButtonStyle}
              variant="contained"
              type="submit"
              disabled={
                !dirtyFields.name ||
                !dirtyFields.email ||
                !dirtyFields.number ||
                !dirtyFields.subject ||
                !dirtyFields.message
              }>
              Send it
            </LoadingButton>
          </Box>
          {activeModal && (
            <SuccessModal
              successMsg={successMsg}
              setActiveModal={setActiveModal}
              open={activeModal}
              onClose={handleClose}
            />
          )}
        </form>
      </Box>
    </Box>
  );
}

export default ContactUsForm;
