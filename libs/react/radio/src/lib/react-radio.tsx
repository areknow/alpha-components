import React from 'react';
import { StyledAlphaRadio, StyledDiv, StyledInput, StyledSpan } from './styles';

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
    <StyledAlphaRadio className="alpha-radio">
      <StyledInput
        type="radio"
        name={props.group}
        onChange={(event) => {
          props.onChange && props.onChange(event, props.value);
        }}
        defaultChecked={props.selected}
      />
      <StyledSpan></StyledSpan>
      <StyledDiv>{props.label}</StyledDiv>
    </StyledAlphaRadio>
  );
};

export default Radio;
