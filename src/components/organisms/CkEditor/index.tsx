import React from 'react';

import Text from 'components/atoms/Text';

interface CkEditorProps {
  title?: string;
  description?: string;
  content?: string
}

const CkEditor: React.FC<CkEditorProps> = ({
  title,
  description,
  content,
}) => (
  <div className="o-ckeditor">
    {content ? <Text modifiers={['20x32', '700', 's015']} content={content} /> : (
      <>
        {title && <Text modifiers={['20x32', 'gradientGreen', '700', 's015']} content={title} />}
        <div className="u-mt-12" />
        {description && <Text type="div" modifiers={['20x32', 'davyGrey', '400', 's015']} content={description} />}
      </>
    ) }

  </div>
);

CkEditor.defaultProps = {
  title: undefined,
  description: undefined,
  content: undefined,
};

export default CkEditor;
