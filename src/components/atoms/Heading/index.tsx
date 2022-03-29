import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '64x84'
  | '48x64'
  | '40x56'
  | '32x48'
  | '28x40'
  | '24x36';

export type Gradients = 'gradientGreen' | 'gradientBlue' | 'gradientBittersweet';

export type TextStyle = (GeneralTextStyle | Sizes | Gradients)[];

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
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

export default Heading;
