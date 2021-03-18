import React from 'react';
import { PrismCode } from 'react-prism';

require('prismjs');
require('prism-themes/themes/prism-dracula.css');
require('prismjs/components/prism-typescript.min');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-tsx.min');

export const Code = ({ children }: { children: string }) => {
  return <PrismCode className="language-tsx">{children}</PrismCode>;
};

export default Code;
