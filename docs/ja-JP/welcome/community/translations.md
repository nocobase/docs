# 翻訳

NocoBaseのデフォルト言語は英語で、現在、英語、簡体字中国語、日本語、ロシア語、トルコ語をサポートしています。NocoBaseを自分の言語に翻訳することが手伝えます。

NocoBaseの言語ファイルは以下の場所にあります：

```shell
packages/core/**/src/locale
packages/plugins/**/src/locale
```

NocoBaseのコア翻訳は主に以下のリンクにあります：

https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale

`en_US.ts`をコピーし、新しい言語名を付けて、その中の文字列を翻訳してください。翻訳が完了したら、プルリクエストを通じてNocoBaseに提出してください。私たちはそれを言語リストに追加します。その後、システム設定で新しい言語が表示され、ユーザーが選択できる言語として設定できます。

<img src="./translations/enabled-languages.jpg" style="max-width: 800px;"/>

以下の表には、言語文化名、ロケールファイル名、表示名が示されています。

| 言語文化名           | ロケールファイル名 | 表示名                           |
| :-------------------- | :--------------- | :---------------------------- |
| af-ZA                 | af_ZA.ts         | アフリカーンス語 - 南アフリカ      |
| sq-AL                 | sq_AL.ts         | アルバニア語 - アルバニア            |
| ar-DZ                 | ar_DZ.ts         | アラビア語 - アルジェリア              |
| ar-BH                 | ar_BH.ts         | アラビア語 - バーレーン              |
| ar-EG                 | ar_EG.ts         | アラビア語 - エジプト                |
| ar-IQ                 | ar_IQ.ts         | アラビア語 - イラク                 |
| ar-JO                 | ar_JO.ts         | アラビア語 - ヨルダン               |
| ar-KW                 | ar_KW.ts         | アラビア語 - クウェート               |
| ar-LB                 | ar_LB.ts         | アラビア語 - レバノン              |
| ar-LY                 | ar_LY.ts         | アラビア語 - リビア                |
| ar-MA                 | ar_MA.ts         | アラビア語 - モロッコ              |
| ar-OM                 | ar_OM.ts         | アラビア語 - オマーン                 |
| ar-QA                 | ar_QA.ts         | アラビア語 - カタール                |
| ar-SA                 | ar_SA.ts         | アラビア語 - サウジアラビア         |
| ar-SY                 | ar_SY.ts         | アラビア語 - シリア                |
| ar-TN                 | ar_TN.ts         | アラビア語 - チュニジア              |
| ar-AE                 | ar_AE.ts         | アラビア語 - アラブ首長国連邦 |
| ar-YE                 | ar_YE.ts         | アラビア語 - イエメン                |
| hy-AM                 | hy_AM.ts         | アルメニア語 - アルメニア            |
| Cy-az-AZ              | Cy_az_AZ.ts      | アゼルバイジャン語（キリル） - アゼルバイジャン |
| Lt-az-AZ              | Lt_az_AZ.ts      | アゼルバイジャン語（ラテン） - アゼルバイジャン    |
| eu-ES                 | eu_ES.ts         | バスク語 - バスク               |
| be-BY                 | be_BY.ts         | ベラルーシ語 - ベラルーシ          |
| bg-BG                 | bg_BG.ts         | ブルガリア語 - ブルガリア          |
| ca-ES                 | ca_ES.ts         | カタロニア語 - カタロニア             |
| zh-CN                 | zh_CN.ts         | 中国語 - 中国               |
| zh-HK                 | zh_HK.ts         | 中国語 - 香港特別行政区       |
| zh-MO                 | zh_MO.ts         | 中国語 - マカオ特別行政区           |
| zh-SG                 | zh_SG.ts         | 中国語 - シンガポール           |
| zh-TW                 | zh_TW.ts         | 中国語 - 台湾              |
| zh-CHS                | zh_CHS.ts        | 中国語（簡体字）          |
| zh-CHT                | zh_CHT.ts        | 中国語（繁体字）         |
| hr-HR                 | hr_HR.ts         | クロアチア語 - クロアチア            |
| cs-CZ                 | cs_CZ.ts         | チェコ語 - チェコ共和国        |
| da-DK                 | da_DK.ts         | デンマーク語 - デンマーク              |
| div-MV                | div_MV.ts        | ディビヒ語 - モルディブ            |
| nl-BE                 | nl_BE.ts         | オランダ語 - ベルギー               |
| nl-NL                 | nl_NL.ts         | オランダ語 - オランダ       |
| en-AU                 | en_AU.ts         | 英語 - オーストラリア           |
| en-BZ                 | en_BZ.ts         | 英語 - ベリーズ              |
| en-CA                 | en_CA.ts         | 英語 - カナダ              |

