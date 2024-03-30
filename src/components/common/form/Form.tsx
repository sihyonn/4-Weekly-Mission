import { styled } from 'styled-components';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

import LabeledInput from 'components/common/form/LabeledInput';
import { InputInfo, LoginForm, SignUpForm } from 'interfaces/componentsInterface';
import { ReactNode } from 'react';

const Styled = {
  Form: styled.form`
    width: 100%;
    max-width: 40rem;
  `,
};

interface FormProps {
  onSubmit: SubmitHandler<any>;
  onError?: SubmitErrorHandler<any>;
  inputInfo: InputInfo[];
  defaultValues: Record<string, any>;
  children?: ReactNode;
}

type FormValues = LoginForm | SignUpForm;

function Form({ onSubmit, onError, inputInfo, defaultValues, children }: FormProps) {
  const methods = useForm<FormValues>({ mode: 'onBlur', defaultValues: defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit, onError)}>
        {inputInfo.map((input) => (
          <LabeledInput
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            validation={input.validation}
            // errorMsg={errors?.[input.id]?.message}
            errorMsg={errors[input.id as keyof typeof errors]?.message}
            requireMsg={input.requireMsg}
          />
        ))}
        {children}
      </Styled.Form>
    </FormProvider>
  );
}

export default Form;
