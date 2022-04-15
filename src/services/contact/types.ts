/* eslint-disable camelcase */
export interface ContactFormInput {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  content?: string;
  grecaptcha_token: string;
}
export interface ConsultancyFormInput {
  name?: string;
  phone: string;
  email: string;
  address?: string;
  content?: string;
  products?: string[];
  topic_ids: string;
  grecaptcha_token: string;
}

export interface Topic {
  id: string;
  displayOrder: number;
  name: string;
}

export interface TopicRequestParams {
  keyword?: string;
}
