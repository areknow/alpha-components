import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled, { css } from 'styled-components';

const defaultTheme = 'magnetar';

const ACTIVE_ENABLED_STYLE = css`
  select {
    color: var(--primary-text-color, ${LIGHT_SCHEME.primaryTextColor});
  }
`;

const INLINE_ENABLED_STYLE = css`
  display: inline-flex;
  flex-grow: 1;
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
    color: var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
    padding: 16px;
    border-radius: 4px;
    border: 1px solid var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
    background-color: var(--grayscale-level0, ${LIGHT_SCHEME.grayscaleLevel0});
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
      var(--primary-text-color, ${LIGHT_SCHEME.primaryTextColor});
  }
`;

export const StyledAlphaSelect = styled.div<{
  active: boolean;
  inline: boolean;
}>`
  ${SELECT_STYLE}
  ${({ active }) => active && ACTIVE_ENABLED_STYLE}
  ${({ inline }) => inline && INLINE_ENABLED_STYLE}
`;
