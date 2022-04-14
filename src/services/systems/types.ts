export type Locales = {
  icon: string
  message: string
  active: boolean
}

export type Address = {
  address: string
  description: string
}

export type SystemsData = {
  locales: {
    vi?: Locales
    en?: Locales
    kr?: Locales
    jp?: Locales
    cn?: Locales
  };
  gaId: string[]
  gtmId: string[]
  messengerId: string
  receiverContacts: string[]
  logoHeader: string
  logoFooter: string
  socialMedia: {
    ko: {
      socialMedia: {
        icon: string
        link: LinkTypes
      }[]
    }
  }
  address: {
    vi: Address
    en: Address
    ja: Address
    zh: Address
    ko: Address
  }
  keywordConfig: {
    minNumberOfTimes: string
    numberOfDays: string
    startDate: string
    endDate: string
  }
  googleRecaptchaSiteKey: string
}
