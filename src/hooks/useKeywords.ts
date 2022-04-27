import { useCallback, useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useQuery } from 'react-query';

import { baseString } from '../utils/functions';

import i18n from 'i18n';
import getKeywordService, { postKeywordService } from 'services/keyword';

const useKeywords = (str?: string) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { language } = i18n;

  const {
    data,
    isFetching,
  } = useQuery(['GetKeywords', []], () => getKeywordService({
    keyword: baseString(str),
    limit: 15,
    page: 1,
  }));

  const options = useMemo(() => data?.data?.map((e) => ({
    id: String(e.id),
    keyword: e.keyword,
  })), [data]);

  const onSubmit = useCallback(async (keyword: string | undefined) => {
    if (!executeRecaptcha || !keyword) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    await postKeywordService({
      grecaptcha_token: grecaptchaToken,
      keyword,
      locale: language,
    });
  }, [executeRecaptcha, language]);

  return {
    options,
    isLoading: isFetching,
    onSubmit,
  };
};

export default useKeywords;
