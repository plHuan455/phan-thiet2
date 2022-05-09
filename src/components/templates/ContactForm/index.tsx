import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormProvider, UseFormReturn, Controller } from 'react-hook-form';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/TextArea';

export type ContactFormType = {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  content?: string;
}

interface ContactFormProps {
  form?: {
    namePlaceholder?: string;
    addressPlaceholder?: string;
    phonePlaceholder?: string;
    emailPlaceholder?: string;
    contentPlaceholder?: string;
    btnText?: string;
  }
  titleForm?: string;
  descriptionForm?: string;
  method: UseFormReturn<ContactFormType>;
  loading?: boolean;
  handleSubmit: (data: ContactFormType) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  titleForm,
  descriptionForm,
  form,
  method,
  loading,
  handleSubmit,
}) => (
  <div className="t-contactForm u-pt-lg-40 u-pt-md-30 u-pb-lg-80 u-pb-md-60 u-pt-20 u-pb-40">
    <Container>
      <Heading type="h4" modifiers={['700', 's015', 'gradientGreen', 'center']} content={titleForm} />
      <div className="t-contactForm_description">
        <Text modifiers={['11x18', 'center', 'davyGrey']} content={descriptionForm} />
      </div>
      <FormProvider {...method}>
        <form className="o-consultancy_form" onSubmit={method.handleSubmit(handleSubmit)} noValidate>
          <Row className="u-mt-md-16 u-ml-negative-16 u-mr-negative-16">
            <Col md={12} className="u-mt-16 u-pl-16 u-pr-16">
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
            <Col md={6} className="u-mt-16 u-pl-16 u-pr-16">
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
            <Col md={6} className="u-mt-16 u-pl-16 u-pr-16">
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
            <Col md={12} className="u-mt-16 u-pl-16 u-pr-16">
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
    </Container>
  </div>
);

ContactForm.defaultProps = {
  form: undefined,
  titleForm: undefined,
  descriptionForm: undefined,
  loading: undefined,
};

export default ContactForm;
