import React, { memo, useState } from 'react';
import styles from './react-input.module.scss';
import { setNativeValue } from './set-native-value';

export interface InputProps {
  placeHolder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  clear?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
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
    <div className={styles.inputContainer}>
      <input
        ref={inputRef}
        value={value}
        required={props.required}
        type="text"
        placeholder={props.placeHolder}
        autoComplete={props.autoComplete}
        onChange={handleChange}
      />
      {props.clear && value && (
        <span className={styles.clear} onClick={handleClear}></span>
      )}
    </div>
  );
});

export default Input;
