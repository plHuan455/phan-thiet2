import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import ContactForm from 'components/templates/ContactForm';
import { ContactFormType } from 'services/forms/types';
import { getBlockData } from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';

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
  const method = useForm<ContactFormType>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });
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
