import React from 'react';
import {
  StyledAlphaCheckbox,
  StyledDiv,
  StyledInput,
  StyledSpan,
} from './styles';

interface CheckboxProps {
  label: string;
  value: string | ReadonlyArray<string> | number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledAlphaCheckbox>
      <StyledInput
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
        defaultChecked={props.checked}
      />
      <StyledSpan></StyledSpan>
      <StyledDiv>{props.label}</StyledDiv>
    </StyledAlphaCheckbox>
  );
};

export default Checkbox;
