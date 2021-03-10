import React from 'react';
import styles from './react-textarea.module.scss';

export interface TextareaProps {
  rows?: number;
  placeHolder?: string;
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
        placeholder={props.placeHolder}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
