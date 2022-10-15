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

export async function toAddress(
  input: string | number
): Promise<Address | null> {
  const formatted = format(input);
  if (formatted === null) return null;
  const zipCode3 = formatted.substring(0, 3);

  return import(`./assets/address/${zipCode3}.js`).then((address) => {
    const res = (address.default as Address[]).find((a) => {
      return a.zipCode === formatted;
    });
    if (!res) return null;
    return res;
  });
}
