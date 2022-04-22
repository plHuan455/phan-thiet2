export type Locales = {
  icon: string;
  message: string;
  active: boolean;
};

export type SystemsData = {
  locales: {
    vi?: Locales;
    en?: Locales;
    kr?: Locales;
    jp?: Locales;
    cn?: Locales;
  };
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
};

export interface RedirectsTypes {
  id: number;
  from: string;
  to: string;
}
