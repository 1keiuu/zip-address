# zip-address
[![test](https://github.com/1keiuu/zip-address/actions/workflows/test.yml/badge.svg)](https://github.com/1keiuu/zip-address/actions/workflows/test.yml)

郵便番号⇔住所の変換ライブラリです。  
  
データは日本郵政が提供している最新の郵便番号データに基づいて更新されています。
https://www.post.japanpost.jp/zipcode/download.html  
  
**最終更新日:** 2022年 10月 1日 

- - -


You can get Japanese address from zipcode.  
  
This repository is scheduled to be updated based on [latest Japanese address](https://www.post.japanpost.jp/zipcode/download.html) provided by Japan Post.
  
**last updated**: October 1, 2022
## install
```bash
npm i zip-address
# or
yarn add zip-address
```

## Usage
```js
import { toAddress } from 'zip-address';

toAddress('1000001').then((address) => {
    console.log(address); 
    //=> { city: "千代田区", cityKana: "ﾁﾖﾀﾞｸ", prefecture: "東京都",
    //    prefectureKana: "ﾄｳｷｮｳﾄ", street: "千代田", streetKana: "ﾁﾖﾀﾞ", 
    //    zipCode: "1000001" }
});
```
