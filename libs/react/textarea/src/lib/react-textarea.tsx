import React from 'react';
import { StyledAlphaTextarea, StyledTextarea } from './styles';

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
    <StyledAlphaTextarea className="alpha-textarea">
      <StyledTextarea
        rows={props.rows}
        defaultValue={props.value}
        required={props.required}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      />
    </StyledAlphaTextarea>
  );
};

export default Textarea;
