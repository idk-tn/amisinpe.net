import { AllHtmlEntities } from 'html-entities';

export const cleanContent = content => {
  return (
    content
      /* eslint-disable no-irregular-whitespace */
      .replace(/<p[^>]*> <\/p>/g, '')
      .replace(/font-size: \d+\.?\d*px;/g, '')
      .replace(/font-size: \d+\.?\d*px;/g, '')
      .replace(/font-family: [^;]+;/g, '')
      .replace(/http:\/\/amisinpe.lcl\/wp-content/g, '')
      .replace(/(background-)?color: #[0-9a-z]{6};/gi, '')
      .replace(/<strong>/g, '')
      .replace(/<\/strong>/g, '')
      .replace(/style=" *"/gi, '')
  );
};

export const decode = content => AllHtmlEntities.decode(content);
