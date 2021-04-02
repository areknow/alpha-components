import React from 'react';
import { StyledDiv, StyledInput, StyledLabel, StyledSpan } from './styles';

type RadioValue = string | string[] | number | number[];
interface RadioProps {
  label: string;
  group?: string;
  selected?: boolean;
  value?: RadioValue;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: RadioValue
  ) => void;
}

export const Radio = (props: RadioProps) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        name={props.group}
        onChange={(event) => {
          props.onChange(event, props.value);
        }}
        defaultChecked={props.selected}
      />
      <StyledSpan></StyledSpan>
      <StyledDiv>{props.label}</StyledDiv>
    </StyledLabel>
  );
};

export default Radio;
