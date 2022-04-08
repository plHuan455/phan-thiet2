import React from 'react';

import Container from 'common/Container';
import CkEditorTemplate from 'components/organisms/CkEditor';

export interface CkeditorBlocks {
  content: string
}
const Ckeditor: React.FC<CkeditorBlocks> = (props) => (
  <Container>
    <CkEditorTemplate {...props} />
  </Container>
);

export default Ckeditor;
