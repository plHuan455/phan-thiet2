/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useQuery } from 'react-query';

import { baseString } from '../utils/functions';

import useDebounceInput from './useDebounceInput';

import i18n from 'i18n';
import getKeywordService, { postKeywordService } from 'services/keyword';

const useKeywords = (searchValue?: string, isPopular?: number) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { language } = i18n;
  const searchDebounceValue = useDebounceInput(searchValue, 1000);

  const {
    data: keywords,
    isFetching: isFetchingKeywords,
  } = useQuery(['GetKeywords', [searchDebounceValue, isPopular]], () => getKeywordService({
    keyword: baseString(searchDebounceValue),
    limit: 15,
    page: 1,
    is_popular: isPopular,
  }));

  const options = useMemo(() => keywords?.data?.map((e) => ({
    id: String(e.id),
    keyword: e.keyword,
  })), [keywords]);

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
    isLoading: isFetchingKeywords,
    onSubmit,
  };
};

export default useKeywords;
