import React, { useState } from 'react';
import styles from './react-input.module.scss';
import { setNativeValue } from './set-native-value';
import { StyledAlphaInput, StyledButton, StyledInput } from './styles';

export interface InputProps {
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  clear?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState(props.value || '');
  const inputRef = React.createRef<HTMLInputElement>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  };

  const handleClear = () => {
    setValue('');
    setNativeValue(inputRef.current, '');
    const event = new Event('input', { bubbles: true });
    inputRef.current.dispatchEvent(event);
  };

  const classes = [
    styles.inputContainer,
    value && props.clear ? styles.clearActive : null,
  ].join(' ');

  return (
    <StyledAlphaInput>
      <StyledInput
        type="text"
        value={value}
        ref={inputRef}
        required={props.required}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onChange={handleChange}
      />
      {props.clear && value && (
        <StyledButton onClick={handleClear}></StyledButton>
      )}
    </StyledAlphaInput>
  );
};

export default Input;
