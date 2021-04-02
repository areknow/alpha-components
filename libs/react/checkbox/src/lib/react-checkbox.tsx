import React from 'react';
import { StyledDiv, StyledInput, StyledLabel, StyledSpan } from './styles';

interface CheckboxProps {
  label: string;
  value: string | ReadonlyArray<string> | number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
        defaultChecked={props.checked}
      />
      <StyledSpan></StyledSpan>
      <StyledDiv>{props.label}</StyledDiv>
    </StyledLabel>
  );
};

export default Checkbox;
