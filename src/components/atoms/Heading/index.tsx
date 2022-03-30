import React from 'react';

import mapModifiers from 'utils/functions';

type Size = 'lg';

export type TextStyle = (GeneralTextStyle | Size)[];

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content?: string;
  modifiers?: TextStyle;
}

const Heading: React.FC<HeadingProps> = ({
  children, type = 'h2', content, modifiers,
}) => {
  const Element = type;
  return (
    <>
      {
        content ? (
          <Element
            className={mapModifiers('a-heading', modifiers)}
            dangerouslySetInnerHTML={{ __html: content }}

          />
        ) : (
          <Element className={mapModifiers('a-heading', modifiers)}>
            {children}
          </Element>
        )
      }
    </>
  );
};

Heading.defaultProps = {
  type: 'h2',
  modifiers: undefined,
  content: undefined,
};

export default React.memo(Heading);
