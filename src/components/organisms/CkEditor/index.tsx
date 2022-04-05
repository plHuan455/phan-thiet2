import React from 'react';

import Container from 'common/Container';
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
    <Container>
      <div className="o-ckeditor_content">
        <div className="o-ckeditor_title">
          <Text modifiers={['20x32', 'gradientGreen', '700']} content={title} />
        </div>
        <div className="o-ckeditor_description">
          <Text type="span" modifiers={['20x32', 'davyGrey', '400']} content={description} />
        </div>
      </div>
    </Container>
  </div>
);

CkEditor.defaultProps = {
  title: undefined,
  description: undefined,
};

export default CkEditor;
