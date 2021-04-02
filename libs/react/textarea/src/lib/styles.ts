import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled from 'styled-components';

const defaultTheme = 'magnetar';

export const StyledAlphaInput = styled.div`
  max-width: 640px;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  background-color: var(--neutral-0, ${LIGHT_SCHEME['--neutral-0']});
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  outline: none;
  font-family: inherit;
  &:focus {
    box-shadow: 0px 0px 0px 1px
      var(--primary-theme-color, ${COLORS[defaultTheme]});
    border-color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  }
  &::placeholder {
    color: var(--neutral-1, ${LIGHT_SCHEME['--neutral-1']});
  }
`;
