import { readFileSync, writeFile, writeFileSync } from 'fs';
import { resolve } from 'path';
import prefectures from '../constants/prefectures';
import { Address, parseCsv } from '../helper/csvParser';
import { groupBy } from '../helper/utils';
/**
 * 追加対象のデータをjsonに追加する
 * @param filePath 追加対象のファイルパス ex)add_2209.CSV
 */
const updateFromAddFile = async (filePath: string) => {
  const source = resolve(__dirname, filePath);
  const file = readFileSync(source);
  const address = await parseCsv(file);
  const addData = groupBy(address, (a) => a.prefecture);

  for (let i = 0; i < addData.length; i++) {
    const fileIndex = prefectures.indexOf(addData[i][0]) + 1;
    const jsonPath = resolve(
      __dirname,
      `../../assets/address/${fileIndex}.json`
    );
    // 都道府県ごとのjsonファイルを取得
    let data: Address[] = JSON.parse(readFileSync(jsonPath).toString());

    for (let i2 = 0; i2 < addData[i][1].length; i2++) {
      const addTarget = addData[i][1][i2];
      const duplicated = data.find((d) => {
        return d.zipCode === addTarget.zipCode;
      });
      if (duplicated) {
        throw new Error(`data is duplicated. zipCode:${addTarget.zipCode}`);
      }
      data.push(addTarget);
    }
    // 削除対象を除いたデータをファイルに書き込む
    writeFileSync(resolve(__dirname, jsonPath), JSON.stringify(data));
  }
};

/**
 * 削除対象のデータをjsonから削除する
 * @param filePath 削除対象のファイルパス ex)del_2209.CSV
 */
const updateFromDeleteFile = async (filePath: string) => {
  const source = resolve(__dirname, filePath);
  const file = readFileSync(source);
  const address = await parseCsv(file);
  const deleteData = groupBy(address, (a) => a.prefecture);

  for (let i = 0; i < deleteData.length; i++) {
    const fileIndex = prefectures.indexOf(deleteData[i][0]) + 1;
    const jsonPath = resolve(
      __dirname,
      `../../assets/address/${fileIndex}.json`
    );
    // 都道府県ごとのjsonファイルを取得
    let data: Address[] = JSON.parse(readFileSync(jsonPath).toString());

    for (let i2 = 0; i2 < deleteData[i][1].length; i2++) {
      const deleteTarget = deleteData[i][1][i2];
      data = data.filter((d) => {
        return d.zipCode !== deleteTarget.zipCode;
      });
    }
    // 削除対象を除いたデータをファイルに書き込む
    writeFileSync(resolve(__dirname, jsonPath), JSON.stringify(data));
  }
};

/**
 * 指定したファイルのデータを郵便番号前3桁別にjsonに追加する(初期化用)
 * @param filePath 追加対象のファイルパス
 */
const insertAllData = async (filePath: string) => {
  const source = resolve(__dirname, filePath);
  const file = readFileSync(source);
  const address = await parseCsv(file);

  const addressByZip3 = groupBy(address, (a) => a.zipCode.substring(0, 3));

  for (let i = 0; i < addressByZip3.length; i++) {
    const fileIndex = addressByZip3[i][0];
    const body = addressByZip3[i][1];
    const text = `module.exports=${JSON.stringify(body)}`;
    console.log(fileIndex);
    writeFileSync(
      resolve(__dirname, `../../assets/address/${fileIndex}.js`),
      text
    );
  }
};

insertAllData('../../assets/sample/KEN_ALL.CSV');