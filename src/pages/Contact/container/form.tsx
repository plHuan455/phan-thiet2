import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import ContactForm, { ContactFormType } from 'components/templates/ContactForm';
import { getBlockData } from 'utils/functions';

export interface FormProps {
  form?: {
    placeholderName?: string;
    placeholderAddress?: string;
    placeholderPhone?: string;
    placeholderEmail?: string;
    placeholderContent?: string;
    button?: string;
  };
  title: string;
  description?: string;
}

const Form: React.FC<SectionBlocks> = ({ blocks }) => {
  const method = useForm<ContactFormType>();
  const formBlock = useMemo(() => {
    const blockPageContent = getBlockData<FormProps>('form_contact', blocks);
    return {
      form: {
        addressPlaceholder: blockPageContent?.form?.placeholderAddress,
        contentPlaceholder: blockPageContent?.form?.placeholderContent,
        emailPlaceholder: blockPageContent?.form?.placeholderEmail,
        namePlaceholder: blockPageContent?.form?.placeholderName,
        phonePlaceholder: blockPageContent?.form?.placeholderPhone,
        btnText: blockPageContent?.form?.button,
      },
      titleForm: blockPageContent?.title,
      descriptionForm: blockPageContent?.description,
    };
  }, [blocks]);
  return <ContactForm method={method} handleSubmit={() => ''} {...formBlock} />;
};

export default Form;
