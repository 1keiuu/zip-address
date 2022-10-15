# zip-address
[![test](https://github.com/1keiuu/zip-address/actions/workflows/test.yml/badge.svg)](https://github.com/1keiuu/zip-address/actions/workflows/test.yml)

You can get address in Japan from zipcode.
This repository is scheduled to be updated based on [latest Japanese address data](https://www.post.japanpost.jp/zipcode/dl/oogaki-zip.html).

## install
```
npm i zip-address
<!-- or -->
yarn add zip-address
```

## Usage
```js
import { toAddress } from 'zip-address';

toAddress('1000001').then((address) => {
    console.log(address); 
    // => {city: "千代田区", cityKana: "ﾁﾖﾀﾞｸ", prefecture: "東京都",prefectureKana: "ﾄｳｷｮｳﾄ",street: "千代田",streetKana: "ﾁﾖﾀﾞ", zipCode: "1000001"}
});
```