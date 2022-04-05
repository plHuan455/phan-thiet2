import React from 'react';

import Text from 'components/atoms/Text';

interface CkEditorProps {
  title?: string;
  description?: string;
}

const CkEditor: React.FC<CkEditorProps> = ({
  title,
  description,
}) => (
  <div className="o-ckeditor">
    <Text modifiers={['20x32', 'gradientGreen', '700', 's015']} content={title} />
    <div className="u-mt-12" />
    <Text type="div" modifiers={['20x32', 'davyGrey', '400', 's015']} content={description} />
  </div>
);

CkEditor.defaultProps = {
  title: undefined,
  description: undefined,
};

export default CkEditor;
