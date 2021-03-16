export const addFontToHead = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://indestructibletype.com/fonts/Jost.css';
  link.type = 'text/css';
  document.head.appendChild(link);
};
