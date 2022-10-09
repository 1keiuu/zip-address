import address from './assets/address.json';

export type Address = {
  zipCode: string;
  prefectureKana: string;
  cityKana: string;
  streetKana: string;
  prefecture: string;
  city: string;
  street: string;
};

function format(input: string | number) {
  if (typeof input !== 'string' && typeof input !== 'number') return null;
  return input.toString().replace('-', '');
}

export function toAddress(input: string | number) {
  const formatted = format(input);
  if (formatted === null) return '';
  const res = (address as Address[]).find((a) => {
    return a.zipCode === formatted;
  });
  if (!res) return null;
  return {
    zipCode: res.zipCode,
    prefectureKana: res.prefectureKana,
    cityKana: res.cityKana,
    streetKana: res.streetKana,
    prefecture: res.prefecture,
    city: res.city,
    street: res.street,
  };
}
