import React, { memo, ReactNode } from 'react';
import { PrismCode } from 'react-prism';

require('prismjs');
require('prism-themes/themes/prism-coldark-dark.css');
// require('prism-themes/themes/prism-lucario.css');
require('prismjs/components/prism-typescript.min');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-tsx.min');
require('prismjs/components/prism-scss.min');
require('prismjs/components/prism-bash.min');

interface CodeProps {
  language: string;
  children: ReactNode;
}

export const Code = memo(({ language, children }: CodeProps) => {
  return <PrismCode className={language}>{children}</PrismCode>;
});

export default Code;
