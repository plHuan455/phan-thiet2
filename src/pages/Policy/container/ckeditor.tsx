import React, { useMemo } from 'react';

import Container from 'common/Container';
import CkEditorTemplate from 'components/organisms/CkEditor';
import { baseString, getBlockData } from 'utils/functions';

export interface CkeditorProps {
  content: string;
}
export interface CkeditorBlocks {
  blocks: any;
}

const Ckeditor: React.FC<CkeditorBlocks> = ({ blocks }) => {
  const introduceBlock = useMemo(() => {
    const blockPageContent = getBlockData<CkeditorProps>(
      'introduction',
      blocks,
    );
    return {
      content: baseString(blockPageContent?.content),
    };
  }, [blocks]);
  return (
    <Container>
      <CkEditorTemplate {...introduceBlock} />
    </Container>
  );
};

export default Ckeditor;
