import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { styled, css } from 'styled-components';

import EyeOffIcon from 'assets/icon/EyeOffIcon';
import EyeOnIcon from 'assets/icon/EyeOnIcon';
import { InputInfo } from 'interfaces/componentsInterface';

const Styled = {
  Container: styled.div`
    width: 100%;
  `,

  Label: styled.label`
    font-size: 1.4rem;
    line-height: 1.67rem;
  `,

  Input: styled.input<{ $isMessage?: boolean }>`
    width: 100%;
    height: 6rem;
    padding: 1.8rem 1.5rem;
    margin-top: 1.2rem;
    border: 1px solid ${({ theme }) => theme.color.gray3};
    border-radius: 0.8rem;

    &:focus {
      border-color: ${({ theme }) => theme.color.primary};
    }

    ::placeholder {
      line-height: 2.4rem;
      color: ${({ theme }) => theme.color.gray4};

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ${({ $isMessage }) =>
      $isMessage &&
      css`
        margin-bottom: 1rem;
        border-color: ${({ theme }) => theme.color.red};
        &:focus {
          border-color: ${({ theme }) => theme.color.red};
        }
      `}
  `,

  InputContainer: styled.div`
    position: relative;
    display: flex;
  `,

  EyeIcon: styled.div`
    position: absolute;
    right: 1.5rem;
    top: 45%;

    cursor: pointer;
  `,

  Message: styled.div`
    height: 1.7rem;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.67rem;

    &.error-msg,
    &.require-msg {
      color: ${({ theme }) => theme.color.red};
    }
  `,
};

interface LabeledInputProps extends InputInfo {}

function LabeledInput({
  id,
  label,
  type,
  placeholder,
  validation,
  errorMsg,
  requireMsg,
  ...htmlInputProps
}: LabeledInputProps) {
  const { register } = useFormContext();
  const isPasswordType = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.InputContainer>
        <Styled.Input
          id={id}
          type={isPasswordType && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          autoComplete={isPasswordType ? 'off' : 'on'} // 비밀번호는 자동완성 안되도록
          {...register(id, validation)}
          {...htmlInputProps}
          $isMessage={!!errorMsg}
        />
        {isPasswordType && (
          <Styled.EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
          </Styled.EyeIcon>
        )}
      </Styled.InputContainer>

      {errorMsg ? (
        <Styled.Message className="error-msg">{errorMsg}</Styled.Message>
      ) : (
        <Styled.Message className="require-msg">{requireMsg}</Styled.Message>
      )}
    </Styled.Container>
  );
}

export default LabeledInput;
