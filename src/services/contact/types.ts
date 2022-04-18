/* eslint-disable camelcase */
export interface ContactFormInput {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  content?: string;
  grecaptcha_token: string;
  utm_source?: string;
  utm_medium?: string;
  utm_term?: string;
  utm_campaign?: string;
  utm_content?: string
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
