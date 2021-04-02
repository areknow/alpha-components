import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled, { css } from 'styled-components';

const defaultTheme = 'magnetar';

const ACTIVE_STYLE = css`
  select {
    color: var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  }
`;

const SELECT_STYLE = css`
  position: relative;
  max-width: 640px;
  box-sizing: border-box;
  select {
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: var(--neutral-1, ${LIGHT_SCHEME['--neutral-1']});
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
  }
  &:after {
    content: '';
    position: absolute;
    right: 24px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid
      var(--primary-text-color, ${LIGHT_SCHEME['--primary-text-color']});
  }
`;

export const StyledAlphaSelect = styled.div<{ active: boolean }>`
  ${SELECT_STYLE}
  ${({ active }) => active && ACTIVE_STYLE}
`;
