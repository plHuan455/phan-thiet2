import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '11x18'
  | '12x18'
  | '12x20'
  | '14x20'
  | '16x28'
  | '20x32'
  | '24x36'
  | 'sm';

export type TextStyle = (GeneralTextStyle | Sizes)[];
interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  modifiers?: TextStyle;
  type?: 'p' | 'span' | 'div';
  content?: string;
  isInline?: boolean;
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  content,
  children,
  isInline,
  ...props
}) => {
  const Element = type;
  return (
    <>
      {content ? (
        <Element
          className={mapModifiers('a-text', modifiers, isInline && 'inline')}
          dangerouslySetInnerHTML={{ __html: content }}
          {...props}
        />
      ) : (
        <Element className={mapModifiers('a-text', modifiers, isInline && 'inline')} {...props}>
          {children}
        </Element>
      )}
    </>

  );
};

Text.defaultProps = {
  modifiers: undefined,
  type: 'p',
  content: undefined,
  isInline: undefined,
};

export default React.memo(Text);
