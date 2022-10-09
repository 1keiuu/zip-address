import { readFileSync, writeFile, writeFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'csv-parse';
import { decode } from 'iconv-lite';
import prefectures from '../constants/prefectures';
import { parseCsv } from '../helper/csvParser';
import { groupBy } from '../helper/utils';
const updateFromAddFile = (filePath: string) => {
  const source = join(__dirname, filePath);
  const file = readFileSync(source);
  const records: string[][] = [];
  // Initialize the parser
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
    console.error(err.message);
  });
  parser.on('end', () => {
    writeFileSync(
      'hoge.json',
      JSON.stringify(
        records.map((r) => {
          return {
            zipCode: r[2],
            prefectureKana: r[3],
            cityKana: r[4],
            streetKana: r[5],
            prefecture: r[6],
            city: r[7],
            street: r[8],
          };
        })
      )
    );
  });

  // Write data to the stream
  parser.write(decode(file, 'Shift_JIS'));
  // Close the readable stream
  parser.end();
};

const insertAllData = async (filePath: string) => {
  const source = join(__dirname, filePath);
  const file = readFileSync(source);
  const address = await parseCsv(file);

  const addressByPref = groupBy(address, (a) => a.prefecture);

  for (let i = 0; i < addressByPref.length; i++) {
    const fileIndex = prefectures.indexOf(addressByPref[i][0]) + 1;

    writeFileSync(
      join(__dirname, `../../assets/address/${fileIndex}.json`),
      JSON.stringify(addressByPref[i][1])
    );
  }
};
