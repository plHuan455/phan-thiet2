import React from 'react';

import Text from 'components/atoms/Text';

interface CkEditorProps {
  content?: string
}
const CkEditor: React.FC<CkEditorProps> = ({
  content,
}) => (
  <div className="o-ckeditor">
    <Text type="div" modifiers={['20x32', 's015']} content={content} />
  </div>
);

CkEditor.defaultProps = {
  content: undefined,
};

export default CkEditor;
