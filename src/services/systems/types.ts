export type Locales = {
  icon: string;
  message: string;
  active: boolean;
};

export type LanguageKeyTypes = keyof LocalesTypes;

export type LocalesTypes = {
  vi?: Locales;
  en?: Locales;
  kr?: Locales;
  jp?: Locales;
  cn?: Locales;
}

export type SystemsData = {
  locales: LocalesTypes;
  gaId: string[];
  gtmId: string[];
  messengerId: number;
  receiverContacts: string[];
  logoHeader: string;
  logoFooter: string;
  keywordConfig: {
    minNumberOfTimes: string;
    numberOfDays: string;
    startDate: string;
    endDate: string;
  };
  googleRecaptchaSiteKey: string;
  og?: OpenGraphDataTypes;
  seo?: SEODataTypes;
  footScripts?: string;
  address?: {
    address?: string;
    description?: string;
  };
  socialMedia?: {
    icon?: string;
    link?: LinkTypes;
  }[];
  copyright: string;
};

export interface RedirectsTypes {
  id: number;
  from: string;
  to: string;
}
