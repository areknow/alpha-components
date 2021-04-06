import React, { useState } from 'react';
import { StyledAlphaSelect } from './styles';

interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  autoComplete?: string;
  defaultValue?: string;
  name: string;
  label: string;
  inline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = (props: SelectProps) => {
  const [active, setActive] = useState(false);
  const _defaultValue = props.defaultValue || 'N/A';

  return (
    <StyledAlphaSelect
      active={active || props.defaultValue !== undefined}
      className="alpha-select"
      inline={props.inline}
    >
      <select
        defaultValue={_defaultValue}
        autoComplete={props.autoComplete}
        name={props.name}
        onChange={(event) => {
          setActive(true);
          props.onChange && props.onChange(event);
        }}
      >
        <option value="N/A" disabled>
          {props.label}
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </StyledAlphaSelect>
  );
};

export default Select;
