import React from 'react';
import styles from './react-textarea.module.scss';

export interface TextareaProps {
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = (props: TextareaProps) => {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        rows={props.rows}
        defaultValue={props.value}
        required={props.required}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
