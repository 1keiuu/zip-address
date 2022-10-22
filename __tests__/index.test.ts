import { toAddress } from '../index';

test('toAddress', async () => {
  await toAddress(1000001).then((res) => {
    expect(res).toEqual({
      city: '千代田区',
      cityKana: 'ﾁﾖﾀﾞｸ',
      prefecture: '東京都',
      prefectureKana: 'ﾄｳｷｮｳﾄ',
      street: '千代田',
      streetKana: 'ﾁﾖﾀﾞ',
      zipCode: '1000001',
    });
  });
});
