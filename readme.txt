　　　　　　　　　　　　＝＝＝＝＝＝＝＝＝＝＝＝＝＝
                         データ変換プログラムの説明
　　　　　　　　　　　　＝＝＝＝＝＝＝＝＝＝＝＝＝＝

　　インターネットで提供している新郵便番号データがそのままではご利用いただけない
　方のために、新郵便番号データのコード変換、データ形式変換が行えます。

　(1)　機能説明
　　　コード変換、データ形式変換は次の機能を有しています。

　　1)　ＦＤフォーマット
　　　　ＭＳ−ＤＯＳ形式、ＩＢＭＨ型データ交換形式のＦＤに出力します。
　　2)　データ形式の変換
　　　　ＣＳＶ形式及びテキスト形式に変換できます。（ＦＤフォーマットがＭＳ−Ｄ
　　　ＯＳ形式の場合）
　　3)　半角コードの変換
　　　　ＪＩＳ及びＥＢＣＤＩＣに変換できます。
　　4)　全角コードの変換
　　　　新ＪＩＳ、シフトＪＩＳ、カシオ標準、三菱標準、富士通ＪＥＦ、東芝標準、
　　　ＵＮＩＸ、日立ＫＥＩＳ、ユニバック、ＮＥＣ（ＥＪＳＥ）、ＮＥＣ（ｲﾝﾀｰﾅﾙ）
　　　に変換できます。

　(2) 「ＭＳ−ＤＯＳ形式変換」
　　　データ変換プログラムを用いて新郵便番号データを出力します。変換先は、ＦＤ、
　　ＭＯ、ＰＤなど標準の入出力が行える装置が指定できます。

　　1)　動作条件
　　　　対象機種：８０３８６ＳＸ／３８６以上
　　　　必要メモリ：２メガバイト以上（ＯＳを除く）
　　　　必要ファイル容量：１メガバイト以上（テンポラリ領域）
　　　　対象ＯＳ：ＭＳ−ＷＩＮＤＯＷＳ３．１Ｊ　ＭＳ−ＷＩＮＤＯＷＳ９５
　　2)　変換媒体の準備
　　　　ＦＤの場合は、１ＭＢ（注１）あるいは１．４４ＭＢ（注２）にフォーマット
　　　した媒体を準備してください。枚数は、出力形式により異なります。「付録．デー
　　　タの必要容量」を参照してください。
　　　　ＭＯ、ＰＤを使用する場合は、互換性のあるフォーマットを採用してください。
　　3)　プログラムの起動
　　　　プログラムはハードディスク、ＭＯ、ＰＤなどから実行できます。ＦＤからは実
　　　行できません。
　　　・　ＭＳ−ＷＩＮＤＯＷＳの「ファイル名を指定して実行」により、ＣＯＮＶ．
　　　　ＥＸＥを起動してください。（ファイルマネージャ、エクスプローラなどから
　　　　も起動できます。）
　　　・　プログラムの「ファイル」をクリックして「ＭＳ−ＤＯＳ形式」を選択して
　　　　ください。
　　　・　「入力データファイル名」を指定してください。参照ボタンをクリックする
　　　　と一覧から選択できます。
　　　　全国版の新郵便番号データと県単位新郵便番号データを指定することができま
　　　　す。
　　　　全国版を入力する場合は、\ALL_CSV\ALL.CSVを指定してください。県単位に入
　　　　力する場合は、\KEN_CSV\県名.CSVを選択してください。
　　　・　「出力データ形式」を選択してください。テキスト形式を選択した場合のみ
　　　　区切り文字の指定ができます。任意の区切り文字を指定してください。（無指
　　　　定でＴＡＢとなります。）特殊な扱いとして、SP：スペース、NON:区切りなし
　　　　の指定ができます。
　　　・　「出力データファイル名」を指定してください。
　　　　すでに存在するファイルが選択された場合は、「上書きしてもいいですか？」
　　　　のメッセージが出力されます。
　　　・　「１バイト系コード」を選択してください。
　　　・　「２バイト系コード」を選択してください。
　　　・　「漢字識別コード」を付加するか否かを選択してください。

　　詳しくは、「出力リファレンス」を参照してください。

　(注１)　正確には1.2MBの容量をもつ3.5ｲﾝﾁ2HDフロッピーディスクのフォーマット
　　　　（初期化）形式で、ＰＣ−９８シリーズで一般的に使用されている。
　(注２)　ＩＢＭ互換機（DOS/Vﾏｼﾝ）で一般的に使用されている3.5ｲﾝﾁ2HDフロッピー
　　　　ディスクのフォーマット形式。

　(3) 「ＩＢＭ標準Ｈ型データ交換形式変換」
　　　データ変換プログラムを用いて新郵便番号データを出力します。変換先はＦＤ
　　装置のみとなります。

　　1)　動作条件
　　　　対象機種：８０３８６ＳＸ／３８６以上のＰＣ９８シリーズ
　　　　　　　　　（命令がハードウェアに依存しているためＰＣ９８シリーズ限定に
　　　　　　　　　　なります。）
　　　　必要メモリ：２メガバイト以上（ＯＳを除く）
　　　　必要ファイル容量：１メガバイト以上（テンポラリ領域）
　　　　対象ＯＳ：ＭＳ−ＷＩＮＤＯＷＳ３．１Ｊ
　　　　　　　　　ＭＳ−ＷＩＮＤＯＷＳ９５（ＭＳ−ＤＯＳモードでの再起動が必要で
  　　　　　　　　　　　　　　　　　　　　　す。）
　　　　必要ファイル機器：１メガバイトタイプのＦＤユニット
　　2)　変換媒体の準備
　　　　全国版を出力する場合はＦＤを３１枚準備してください。県単位に出力する場
　　　合は、北海道３枚、新潟県２枚、愛知県２枚、京都府２枚、兵庫県２枚、その他
　　　の県は、１県あたり１枚を準備してください。フォーマットはプログラムで行い
　　　ますので必要ありません。
　　　使用できるＦＤは、８インチ?UＤ、５インチＭＦ−２ＨＤ及び３．５インチＭＣ−
　　　２ＨＤのみです。
　　3)　ＭＳ−ＷＩＮＤＯＷＳ３．１Ｊからのプログラムの起動
　　　　プログラムはハードディスク、ＭＯ、ＰＤなどから実行できます。ＦＤからは
　　　実行できません。
　　　・　ＭＳ−ＷＩＮＤＯＷＳの「ファイル名を指定して実行」により、ＣＯＮＶＨ
　　　　Ｄ．ＥＸＥを起動してください。（ファイルマネージャなどからも起動できま
　　　　す。）
　　　・　「入力データファイル名」を指定してください。
　　　　全国版の新郵便番号データと県単位新郵便番号データを指定することができま
　　　　す。
　　　　全国版を入力する場合は、\ALL_CSV\ALL.CSVを指定してください。県単位に入
　　　　力する場合は、\KEN_CSV\県名.CSVを選択してください。
　　　・　「出力装置」を指定してください。出力装置は、接続されている順番に１〜
　　　　４まで指定可能です。
　　　・　「１バイト系コード」を選択してください。
　　　・　「２バイト系コード」を選択してください。
　　　・　「漢字識別コード」を付加するか否かを選択してください。
　　　・　「確認」　入力項目の確認をしてください。「Ｔ」を入力すると１枚のＦＤ
　　　　を作成して処理を中止します。全てのＦＤが同形式で出力されますので、この
　　　　ＦＤが正しく読めるかどうかチュックしてから全ＦＤを出力してください。
　　4)　ＭＳ−ＷＩＮＤＯＷＳ９５からのプログラムの起動
　　　　プログラムはハードディスク、ＭＯ、ＰＤなどから実行できますが、ＭＳ−
　　　ＤＯＳモードで再起動しますので、ＭＳ−ＤＯＳモードで各々の装置を組み込む
      必要があります。ＦＤからは実行できません。
　　　・　ＷＩＮＤＯＷＳの終了画面で、「ＭＳ−ＤＯＳモードでコンピュータを再起
　　　　動する」を選択してください。（ＭＳ−ＷＩＮＤＯＷＳ９５で準備されている
　　　　「ＭＳ−ＤＯＳプロンプト」では実行できません。）
　　　・　コマンドプロンプトより、ＣＯＮＶＨＤＤ．ＥＸＥを起動してください。
　　　・　「入力データファイル名」を指定してください。
　　　　全国版の新郵便番号データと県単位新郵便番号データを指定することができま
　　　　す。
　　　　全国版を入力する場合は、\ALL_CSV\ALL.CSVを指定してください。県単位に入
　　　　力する場合は、\KEN_CSV\県名.CSVを選択してください。
　　　・　「出力装置」を指定してください。出力装置は、接続されている順番に１〜
　　　　４まで指定可能です。
　　　・　「１バイト系コード」を選択してください。
　　　・　「２バイト系コード」を選択してください。
　　　・　「漢字識別コード」を付加するか否かを選択してください。
　　　・　「確認」　入力項目の確認をしてください。「Ｔ」を入力すると１枚のＦＤ
　　　　を作成して処理を中止します。全てのＦＤが同形式で出力されますので、この
　　　　ＦＤが正しく読めるかどうかチェックしてから全ＦＤを出力してください。

　(4) 出力データリファレンス
　　　データ変換プログラムにおいて、指定したパラメータと出力ファイルの形式を示
　　します。

　　1)　MS-DOS形式、CSV（固定）、1ﾊﾞｲﾄ系：JIS、2ﾊﾞｲﾄ系：シフトJIS
　　12226,"279  ","2790041","ﾁﾊﾞｹﾝ  ","ｳﾗﾔｽｼ   ","ﾎﾘｴ     ","千葉県　","浦安市　","堀江　　",0,0,1,0,0,0CR/LF
　桁--5--  --5--   ---7---   ---8---   ---25---   ---80---   ---8----   ---22---   ---74---
　　JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJSSSSSSSSJJJSSSSSSSSJJJSSSSSSSSJJJJJJJJJJJJJ
    J:JIS　S:シフトJIS

　　2)　MS-DOS形式、ﾃｷｽﾄ（可変）、1ﾊﾞｲﾄ系：EBCDIC、2ﾊﾞｲﾄ系：富士通JEF、漢字識別あり
　　12226_279  _2790041_ﾁﾊﾞｹﾝ_ｳﾗﾔｽｼ_ﾎﾘｴ_kk千葉県kk_kk浦安市kk_kk堀江kk_0_0_1_0_0_0CR/LF
　　EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEkkFFFFFFkkEkkFFFFFFkkEkkFFFFkkEEEEEEEEEEEE
    E:EBCDIC  k:漢字識別コード　F:富士通JEF

　　3)　MS-DOS形式、ﾃｷｽﾄ（可変）、区切り文字：SP、1ﾊﾞｲﾄ系：JIS、2ﾊﾞｲﾄ系：新JIS
　　12226 279   2790041 ﾁﾊﾞｹﾝ ｳﾗﾔｽｼ ﾎﾘｴ 千葉県 浦安市 堀江 0 0 1 0 0 0CR/LF
    JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJNNNNNNJNNNNNNJNNNNJJJJJJJJJJJJ
    J:JIS  N:新JIS

　　4)　MS-DOS形式、ﾃｷｽﾄ（固定）、区切り文字：NON、1ﾊﾞｲﾄ系：JIS、2ﾊﾞｲﾄ系：NEC(EJSE)、漢字識別あり
　　12226279  2790041ﾁﾊﾞｹﾝ  ｳﾗﾔｽｼ   ﾎﾘｴ     kk千葉県　浦安市　堀江　　kk001000CR/LF
　桁--5--*-5--*--7---*--8---*--25---*--80---  *---8---*---22--*--74---
　　JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJkkNNNNNNNNNNNNNNNNNNNNNNNNkkJJJJJJ
    J:JIS  k:漢字識別コード  N:NEC(EJSE)

　　5)　IBM標準,PTOS形式、1ﾊﾞｲﾄ系：EBCDIC、2ﾊﾞｲﾄ系：NEC(ｲﾝﾀｰﾅﾙ)
　　12226279  2790041ﾁﾊﾞｹﾝ  ｳﾗﾔｽｼ   ﾎﾘｴ     千葉県　浦安市　堀江　　001000CR/LF
　桁--5--*-5--*--7---*--8---*--25---*--80---*---8---*---22--*--74---
　　EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNNNEEEEEE
    J:EBCDIC  N:NEC(ｲﾝﾀｰﾅﾙ)                 ^                      ^
    ^:漢字識別コードありの場合の挿入点

　　6)　ＩＢＭ標準Ｈ型データ交換形式仕様
　　　　２５６バイト／１セクタ（０シリンダ０サイドは１２８バイト／１セクタ）
　　　　０シリンダをヘッダラベルとして使用
　　　　【ヘッダラベル】
　　　　　シリンダ　サイド　セ　ク　タ
　　　　　　　　０　　　０　０１〜０４　未使用
　　　　　　　　　　　　　　　　　０５　エラーマップ
　　　　　　　　　　　　　　　　　０６　未使用
　　　　　　　　　　　　　　　　　０７　ボリュームラベル
　　　　　　　　　　　　　　　　　　　　　ラベルＩＤ(1-4)：VOL1
　　　　　　　　　　　　　　　　　　　　　ボリュームＩＤ(5-10)：YBNXX　XX：通番
　　　　　　　　　　　　　　　　　　　　　インジケータ(72)：M
　　　　　　　　　　　　　　　　　　　　　レコード長(76)：1
　　　　　　　　　　　　　　　　　　　　　ラベルバージョン(80)：W
　　　　　　　　　　　　　　　　　０８　データセットラベル
　　　　　　　　　　　　　　　　　　　　　ラベル識別(1-4)：HDR1
　　　　　　　　　　　　　　　　　　　　　拡張ラベル標識(5)：M
　　　　　　　　　　　　　　　　　　　　　データセット名(6-13)：YUBIN7
　　　　　　　　　　　　　　　　　　　　　ブロック長(23-27)：△△256
　　　　　　　　　　　　　　　　　　　　　ＢＯＥ(29-33)：01001
　　　　　　　　　　　　　　　　　　　　　ＥＯＥ(35-39)：74126
　　　　　　　　　　　　　　　　　　　　　ＥＯＤ(75-79)：データによる
　　　　　　　　　　　　　　０９〜２６　未使用
　　　　　　　　０　　　１　０１〜２６　未使用

(5)使用・再配布・移植・改良について

　　　 日本郵便株式会社は著作権を主張しますが、「フリーソフトウェア」とします。
　　 以下の条件に従って、自由に使用していただいてかまいません。
　　1)　著作権表示を変更しないこと。
　　2)　この README.TXT を必ず添付すること。
　　3)　改変（移植・改良等）をされた場合は、改変者の氏名・連絡先などとともに
　　　改変が加えられていることを明示すること。
　　4)　このプログラムを使用したことによって生じた損害を日本郵便株式会社は保証しない。
　　5)　このプログラムに不備があっても、日本郵便株式会社はそれを訂正する義務を負わない。
　　6)　雑誌・商品などに添付して再配布する場合は、少なくとも１ヶ所には著作権
　　　表示をすること。

　　　いずれの場合も日本郵便株式会社への許諾は不要です。


付録．データの必要容量

　ＭＳ−ＤＯＳ形式　ＣＳＶ（可変）
　　　　１ＭＢ　約１０枚　　　１．４４ＭＢ　約　９枚　必要です。
　ＭＳ−ＤＯＳ形式　ＣＳＶ（固定）
　　　　１ＭＢ　約２６枚　　　１．４４ＭＢ　約２３枚　必要です。
　ＭＳ−ＤＯＳ形式　テキスト（可変）
　　　　１ＭＢ　約　８枚　　　１．４４ＭＢ　約　７枚　必要です。
　ＭＳ−ＤＯＳ形式　テキスト（固定）
　　　　１ＭＢ　約２５枚　　　１．４４ＭＢ　約２１枚　必要です。
　ＩＢＭ標準Ｈ型データ交換フォーマットでは、　３１枚　必要です。



　ＭＳ−ＤＯＳは米国 Microsoft Corporation の登録商標です。
　ＭＳ−ＷＩＮＤＯＷＳは米国 Microsoft Corporation の登録商標です。
　Ｍａｃｉｎｔｏｓｈは米国 Apple Computer,Inc. の登録商標です。
　ＰＣ−９８はNEC Corporationの登録商標です。
　ＩＢＭは米国 International Business Machines,Inc. の登録商標です。
