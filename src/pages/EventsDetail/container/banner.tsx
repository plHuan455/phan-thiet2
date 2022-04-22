import React, { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import { postKeywordService } from 'services/keyword';

interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({
  thumbnail,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { options, hasNextPage, fetchNextPage } = useKeywords();

  const onSearch = useCallback(async (keyword: string | undefined) => {
    if (!executeRecaptcha) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    await postKeywordService({
      grecaptcha_token: grecaptchaToken,
      keyword: keyword || '',
      locale: 'vi',
    });
  }, [executeRecaptcha]);

  return (
    <>
      <BannerTemplate
        image={{ src: thumbnail }}
        onLoadMore={() => hasNextPage && fetchNextPage()}
        isLayer
        isSuggest={!!options?.length}
        search={{
          placeholder: 'Tìm kiếm sự kiện',
          // eslint-disable-next-line no-console
          onSearch,
        }}
        optionSuggest={options}
        tag={{
          keyword: 'Từ khóa nổi bật:',
          list: [
            {
              text: 'Du lịch',
              href: 'du-lich',
            },
            {
              text: 'The King Dom',
              href: 'the-king-dom',
            },
            {
              text: 'Tour trọn gói',
              href: 'tour-tron-goi',
            },
          ],
        }}
      />
    </>
  );
};

Banner.defaultProps = {
  thumbnail: '',
};

export default Banner;
