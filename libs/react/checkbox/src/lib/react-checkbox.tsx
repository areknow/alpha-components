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
    <StyledAlphaCheckbox className="alpha-checkbox">
      <StyledInput
        type="checkbox"
        value={props.value}
        onChange={(event) => {
          props.onChange && props.onChange(event);
        }}
        defaultChecked={props.checked}
      />
      <StyledSpan></StyledSpan>
      <StyledDiv>{props.label}</StyledDiv>
    </StyledAlphaCheckbox>
  );
};

export default Checkbox;
