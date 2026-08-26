const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
}

export { BASE_URL };

export const API_LOGIN = `${BASE_URL}/UnifiedAuth/login`;
export const API_ADD_CUSTOMER_INTRODUCTION = `${BASE_URL}/CustomerIntroducerCommand/create`;
export const API_CUSTOMER_INTRODUCER_QUERY = `${BASE_URL}/CustomerIntroducerQuery/paged`;
export const API_CUSTOMER_INTRODUCER_REMOVE = `${BASE_URL}/CustomerIntroducerCommand/remove`;