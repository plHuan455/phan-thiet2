import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/TextArea';
import CustomModal from 'components/molecules/Modal';

export type RegisterFormType = {
  name?: string;
  phone?: string;
  email?: string;
  content?: string;
}

interface PopupRegisterProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  method: UseFormReturn<RegisterFormType>;
  loading?: boolean;
  handleSubmit: (data: RegisterFormType) => void;
  handleClose?: () => void;
  form?: {
    namePlaceholder?: string;
    phonePlaceholder?: string;
    emailPlaceholder?: string;
    contentPlaceholder?: string;
    btnText?: string;
  }
}

const PopupRegister: React.FC<PopupRegisterProps> = ({
  isOpen,
  title,
  description,
  method,
  loading,
  handleSubmit,
  handleClose,
  form,
}) => (
  <CustomModal isOpen={isOpen} handleClose={handleClose} modifiers="register">
    <div className="popupRegister">
      <div className="popupRegister_title">
        <Heading type="h4" modifiers={['700', 'fontOswald', 's015', 'gradientGreen', 'center', 'uppercase']} content={title} />
      </div>
      <div className="popupRegister_desc u-mt-8">
        <Text modifiers={['11x18', '400', 'raisinBlack', 'center']} content={description} />
      </div>
      <FormProvider {...method}>
        <form
          noValidate
          onSubmit={method.handleSubmit(handleSubmit)}
          className="popupRegister_form u-mt-10 u-mt-md-40"
        >
          <Row className="u-ml-negative-16 u-mr-negative-16">
            <Col lg={12} className="u-mt-16 u-pl-16 u-pr-16">
              <Controller
                name="name"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={form?.namePlaceholder}
                    error={error?.message}
                  />
                )}
              />
            </Col>
            <Col lg={6} className="u-mt-16 u-pl-16 u-pr-16">
              <Controller
                name="phone"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={form?.phonePlaceholder}
                    error={error?.message}
                  />
                )}
              />
            </Col>
            <Col lg={6} className="u-mt-16 u-pl-16 u-pr-16">
              <Controller
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={form?.emailPlaceholder}
                    error={error?.message}
                  />
                )}
              />
            </Col>
            <Col lg={12} className="u-mt-16 u-pl-16 u-pr-16">
              <Controller
                name="content"
                render={({ field, fieldState: { error } }) => (
                  <TextArea
                    {...field}
                    value={field.value || ''}
                    rows={4}
                    placeholder={form?.contentPlaceholder}
                    error={error?.message}
                  />
                )}
              />
            </Col>
          </Row>
          <div className="u-mt-24 d-flex justify-content-center">
            <Button loading={loading} variant="primary-green" type="submit">{form?.btnText}</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  </CustomModal>
);

PopupRegister.defaultProps = {
  title: '',
  description: '',
  handleClose: undefined,
  form: undefined,
  loading: false,
};

export default PopupRegister;
