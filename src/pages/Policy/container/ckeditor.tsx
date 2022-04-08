import React from 'react';

import Container from 'common/Container';
import CkEditorTemplate from 'components/organisms/CkEditor';

interface CkEditorProps {
  content: string
}

const Ckeditor: React.FC<CkEditorProps> = (props) => (
  <Container>
    <CkEditorTemplate {...props} />
  </Container>
);

export default Ckeditor;
