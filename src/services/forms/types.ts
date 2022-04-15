export interface ContactFormInput {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  content?: string;
  // eslint-disable-next-line camelcase
  grecaptcha_token: string;
}
