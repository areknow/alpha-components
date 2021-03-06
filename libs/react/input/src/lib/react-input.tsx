import React, { useState } from 'react';
import { setNativeValue } from './set-native-value';
import { StyledAlphaInput, StyledButton, StyledInput } from './styles';

export interface InputProps {
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  clear?: boolean;
  inline?: boolean;
  type?: 'text' | 'tel' | 'email';
  pattern?: string;
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

  return (
    <StyledAlphaInput
      className="alpha-input"
      inline={props.inline}
      clear={props.clear}
    >
      <StyledInput
        type={props.type ? props.type : 'text'}
        pattern={props.pattern}
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
