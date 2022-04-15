import React, { useState } from 'react';
import { FormProvider, Controller, UseFormReturn } from 'react-hook-form';

import Button, { Variants } from 'components/atoms/Button';
import Checkbox from 'components/atoms/Checkbox';
import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/TextArea';

export interface FormConsultancy {
  name: string
  phone: string
  email: string
  address: string
  content: string
  products: string[]
}

export interface CheckboxTypes {
  label: string,
  value: string,
}

export interface ConsultancyInfoTypes {
  placeholderName: string;
  placeholderPhone: string;
  placeholderEmail: string;
  placeholderAddress: string;
  placeholderContent: string;
  btnText: string;
  checkbox?: {
    label: string;
    subLabel: string;
    list?: CheckboxTypes[];
  };
}

export interface ConsultancyProps {
  title: string;
  consultancyInfo?: ConsultancyInfoTypes;
  handleSubmit?: (data: FormConsultancy) => void;
  method: UseFormReturn<FormConsultancy>;
  loading?: boolean;
  variantButton?: Variants;
}

export interface ConsultancyPropsInput {
  title: string;
  consultancyInfo: ConsultancyInfoTypes;
  handleSubmit?: (data: FormConsultancy) => void;
  method?: UseFormReturn<FormConsultancy>;
  loading?: boolean,
  variantButton?: Variants;
}

const Consultancy: React.FC<ConsultancyProps> = ({
  title,
  consultancyInfo,
  handleSubmit,
  method,
  loading,
  variantButton = 'copper',
}) => {
  const [listCheckbox, setListCheckbox] = useState<string[]>([]);
  const handleChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const clone = [...listCheckbox];
    if (!clone.includes(value)) {
      clone.push(value);
      setListCheckbox(clone);
    } else {
      setListCheckbox(clone.filter((item) => item !== value));
    }
  };

  const onSubmit = (data: FormConsultancy) => {
    if (handleSubmit) {
      handleSubmit({
        ...data,
        products: listCheckbox,
      });
    }
  };

  return (
    <div className="o-consultancy">
      <div className="o-consultancy_title">
        <Text content={title} modifiers={['12x20', 'davyGrey', '400', 'center']} />
      </div>
      <FormProvider {...method}>
        <form className="o-consultancy_form" onSubmit={method.handleSubmit(onSubmit)} noValidate>
          <div className="o-consultancy_formGroup">
            <div className="o-consultancy_field">
              <Controller
                name="name"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={consultancyInfo?.placeholderName}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <div className="o-consultancy_field">
              <Controller
                name="phone"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={consultancyInfo?.placeholderPhone}
                    error={error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className="o-consultancy_formGroup">
            <div className="o-consultancy_field">
              <Controller
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={consultancyInfo?.placeholderEmail}
                    error={error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className="o-consultancy_formGroup">
            <div className="o-consultancy_field">
              <Controller
                name="address"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value || ''}
                    placeholder={consultancyInfo?.placeholderAddress}
                    error={error?.message}
                  />
                )}
              />
            </div>
          </div>
          {
            consultancyInfo?.checkbox && (
              <div className="o-consultancy_checkbox">
                <div className="o-consultancy_checkbox-label">
                  <Text modifiers={['14x20', 'raisinBlack', '700']} type="span" content={consultancyInfo?.checkbox?.label} />
                  <Text modifiers={['14x20', 'raisinBlack', '400']} type="span" content={consultancyInfo?.checkbox?.subLabel} />
                </div>
                <div className="o-consultancy_checkbox-list">
                  {
                    Array.isArray(consultancyInfo?.checkbox?.list)
                    && consultancyInfo?.checkbox?.list.map((item, index) => (
                      <div
                        key={`o-consultancy_checkbox-${index.toString()}`}
                        className="o-consultancy_checkbox-list-item"
                      >
                        <Checkbox
                          onChange={handleChangeProduct}
                          value={item.value}
                          label={item?.label}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
          <div className="o-consultancy_formGroup">
            <div className="o-consultancy_field">
              <Controller
                name="content"
                render={({ field, fieldState: { error } }) => (
                  <TextArea
                    {...field}
                    value={field.value || ''}
                    placeholder={consultancyInfo?.placeholderContent}
                    error={error?.message}
                    rows={4}
                  />
                )}
              />
            </div>
          </div>
          <div className="o-consultancy_button">
            <Button variant={variantButton} loading={loading} type="submit">{consultancyInfo?.btnText}</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

Consultancy.defaultProps = {
};

export default Consultancy;
