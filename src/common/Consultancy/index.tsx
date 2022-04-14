import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormConsultancy } from 'components/organisms/Consultancy';
import ConsultancyTemplate, { ConsultancyPropsInput } from 'components/templates/Consultancy';
import { schemasConsultancyForm } from 'utils/schemas';

const Consultancy: React.FC<ConsultancyPropsInput> = ({
  title,
  layer,
  form,
}) => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  return (
    <ConsultancyTemplate
      title={title}
      layer={layer}
      form={{
        ...form,
        method,
        handleSubmit: (data) => console.log(data),
      }}
    />
  );
};

Consultancy.defaultProps = {};

export default Consultancy;
