import React from 'react';
import './Text.css';

const Text: React.FC<ITextProps> = ({ as = 'p', text, className, style, title, href }) => {
  const Tag = as;

  return (
    <Tag style={{ ...style }} className={`custom-txt ${className ? className : ''}`} title={title} href={href}>
      {text}
    </Tag>
  );
};

export default Text;

interface ITextProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a';
  text: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string
  href?: string
}
