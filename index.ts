import axios, { AxiosResponse } from 'axios';

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

async function fetchAddress(input: string | number): Promise<Address | null> {
  const formatted = format(input);
  if (formatted === null) return null;
  const zipCode3 = formatted.substring(0, 3);

  const res = await axios
    .get(
      `https://cdn.jsdelivr.net/npm/zip-address-data/address/${zipCode3}.json`
    )
    .then((res: AxiosResponse<Address[]>) => {
      return res.data.find((address) => {
        return address.zipCode === formatted;
      });
    });

  if (!res) return null;
  return res;
}

export function toAddress(input: string | number): Promise<Address | null> {
  return fetchAddress(input);
}
