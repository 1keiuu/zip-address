import { writeFileSync } from 'fs';
import { parse } from 'csv-parse';
import { decode } from 'iconv-lite';
import { finished } from 'stream/promises';

type Address = {
  zipCode: string;
  prefectureKana: string;
  cityKana: string;
  streetKana: string;
  prefecture: string;
  city: string;
  street: string;
};

export const parseCsv = async (file: Buffer): Promise<Address[]> => {
  const records: string[][] = [];
  let res: Address[] = [];

  const parser = parse({
    delimiter: ',',
  });

  // Use the readable stream api to consume records
  parser.on('readable', function () {
    let record: string[];
    while ((record = parser.read()) !== null) {
      records.push(record);
    }
  });

  // Catch any error
  parser.on('error', function (err) {
    throw new Error(err.message);
  });

  parser.on('end', () => {
    res = records.map((r) => {
      return {
        zipCode: r[2],
        prefectureKana: r[3],
        cityKana: r[4],
        streetKana: r[5],
        prefecture: r[6],
        city: r[7],
        street: r[8],
      };
    });
  });

  // Write data to the stream
  parser.write(decode(file, 'Shift_JIS'));

  parser.end();

  await finished(parser);
  return res;
};
