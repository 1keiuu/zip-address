import { toAddress } from '../index';

test('toAddress', async () => {
  expect(await toAddress(1670042)).toEqual({
    zipCode: '1670042',
    prefectureKana: 'ﾄｳｷｮｳﾄ',
    cityKana: 'ｽｷﾞﾅﾐｸ',
    streetKana: 'ﾆｼｵｷﾞｷﾀ',
    prefecture: '東京都',
    city: '杉並区',
    street: '西荻北',
  });
});
