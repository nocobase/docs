import React, { useEffect } from 'react';
import * as formulajs from '@formulajs/formulajs';
import generateFunctionsComponent from './generator/generateFunctionsComponent';

const functionsData = [
  {
    category: 'DATE',
    functions: [
      {
        title: 'DATE',
        call: 'DATE(2008, 7, 8)',
        result: 'Tue Jul 08 2008 00:00:00 GMT-0700 (PDT)',
        definition: {
          en: 'Create a date by given year, month, day.',
          cn: '根据给定的年、月和日创建日期。',
          ja: '指定された年、月、日から日付を作成します。',
        },
        parameterDefinitions: {
          en: 'year (integer), month (1-12), date (1-31)',
          cn: '年份（整数），月份（1-12），日期（1-31）。',
          ja: '年（整数）、月（1-12）、日（1-31）'
        }
      },
      {
        title: 'DATEVALUE',
        call: "DATEVALUE('8/22/2011')",
        result: 'Mon Aug 22 2011 00:00:00 GMT-0700 (PDT)',
        definition: {
          en: 'Converts a date in text format to a serial number.',
          cn: '将文本格式的日期转换为日期序列号。',
          ja: 'テキスト形式の日付をシリアル番号に変換します。',
        },
        parameterDefinitions: {
          en: 'text string representing a date',
          cn: '表示日期的文本字符串',
          ja: '日付を表す文字列'
        }
      },
      {
        title: 'DAY',
        call: "DAY('15-Apr-11')",
        result: 15,
        definition: {
          en: 'Returns the day of the specified date.',
          cn: '返回指定日期中的日部分。',
          ja: '指定された日付の日にちを返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string',
          cn: '日期值或日期文本字符串。',
          ja: '日付値または日付の文字列'
        }
      },
      {
        title: 'DAYS',
        call: "DAYS('3/15/11', '2/1/11')",
        result: 42,
        definition: {
          en: 'Calculates the number of days between two dates.',
          cn: '计算两个日期之间的天数。',
          ja: '2つの日付間の日数を計算します。',
        },
        parameterDefinitions: {
          en: 'end date, start date',
          cn: '结束日期，开始日期。',
          ja: '終了日、開始日'
        }
      },
      {
        title: 'DAYS360',
        call: "DAYS360('1-Jan-11', '31-Dec-11')",
        result: 360,
        definition: {
          en: 'Calculates the number of days between two dates based on a 360-day year.',
          cn: '基于一年360天计算两个日期间的天数。',
          ja: '360日の年に基づいて2つの日付間の日数を計算します。',
        },
        parameterDefinitions: {
          en: 'start date, end date',
          cn: '起始日期，结束日期。',
          ja: '開始日、終了日'
        }
      },
      {
        title: 'EDATE',
        call: "EDATE('1/15/11', -1)",
        result: 'Wed Dec 15 2010 00:00:00 GMT-0800 (PST)',
        definition: {
          en: 'Returns the date that is the indicated number of months before or after the start date.',
          cn: '返回指定月份数之前或之后的日期。',
          ja: '開始日から指定された月数前後にある日付を返します。',
        },
        parameterDefinitions: {
          en: 'start date, months (positive for future, negative for past)',
          cn: '起始日期，月份数（正数为将来，负数为过去）。',
          ja: '開始日、月数（未来は正、過去は負）'
        }
      },
      {
        title: 'EOMONTH',
        call: "EOMONTH('1/1/11', -3)",
        result: 'Sun Oct 31 2010 00:00:00 GMT-0700 (PDT)',
        definition: {
          en: 'Returns the last day of the month that is the indicated number of months before or after the start date.',
          cn: '返回指定月份数之前或之后的月末日期。',
          ja: '開始日から指定された月数前後にある月末の日付を返します。',
        },
        parameterDefinitions: {
          en: 'start date, months (positive for future, negative for past)',
          cn: '起始日期，月份数（正数为将来，负数为过去）。',
          ja: '開始日、月数（未来は正、過去は負）'
        }
      },
      {
        title: 'HOUR',
        call: "HOUR('7/18/2011 7:45:00 AM')",
        result: 7,
        definition: {
          en: 'Returns the hour part of a time value.',
          cn: '返回时间中的小时部分。',
          ja: '時間値の時間を返します。',
        },
        parameterDefinitions: {
          en: 'time value or time text string',
          cn: '时间值或时间文本字符串。',
          ja: '時間値または時間の文字列'
        }
      },
      {
        title: 'MINUTE',
        call: "MINUTE('2/1/2011 12:45:00 PM')",
        result: 45,
        definition: {
          en: 'Returns the minute part of a time value.',
          cn: '返回时间中的分钟部分。',
          ja: '時間値の分を返します。',
        },
        parameterDefinitions: {
          en: 'time value or time text string',
          cn: '时间值或时间文本字符串。',
          ja: '時間値または時間の文字列'
        }
      },
      {
        title: 'ISOWEEKNUM',
        call: "ISOWEEKNUM('3/9/2012')",
        result: 10,
        definition: {
          en: 'Returns the ISO week number of the year for a given date.',
          cn: '返回一年中给定日期所在的ISO周数。',
          ja: '指定された日付が属するISO週番号を返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string',
          cn: '日期值或日期文本字符串。',
          ja: '日付値または日付の文字列'
        }
      },
      {
        title: 'MONTH',
        call: "MONTH('15-Apr-11')",
        result: 4,
        definition: {
          en: 'Returns the month part of a date value.',
          cn: '返回指定日期中的月部分。',
          ja: '日付値の月を返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string',
          cn: '日期值或日期文本字符串。',
          ja: '日付値または日付の文字列'
        }
      },
      {
        title: 'NETWORKDAYS',
        call: "NETWORKDAYS('10/1/2012', '3/1/2013', ['11/22/2012'])",
        result: 109,
        definition: {
          en: 'Calculates the total number of working days between two dates, excluding weekends and specified holidays.',
          cn: '计算两个日期间的工作日数，不包括周末和指定的假期。',
          ja: '2つの日付間の平日の総数を計算し、週末と指定された休日を除きます。',
        },
        parameterDefinitions: {
          en: 'start date, end date, optional holidays array',
          cn: '开始日期，结束日期，可选假期数组。',
          ja: '開始日、終了日、オプションの休日配列'
        }
      },
      {
        title: 'NETWORKDAYSINTL',
        call: "NETWORKDAYSINTL('1/1/2006', '2/1/2006', 7, ['1/2/2006'])",
        result: 23,
        definition: {
          en: 'Calculates the total number of working days between two dates, allowing for custom weekends, and excluding specified holidays.',
          cn: '计算两个日期间的工作日数，允许自定义周末，并排除指定假期。',
          ja: '2つの日付間の平日の総数を計算し、カスタム週末を許可し、指定された休日を除きます。',
        },
        parameterDefinitions: {
          en: 'start date, end date, weekend pattern, optional holidays array',
          cn: '开始日期，结束日期，周末模式，可选假期数组。',
          ja: '開始日、終了日、週末パターン、オプションの休日配列'
        }
      },
      {
        title: 'NOW',
        call: "NOW()",
        result: 'Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)',
        definition: {
          en: 'Returns the current date and time.',
          cn: '返回当前日期和时间。',
          ja: '現在の日付と時刻を返します。',
        },
        parameterDefinitions: {
          en: 'no parameters',
          cn: '无参数。',
          ja: 'パラメータなし'
        }
      },
      {
        title: 'SECOND',
        call: "SECOND('2/1/2011 4:48:18 PM')",
        result: 18,
        definition: {
          en: 'Returns the second part of a time value.',
          cn: '返回时间中的秒部分。',
          ja: '時間値の秒を返します。',
        },
        parameterDefinitions: {
          en: 'time value or time text string',
          cn: '时间值或时间文本字符串。',
          ja: '時間値または時間の文字列'
        }
      },
      {
        title: 'TIME',
        call: 'TIME(16, 48, 10)',
        result: 0.7001157407407408,
        definition: {
          en: 'Creates a time from the given hour, minute, and second.',
          cn: '根据给定的小时、分钟和秒创建时间。',
          ja: '指定された時間、分、秒から時間を作成します。',
        },
        parameterDefinitions: {
          en: 'hour (0-23), minute (0-59), second (0-59)',
          cn: '小时（0-23），分钟（0-59），秒（0-59）。',
          ja: '時間（0-23）、分（0-59）、秒（0-59）'
        }
      },
      {
        title: 'TIMEVALUE',
        call: "TIMEVALUE('22-Aug-2011 6:35 AM')",
        result: 0.2743055555555556,
        definition: {
          en: 'Converts a time in text format to a time serial number.',
          cn: '将文本格式的时间转换为时间序列号。',
          ja: 'テキスト形式の時間を時間のシリアル番号に変換します。',
        },
        parameterDefinitions: {
          en: 'text string representing a time',
          cn: '文本字符串，表示时间。',
          ja: '時間を表す文字列'
        }
      },
      {
        title: 'TODAY',
        call: "TODAY()",
        result: 'Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)',
        definition: {
          en: 'Returns the current date.',
          cn: '返回今天的日期。',
          ja: '今日の日付を返します。',
        },
        parameterDefinitions: {
          en: 'no parameters',
          cn: '无参数。',
          ja: 'パラメータなし'
        }
      },
      {
        title: 'WEEKDAY',
        call: "WEEKDAY('2/14/2008', 3)",
        result: 3,
        definition: {
          en: 'Returns the day of the week as a number.',
          cn: '返回一周中某一天的数字。',
          ja: '週の日にちを数値で返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string, return type (1-3)',
          cn: '日期值或日期文本字符串，返回类型（1-3）。',
          ja: '日付値または日付の文字列、戻り値のタイプ（1-3）'
        }
      },
      {
        title: 'YEAR',
        call: "YEAR('7/5/2008')",
        result: 2008,
        definition: {
          en: 'Returns the year part of a date value.',
          cn: '返回指定日期中的年部分。',
          ja: '日付値の年を返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string',
          cn: '日期值或日期文本字符串。',
          ja: '日付値または日付の文字列'
        }
      },
      {
        title: 'WEEKNUM',
        call: "WEEKNUM('3/9/2012', 2)",
        result: 11,
        definition: {
          en: 'Returns the week number of the year for a given date.',
          cn: '返回一年中给定日期所在的周数。',
          ja: '指定された日付が属する週番号を返します。',
        },
        parameterDefinitions: {
          en: 'date value or date text string, optional week start day (1=Sunday, 2=Monday)',
          cn: '日期值或日期文本字符串，可选周开始日（1=星期日，2=星期一）。',
          ja: '日付値または日付の文字列、オプションの週の開始日（1=日曜日、2=月曜日）'
        }
      },
      {
        title: 'WORKDAY',
        call: "WORKDAY('10/1/2008', 151, ['11/26/2008', '12/4/2008'])",
        result: 'Mon May 04 2009 00:00:00 GMT-0700 (PDT)',
        definition: {
          en: 'Returns the date that is the indicated number of workdays before or after the start date, excluding weekends and specified holidays.',
          cn: '返回从起始日期起指定工作日数之前或之后的日期，不包括周末和指定的假期。',
          ja: '開始日から指定された作業日前後にある日付を返し、週末と指定された休日を除きます。',
        },
        parameterDefinitions: {
          en: 'start date, workdays, optional holidays array',
          cn: '起始日期，工作日数，可选假期数组。',
          ja: '開始日、作業日数、オプションの休日配列'
        }
      },
      {
        title: 'WORKDAYINTL',
        call: "WORKDAYINTL('1/1/2012', 30, 17)",
        result: 'Sun Feb 05 2012 00:00:00 GMT-0800 (PST)',
        definition: {
          en: 'Returns the date that is the indicated number of workdays before or after the start date, allowing for custom weekends, and excluding specified holidays.',
          cn: '返回从起始日期起指定工作日数之前或之后的日期，允许自定义周末，并排除指定假期。',
          ja: '開始日から指定された作業日前後にある日付を返し、カスタム週末を許可し、指定された休日を除きます。',
        },
        parameterDefinitions: {
          en: 'start date, workdays, weekend pattern',
          cn: '起始日期，工作日数，周末模式。',
          ja: '開始日、作業日数、週末パターン'
        }
      },
      {
        title: 'YEARFRAC',
        call: "YEARFRAC('1/1/2012', '7/30/2012', 3)",
        result: 0.5780821917808219,
        definition: {
          en: 'Calculates the fraction of the year represented by the number of whole days between two dates.',
          cn: '计算两个日期之间的年分数。',
          ja: '2つの日付間の全日数が表す年の分数を計算します。',
        },
        parameterDefinitions: {
          en: 'start date, end date, optional basis (day count basis)',
          cn: '开始日期，结束日期，可选基础（日计数基准）。',
          ja: '開始日、終了日、オプションのベース（日数の基準）'
        }
      }
    ]
  },
  {
    category: 'FINANCIAL',
    functions: [
      {
        title: 'ACCRINT',
        call: "ACCRINT('01/01/2011', '02/01/2011', '07/01/2014', 0.1, 1000, 1, 0)",
        result: 350,
        definition: {
          en: 'Calculate the accrued interest for a security that pays periodic interest.',
          cn: '计算定期支付利息的有价证券的应计利息。',
          ja: '定期的な利払いをする証券の付利金を計算します。'
        },
        parameterDefinitions: {
          en: "start_date, first_interest, settlement, rate, par, frequency, basis",
          cn: "起始日期，首次支付利息日期，结算日期，年利率，面值，期间数，基础。",
          ja: "開始日、最初の利払日、決済日、利率、額面、頻度、基準"
        }
      },
      {
        title: 'CUMIPMT',
        call: "CUMIPMT(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -9916.77251395708,
        definition: {
          en: 'Calculate the cumulative interest paid on a loan between start and end periods.',
          cn: '计算一系列付款中累积的利息支付。',
          ja: '開始期間と終了期間の間に支払われるローンの累積利息を計算します。'
        },
        parameterDefinitions: {
          en: "rate, nper, pv, start_period, end_period, type",
          cn: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。",
          ja: "利率、総期間、現在価値、開始期間、終了期間、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'CUMPRINC',
        call: "CUMPRINC(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -614.0863271085149,
        definition: {
          en: 'Calculate the cumulative principal paid on a loan between start and end periods.',
          cn: '计算一系列付款中累积的本金支付。',
          ja: '開始期間と終了期間の間に支払われるローンの累積元本を計算します。'
        },
        parameterDefinitions: {
          en: "rate, nper, pv, start_period, end_period, type",
          cn: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。",
          ja: "利率、総期間、現在価値、開始期間、終了期間、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'DB',
        call: "DB(1000000, 100000, 6, 1, 6)",
        result: 159500,
        definition: {
          en: 'Calculate the depreciation of an asset for a specified period using the fixed-declining balance method.',
          cn: '使用固定余额递减法计算折旧。',
          ja: '固定残価逓減法を使用して指定された期間の資産の減価償却を計算します。'
        },
        parameterDefinitions: {
          en: "cost, salvage, life, period, month",
          cn: "成本，残值，使用寿命，期间，月份。",
          ja: "原価、残価、耐用年数、期間、月数"
        }
      },
      {
        title: 'DDB',
        call: "DDB(1000000, 100000, 6, 1, 1.5)",
        result: 250000,
        definition: {
          en: 'Calculate the depreciation of an asset for a specified period using the double-declining balance method or another specified method.',
          cn: '使用双倍余额递减法或其他指定方法计算折旧。',
          ja: '二重残価逓減法または他の指定された方法を使用して指定された期間の資産の減価償却を計算します。'
        },
        parameterDefinitions: {
          en: "cost, salvage, life, period, factor",
          cn: "成本，残值，使用寿命，期间，因子。",
          ja: "原価、残価、耐用年数、期間、係数"
        }
      },
      {
        title: 'DOLLARDE',
        call: "DOLLARDE(1.1, 16)",
        result: 1.625,
        definition: {
          en: 'Converts a dollar price expressed as a fraction into a decimal number.',
          cn: '将分数表示的价格转换为小数表示。',
          ja: '分数で表現されたドル価格を小数に変換します。'
        },
        parameterDefinitions: {
          en: "fractional_dollar, fraction",
          cn: "分数形式的美元价格，分母。",
          ja: "分数形式のドル価格、分母"
        }
      },
      {
        title: 'DOLLARFR',
        call: "DOLLARFR(1.625, 16)",
        result: 1.1,
        definition: {
          en: 'Converts a dollar price expressed as a decimal number into a fractional dollar.',
          cn: '将小数表示的价格转换为分数表示。',
          ja: '小数で表現されたドル価格を分数のドルに変換します。'
        },
        parameterDefinitions: {
          en: "decimal_dollar, fraction",
          cn: "小数形式的美元价格，分母。",
          ja: "小数形式のドル価格、分母"
        }
      },
      {
        title: 'EFFECT',
        call: "EFFECT(0.1, 4)",
        result: 0.10381289062499977,
        definition: {
          en: 'Calculate the effective annual interest rate.',
          cn: '计算实际年利率。',
          ja: '実際の年間利率を計算します。'
        },
        parameterDefinitions: {
          en: "nominal_rate, npery",
          cn: "名义年利率，每年复利次数。",
          ja: "名目年利率、年複利回数"
        }
      },
      {
        title: 'FV',
        call: "FV(0.1/12, 10, -100, -1000, 0)",
        result: 2124.874409194097,
        definition: {
          en: 'Calculate the future value of an investment.',
          cn: '计算投资的未来价值。',
          ja: '投資の将来価値を計算します。'
        },
        parameterDefinitions: {
          en: "rate, nper, pmt, pv, type",
          cn: "每期利率，期数，每期支付额，现值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間数、各期支払額、現在価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'FVSCHEDULE',
        call: "FVSCHEDULE(100, [0.09,0.1,0.11])",
        result: 133.08900000000003,
        definition: {
          en: 'Calculate the future value of an initial principal after applying a series of compound interest rates.',
          cn: '根据一系列复利率计算本金的未来价值。',
          ja: '一連の複利利率を適用した後の初期元本の将来価値を計算します。'
        },
        parameterDefinitions: {
          en: "principal, schedule",
          cn: "本金，利率数组。",
          ja: "元本、利率スケジュール"
        }
      },
      {
        title: 'IPMT',
        call: "IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: 928.8235718400465,
        definition: {
          en: 'Calculate the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.',
          cn: '计算特定期间内的利息支付。',
          ja: '一定の利率と定期的な定額返済に基づく投資の特定期間の利息支払を計算します。'
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv, fv, type",
          cn: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'IRR',
        call: "IRR([-75000,12000,15000,18000,21000,24000], 0.075)",
        result: 0.05715142887178447,
        definition: {
          en: 'Calculate the internal rate of return for a series of cash flows.',
          cn: '计算内部收益率。',
          ja: '一連のキャッシュフローの内部収益率を計算します。'
        },
        parameterDefinitions: {
          en: "values, guess",
          cn: "现金流数组，估计值。",
          ja: "キャッシュフロー配列、推定値"
        }
      },
      {
        title: 'ISPMT',
        call: "ISPMT(0.1/12, 6, 2*12, 100000)",
        result: -625,
        definition: {
          en: 'Calculate the interest paid during a specific period of a loan.',
          cn: '计算特定期间内的利息支付（适用于贷款）。',
          ja: 'ローンの特定期間の利息支払を計算します。'
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv",
          cn: "每期利率，期间，总期数，贷款金额。",
          ja: "各期利率、期間、総期間、ローン額"
        }
      },
      {
        title: 'MIRR',
        call: "MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)",
        result: 0.07971710360838036,
        definition: {
          en: 'Calculate the modified internal rate of return for a series of periodic cash flows.',
          cn: '计算修正内部收益率。',
          ja: '一連の定期的なキャッシュフローの修正内部収益率を計算します。'
        },
        parameterDefinitions: {
          en: "values, finance_rate, reinvest_rate",
          cn: "现金流数组，融资利率，再投资利率。",
          ja: "キャッシュフロー配列、財務利率、再投資利率"
        }
      },
      {
        title: 'NOMINAL',
        call: "NOMINAL(0.1, 4)",
        result: 0.09645475633778045,
        definition: {
          en: 'Calculate the nominal annual interest rate.',
          cn: '计算名义年利率。',
          ja: '名目の年間利率を計算します。'
        },
        parameterDefinitions: {
          en: "effect_rate, npery",
          cn: "实际年利率，每年复利次数。",
          ja: "実際の年間利率、年複利回数"
        }
      },
      {
        title: 'NPER',
        call: "NPER(0.1/12, -100, -1000, 10000, 0)",
        result: 63.39385422740764,
        definition: {
          en: 'Calculate the number of periods for an investment based on periodic, constant payments and a constant interest rate.',
          cn: '计算达到目标值所需的期数。',
          ja: '一定の利率と定期的な定額返済に基づく投資の期間数を計算します。'
        },
        parameterDefinitions: {
          en: "rate, pmt, pv, fv, type",
          cn: "每期利率，每期支付额，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、各期支払額、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'NPV',
        call: "NPV(0.1, -10000, 2000, 4000, 8000)",
        result: 1031.3503176012546,
        definition: {
          en: 'Calculate the net present value of an investment based on a series of future cash flows and a discount rate for each period.',
          cn: '计算一系列未来现金流的净现值。',
          ja: '各期間の割引率に基づく一連の将来のキャッシュフローによる投資の純現在価値を計算します。'
        },
        parameterDefinitions: {
          en: "rate, value1, value2, ...",
          cn: "每期折现率，现金流数组。",
          ja: "各期割引率、キャッシュフロー配列"
        }
      },
      {
        title: 'PDURATION',
        call: "PDURATION(0.1, 1000, 2000)",
        result: 7.272540897341714,
        definition: {
          en: 'Calculate the number of periods required for an investment to reach a specified value.',
          cn: '计算达到特定值所需的时间。',
          ja: '投資が指定された価値に到達するのに必要な期間数を計算します。'
        },
        parameterDefinitions: {
          en: "rate, pv, fv",
          cn: "每期利率，现值，未来值。",
          ja: "各期利率、現在価値、将来価値"
        }
      },
      {
        title: 'PMT',
        call: "PMT(0.1/12, 2*12, 1000, 10000, 0)",
        result: -42426.08563793503,
        definition: {
          en: 'Calculate the payment for a loan based on constant payments and a constant interest rate.',
          cn: '计算贷款的每期支付额。',
          ja: '一定の利率と定額返済に基づくローンの各期支払を計算します。'
        },
        parameterDefinitions: {
          en: "rate, nper, pv, fv, type",
          cn: "每期利率，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'PPMT',
        call: "PPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: -43354.909209775076,
        definition: {
          en: 'Calculate the principal payment for a given period for an investment based on periodic, constant payments and a constant interest rate.',
          cn: '计算特定期间内的本金支付。',
          ja: '一定の利率と定期的な定額返済に基づく投資の特定期間の元本支払を計算します。'
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv, fv, type",
          cn: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'PV',
        call: "PV(0.1/12, 2*12, 1000, 10000, 0)",
        result: -29864.950264779152,
        definition: {
          en: 'Calculate the present value of an investment.',
          cn: '计算投资的现值。',
          ja: '投資の現在価値を計算します。'
        },
        parameterDefinitions: {
          en: "rate, nper, pmt, fv, type",
          cn: "每期利率，期数，每期支付额，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間数、各期支払額、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: 'RATE',
        call: "RATE(2*12, -1000, -10000, 100000, 0, 0.1)",
        result: 0.06517891177181533,
        definition: {
          en: 'Calculate the interest rate per period of an annuity.',
          cn: '计算每期利率。',
          ja: '年金の各期利率を計算します。'
        },
        parameterDefinitions: {
          en: "nper, pmt, pv, fv, type, guess",
          cn: "总期数，每期支付额，现值，未来值，支付类型（0=期末，1=期初），估计值。",
          ja: "総期間、各期支払額、現在価値、将来価値、タイプ（0=期末、1=期初）、推定値"
        }
      }
    ]
  },
  {
    category: 'ENGINEERING',
    functions: [
      {
        title: 'BIN2DEC',
        call: "BIN2DEC(101010)",
        result: 42,
        definition: {
          en: 'Convert a binary number to decimal.',
          cn: '将二进制数转换为十进制数。',
          ja: '2進数を10進数に変換します。'
        },
        parameterDefinitions: {
          en: "binary_number",
          cn: "二进制数值。",
          ja: "2進数値"
        }
      },
      {
        title: 'BIN2HEX',
        call: "BIN2HEX(101010)",
        result: '2a',
        definition: {
          en: 'Convert a binary number to hexadecimal.',
          cn: '将二进制数转换为十六进制数。',
          ja: '2進数を16進数に変換します。'
        },
        parameterDefinitions: {
          en: "binary_number",
          cn: "二进制数值。",
          ja: "2進数値"
        }
      },
      {
        title: 'BIN2OCT',
        call: "BIN2OCT(101010)",
        result: '52',
        definition: {
          en: 'Convert a binary number to octal.',
          cn: '将二进制数转换为八进制数。',
          ja: '2進数を8進数に変換します。'
        },
        parameterDefinitions: {
          en: "binary_number",
          cn: "二进制数值。",
          ja: "2進数値"
        }
      },
      {
        title: 'BITAND',
        call: "BITAND(42, 24)",
        result: 8,
        definition: {
          en: 'Perform a bitwise AND operation on two numbers.',
          cn: '执行两个数字的按位与运算。',
          ja: '2つの数値に対してビットごとのAND演算を行います。'
        },
        parameterDefinitions: {
          en: "integer, integer",
          cn: "整数，整数。",
          ja: "整数、整数"
        }
      },
      {
        title: 'BITLSHIFT',
        call: "BITLSHIFT(42, 24)",
        result: 704643072,
        definition: {
          en: 'Shift a number left by the specified amount of bits.',
          cn: '对数字进行左移位操作。',
          ja: '指定されたビット数だけ数値を左シフトします。'
        },
        parameterDefinitions: {
          en: "integer, shift_amount",
          cn: "整数，移位量。",
          ja: "整数、シフト量"
        }
      },
      {
        title: 'BITOR',
        call: "BITOR(42, 24)",
        result: 58,
        definition: {
          en: 'Perform a bitwise OR operation on two numbers.',
          cn: '执行两个数字的按位或运算。',
          ja: '2つの数値に対してビットごとのOR演算を行います。'
        },
        parameterDefinitions: {
          en: "integer, integer",
          cn: "整数，整数。",
          ja: "整数、整数"
        }
      },
      {
        title: 'BITRSHIFT',
        call: "BITRSHIFT(42, 2)",
        result: 10,
        definition: {
          en: 'Shift a number right by the specified amount of bits.',
          cn: '对数字进行右移位操作。',
          ja: '指定されたビット数だけ数値を右シフトします。'
        },
        parameterDefinitions: {
          en: "integer, shift_amount",
          cn: "整数，移位量。",
          ja: "整数、シフト量"
        }
      },
      {
        title: 'BITXOR',
        call: "BITXOR(42, 24)",
        result: 50,
        definition: {
          en: 'Perform a bitwise XOR operation on two numbers.',
          cn: '执行两个数字的按位异或运算。',
          ja: '2つの数値に対してビットごとのXOR演算を行います。'
        },
        parameterDefinitions: {
          en: "integer, integer",
          cn: "整数，整数。",
          ja: "整数、整数"
        }
      },
      {
        title: 'COMPLEX',
        call: "COMPLEX(3, 4)",
        result: '3+4i',
        definition: {
          en: 'Create a complex number.',
          cn: '创建复数。',
          ja: '複素数を作成します。'
        },
        parameterDefinitions: {
          en: "real_part, imaginary_part",
          cn: "实部，虚部。",
          ja: "実数部、虚数部"
        }
      },
      {
        title: 'CONVERT',
        call: "CONVERT(64, 'kibyte', 'bit')",
        result: 524288,
        definition: {
          en: 'Convert a value from one measurement system to another.',
          cn: '在不同单位之间转换数值。',
          ja: '異なる単位系間で値を変換します。'
        },
        parameterDefinitions: {
          en: "value, from_unit, to_unit",
          cn: "数值，原始单位，目标单位。",
          ja: "値、元の単位、目標単位"
        }
      },
      {
        title: 'DEC2BIN',
        call: "DEC2BIN(42)",
        result: '101010',
        definition: {
          en: 'Convert a decimal number to binary.',
          cn: '将十进制数转换为二进制数。',
          ja: '10進数を2進数に変換します。'
        },
        parameterDefinitions: {
          en: "decimal_number",
          cn: "十进制数值。",
          ja: "10進数値"
        }
      },
      {
        title: 'DEC2HEX',
        call: "DEC2HEX(42)",
        result: '2a',
        definition: {
          en: 'Convert a decimal number to hexadecimal.',
          cn: '将十进制数转换为十六进制数。',
          ja: '10進数を16進数に変換します。'
        },
        parameterDefinitions: {
          en: "decimal_number",
          cn: "十进制数值。",
          ja: "10進数値"
        }
      },
      {
        title: 'DEC2OCT',
        call: "DEC2OCT(42)",
        result: '52',
        definition: {
          en: 'Convert a decimal number to octal.',
          cn: '将十进制数转换为八进制数。',
          ja: '10進数を8進数に変換します。'
        },
        parameterDefinitions: {
          en: "decimal_number",
          cn: "十进制数值。",
          ja: "10進数値"
        }
      },
      {
        title: 'DELTA',
        call: "DELTA(42, 42)",
        result: 1,
        definition: {
          en: 'Test whether two values are equal.',
          cn: '测试两个值是否相等。',
          ja: '2つの値が等しいかどうかをテストします。'
        },
        parameterDefinitions: {
          en: "value, value",
          cn: "数值，数值。",
          ja: "値、値"
        }
      },
      {
        title: 'ERF',
        call: "ERF(1)",
        result: 0.8427007929497149,
        definition: {
          en: 'Calculate the error function.',
          cn: '计算误差函数。',
          ja: '誤差関数を計算します。'
        },
        parameterDefinitions: {
          en: "upper_limit",
          cn: "上限。",
          ja: "上限"
        }
      },
      {
        title: 'ERFC',
        call: "ERFC(1)",
        result: 0.1572992070502851,
        definition: {
          en: 'Calculate the complementary error function.',
          cn: '计算互补误差函数。',
          ja: '相補誤差関数を計算します。'
        },
        parameterDefinitions: {
          en: "lower_limit",
          cn: "下限。",
          ja: "下限"
        }
      },
      {
        title: 'GESTEP',
        call: "GESTEP(42, 24)",
        result: 1,
        definition: {
          en: 'Test if one number is greater than or equal to another.',
          cn: '测试一个数是否大于或等于另一个数。',
          ja: '1つの数値が別の数値以上かどうかをテストします。'
        },
        parameterDefinitions: {
          en: "value, threshold",
          cn: "数值，阈值。",
          ja: "値、閾値"
        }
      },
      {
        title: 'HEX2BIN',
        call: "HEX2BIN('2a')",
        result: '101010',
        definition: {
          en: 'Convert a hexadecimal number to binary.',
          cn: '将十六进制数转换为二进制数。',
          ja: '16進数を2進数に変換します。'
        },
        parameterDefinitions: {
          en: "hexadecimal_number",
          cn: "十六进制数值。",
          ja: "16進数値"
        }
      },
      {
        title: 'HEX2DEC',
        call: "HEX2DEC('2a')",
        result: 42,
        definition: {
          en: 'Convert a hexadecimal number to decimal.',
          cn: '将十六进制数转换为十进制数。',
          ja: '16進数を10進数に変換します。'
        },
        parameterDefinitions: {
          en: "hexadecimal_number",
          cn: "十六进制数值。",
          ja: "16進数値"
        }
      },
      {
        title: 'HEX2OCT',
        call: "HEX2OCT('2a')",
        result: '52',
        definition: {
          en: 'Convert a hexadecimal number to octal.',
          cn: '将十六进制数转换为八进制数。',
          ja: '16進数を8進数に変換します。'
        },
        parameterDefinitions: {
          en: "hexadecimal_number",
          cn: "十六进制数值。",
          ja: "16進数値"
        }
      },
      {
        title: 'IMABS',
        call: "IMABS('3+4i')",
        result: 5,
        definition: {
          en: 'Calculate the absolute value (modulus) of a complex number.',
          cn: '计算复数的绝对值（模）。',
          ja: '複素数の絶対値（モジュラス）を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMAGINARY',
        call: "IMAGINARY('3+4i')",
        result: 4,
        definition: {
          en: 'Return the imaginary part of a complex number.',
          cn: '返回复数的虚部。',
          ja: '複素数の虚数部を返します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMARGUMENT',
        call: "IMARGUMENT('3+4i')",
        result: 0.9272952180016122,
        definition: {
          en: 'Calculate the argument of a complex number.',
          cn: '计算复数的幅角。',
          ja: '複素数の偏角を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCONJUGATE',
        call: "IMCONJUGATE('3+4i')",
        result: '3-4i',
        definition: {
          en: 'Calculate the conjugate of a complex number.',
          cn: '计算复数的共轭。',
          ja: '複素数の共役を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCOS',
        call: "IMCOS('1+i')",
        result: '0.8337300251311491-0.9888977057628651i',
        definition: {
          en: 'Calculate the cosine of a complex number.',
          cn: '计算复数的余弦。',
          ja: '複素数の余弦を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCOSH',
        call: "IMCOSH('1+i')",
        result: '0.8337300251311491+0.9888977057628651i',
        definition: {
          en: 'Calculate the hyperbolic cosine of a complex number.',
          cn: '计算复数的双曲余弦。',
          ja: '複素数の双曲線余弦を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCOT',
        call: "IMCOT('1+i')",
        result: '0.21762156185440265-0.8680141428959249i',
        definition: {
          en: 'Calculate the cotangent of a complex number.',
          cn: '计算复数的余切。',
          ja: '複素数の余接を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCSC',
        call: "IMCSC('1+i')",
        result: '0.6215180171704283-0.3039310016284264i',
        definition: {
          en: 'Calculate the cosecant of a complex number.',
          cn: '计算复数的余割。',
          ja: '複素数の余割を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMCSCH',
        call: "IMCSCH('1+i')",
        result: '0.3039310016284264-0.6215180171704283i',
        definition: {
          en: 'Calculate the hyperbolic cosecant of a complex number.',
          cn: '计算复数的双曲余割。',
          ja: '複素数の双曲線余割を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMDIV',
        call: "IMDIV('1+2i', '3+4i')",
        result: '0.44+0.08i',
        definition: {
          en: 'Calculate the division of two complex numbers.',
          cn: '计算两个复数的除法。',
          ja: '2つの複素数の除算を計算します。'
        },
        parameterDefinitions: {
          en: "dividend, divisor",
          cn: "被除复数，除复数。",
          ja: "被除数、除数"
        }
      },
      {
        title: 'IMEXP',
        call: "IMEXP('1+i')",
        result: '1.4686939399158851+2.2873552871788423i',
        definition: {
          en: 'Calculate the exponential of a complex number.',
          cn: '计算复数的指数。',
          ja: '複素数の指数を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMLN',
        call: "IMLN('1+i')",
        result: '0.3465735902799727+0.7853981633974483i',
        definition: {
          en: 'Calculate the natural logarithm of a complex number.',
          cn: '计算复数的自然对数。',
          ja: '複素数の自然対数を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMLOG10',
        call: "IMLOG10('1+i')",
        result: '0.1505149978319906+0.3410940884604603i',
        definition: {
          en: 'Calculate the base-10 logarithm of a complex number.',
          cn: '计算复数的以10为底的对数。',
          ja: '複素数の常用対数を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMLOG2',
        call: "IMLOG2('1+i')",
        result: '0.5000000000000001+1.1330900354567985i',
        definition: {
          en: 'Calculate the base-2 logarithm of a complex number.',
          cn: '计算复数的以2为底的对数。',
          ja: '複素数の2進対数を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMPOWER',
        call: "IMPOWER('1+i', 2)",
        result: '1.2246063538223775e-16+2.0000000000000004i',
        definition: {
          en: 'Calculate the power of a complex number.',
          cn: '计算复数的幂。',
          ja: '複素数の冪を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number, power",
          cn: "复数，幂次。",
          ja: "複素数、冪"
        }
      },
      {
        title: 'IMPRODUCT',
        call: "IMPRODUCT('1+2i', '3+4i', '5+6i')",
        result: '-85+20i',
        definition: {
          en: 'Calculate the product of multiple complex numbers.',
          cn: '计算多个复数的乘积。',
          ja: '複数の複素数の積を計算します。'
        },
        parameterDefinitions: {
          en: "array_of_complex_numbers",
          cn: "复数数组。",
          ja: "複素数配列"
        }
      },
      {
        title: 'IMREAL',
        call: "IMREAL('3+4i')",
        result: 3,
        definition: {
          en: 'Return the real part of a complex number.',
          cn: '返回复数的实部。',
          ja: '複素数の実数部を返します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSEC',
        call: "IMSEC('1+i')",
        result: '0.4983370305551868+0.591083841721045i',
        definition: {
          en: 'Calculate the secant of a complex number.',
          cn: '计算复数的正割。',
          ja: '複素数の正割を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSECH',
        call: "IMSECH('1+i')",
        result: '0.4983370305551868-0.591083841721045i',
        definition: {
          en: 'Calculate the hyperbolic secant of a complex number.',
          cn: '计算复数的双曲正割。',
          ja: '複素数の双曲線正割を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSIN',
        call: "IMSIN('1+i')",
        result: '1.2984575814159773+0.6349639147847361i',
        definition: {
          en: 'Calculate the sine of a complex number.',
          cn: '计算复数的正弦。',
          ja: '複素数の正弦を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSINH',
        call: "IMSINH('1+i')",
        result: '0.6349639147847361+1.2984575814159773i',
        definition: {
          en: 'Calculate the hyperbolic sine of a complex number.',
          cn: '计算复数的双曲正弦。',
          ja: '複素数の双曲線正弦を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSQRT',
        call: "IMSQRT('1+i')",
        result: '1.0986841134678098+0.45508986056222733i',
        definition: {
          en: 'Calculate the square root of a complex number.',
          cn: '计算复数的平方根。',
          ja: '複素数の平方根を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'IMSUB',
        call: "IMSUB('3+4i', '1+2i')",
        result: '2+2i',
        definition: {
          en: 'Calculate the subtraction of two complex numbers.',
          cn: '计算两个复数的减法。',
          ja: '2つの複素数の減算を計算します。'
        },
        parameterDefinitions: {
          en: "minuend, subtrahend",
          cn: "被减复数，减复数。",
          ja: "被減数、減数"
        }
      },
      {
        title: 'IMSUM',
        call: "IMSUM('1+2i', '3+4i', '5+6i')",
        result: '9+12i',
        definition: {
          en: 'Calculate the sum of multiple complex numbers.',
          cn: '计算多个复数的和。',
          ja: '複数の複素数の和を計算します。'
        },
        parameterDefinitions: {
          en: "array_of_complex_numbers",
          cn: "复数数组。",
          ja: "複素数配列"
        }
      },
      {
        title: 'IMTAN',
        call: "IMTAN('1+i')",
        result: '0.2717525853195117+1.0839233273386946i',
        definition: {
          en: 'Calculate the tangent of a complex number.',
          cn: '计算复数的正切。',
          ja: '複素数の正接を計算します。'
        },
        parameterDefinitions: {
          en: "complex_number",
          cn: "复数。",
          ja: "複素数"
        }
      },
      {
        title: 'OCT2BIN',
        call: "OCT2BIN('52')",
        result: '101010',
        definition: {
          en: 'Convert an octal number to binary.',
          cn: '将八进制数转换为二进制数。',
          ja: '8進数を2進数に変換します。'
        },
        parameterDefinitions: {
          en: "octal_number",
          cn: "八进制数值。",
          ja: "8進数値"
        }
      },
      {
        title: 'OCT2DEC',
        call: "OCT2DEC('52')",
        result: 42,
        definition: {
          en: 'Convert an octal number to decimal.',
          cn: '将八进制数转换为十进制数。',
          ja: '8進数を10進数に変換します。'
        },
        parameterDefinitions: {
          en: "octal_number",
          cn: "八进制数值。",
          ja: "8進数値"
        }
      },
      {
        title: 'OCT2HEX',
        call: "OCT2HEX('52')",
        result: '2a',
        definition: {
          en: 'Convert an octal number to hexadecimal.',
          cn: '将八进制数转换为十六进制数。',
          ja: '8進数を16進数に変換します。'
        },
        parameterDefinitions: {
          en: "octal_number",
          cn: "八进制数值。",
          ja: "8進数値"
        }
      }
    ]
  },
  {
    category: 'LOGICAL',
    functions: [
      {
        title: 'AND',
        call: "AND(true, false, true)",
        result: false,
        definition: {
          en: 'Returns true if all arguments are true, otherwise returns false.',
          cn: '当所有参数都为真时返回真，否则返回假。',
          ja: 'すべての引数が真である場合にのみ真を返し、それ以外は偽を返します。'
        },
        parameterDefinitions: {
          en: "One or more logical values (boolean). The function returns true only if all arguments are true.",
          cn: "参数是一个或多个逻辑值（布尔值），只有所有参数均为真时函数才返回真。",
          ja: "1つ以上の論理値（ブール値）。すべての引数が真である場合にのみ関数は真を返します。"
        }
      },
      {
        title: 'FALSE',
        call: "FALSE()",
        result: false,
        definition: {
          en: 'Returns the logical value false.',
          cn: '返回逻辑值假。',
          ja: '論理値偽を返します。'
        },
        parameterDefinitions: {
          en: "No parameters.",
          cn: "无参数。",
          ja: "パラメータなし。"
        }
      },
      {
        title: 'IF',
        call: "IF(true, 'Hello!', 'Goodbye!')",
        result: 'Hello!',
        definition: {
          en: 'Returns one value if a condition is true and another value if it is false.',
          cn: '根据条件的真假返回不同的值。',
          ja: '条件が真の場合と偽の場合で異なる値を返します。'
        },
        parameterDefinitions: {
          en: "Condition, value if true, value if false.",
          cn: "条件，条件为真时的值，条件为假时的值。",
          ja: "条件、条件が真のときの値、条件が偽のときの値。"
        }
      },
      {
        title: 'IFS',
        call: "IFS(false, 'Hello!', true, 'Goodbye!')",
        result: 'Goodbye!',
        definition: {
          en: 'Checks multiple conditions and returns the value of the first true condition.',
          cn: '检查多个条件，并返回第一个为真的结果值。',
          ja: '複数の条件をチェックし、最初の真の条件の値を返します。'
        },
        parameterDefinitions: {
          en: "Multiple pairs of conditions and corresponding values, in pairs.",
          cn: "多对条件和对应的值，成对出现。",
          ja: "複数の条件と対応する値のペア、ペアで指定します。"
        }
      },
      {
        title: 'NOT',
        call: "NOT(true)",
        result: false,
        definition: {
          en: 'Reverses the logic of its argument, true becomes false, and false becomes true.',
          cn: '反转逻辑值，真变假，假变真。',
          ja: '引数の論理値を反転させます。真は偽になり、偽は真になります。'
        },
        parameterDefinitions: {
          en: "A single logical value (boolean).",
          cn: "一个逻辑值（布尔值）。",
          ja: "単一の論理値（ブール値）。"
        }
      },
      {
        title: 'OR',
        call: "OR(true, false, true)",
        result: true,
        definition: {
          en: 'Returns true if any argument is true, otherwise returns false.',
          cn: '当任一参数为真时返回真，否则返回假。',
          ja: '任意の引数が真であれば真を返し、それ以外は偽を返します。'
        },
        parameterDefinitions: {
          en: "One or more logical values (boolean), returns true if at least one argument is true.",
          cn: "参数是一个或多个逻辑值（布尔值），只要有一个参数为真函数即返回真。",
          ja: "1つ以上の論理値（ブール値）、少なくとも1つの引数が真であれば真を返します。"
        }
      },
      {
        title: 'SWITCH',
        call: "SWITCH(7, 9, 'Nine', 7, 'Seven')",
        result: 'Seven',
        definition: {
          en: 'Evaluates an expression and returns a matching result; if no match is found, returns a default value.',
          cn: '根据表达式的值返回匹配的结果值，若无匹配则返回默认值。',
          ja: '式の値に基づいて一致する結果を返し、一致しない場合はデフォルト値を返します。'
        },
        parameterDefinitions: {
          en: "Expression, match value 1, result value 1, ..., [default value].",
          cn: "表达式，匹配值1，结果值1，...，[默认值]。",
          ja: "式、一致値1、結果値1、...、[デフォルト値]。"
        }
      },
      {
        title: 'TRUE',
        call: "TRUE()",
        result: true,
        definition: {
          en: 'Returns the logical value true.',
          cn: '返回逻辑值真。',
          ja: '論理値真を返します。'
        },
        parameterDefinitions: {
          en: "No parameters.",
          cn: "无参数。",
          ja: "パラメータなし。"
        }
      },
      {
        title: 'XOR',
        call: "XOR(true, false, true)",
        result: false,
        definition: {
          en: 'Returns true if an odd number of arguments are true, otherwise returns false.',
          cn: '当且仅当有奇数个参数为真时返回真，否则返回假。',
          ja: '奇数個の引数が真である場合にのみ真を返し、それ以外は偽を返します。'
        },
        parameterDefinitions: {
          en: "One or more logical values (boolean), returns true if an odd number of arguments are true.",
          cn: "参数是一个或多个逻辑值（布尔值），有奇数个参数为真时返回真。",
          ja: "1つ以上の論理値（ブール値）、奇数個の引数が真であれば真を返します。"
        }
      }
    ]
  },
  {
    category: 'MATH',
    functions: [
      {
        title: 'ABS',
        call: "ABS(-4)",
        result: 4,
        definition: {
          en: 'Returns the absolute value of a number.',
          cn: '返回数值的绝对值。',
          ja: '数の絶対値を返します。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'ACOS',
        call: "ACOS(-0.5)",
        result: 2.0943951023931957,
        definition: {
          en: 'Calculates the arccosine (in radians).',
          cn: '计算反余弦值（弧度）。',
          ja: '逆余弦（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "A number between -1 and 1.",
          cn: "介于-1和1之间的数值。",
          ja: "-1から1の間の数。"
        }
      },
      {
        title: 'ACOSH',
        call: "ACOSH(10)",
        result: 2.993222846126381,
        definition: {
          en: 'Calculates the inverse hyperbolic cosine.',
          cn: '计算反双曲余弦值。',
          ja: '逆双曲線余弦を計算します。'
        },
        parameterDefinitions: {
          en: "A number greater than or equal to 1.",
          cn: "大于等于1的数值。",
          ja: "1以上である数。"
        }
      },
      {
        title: 'ACOT',
        call: "ACOT(2)",
        result: 0.46364760900080615,
        definition: {
          en: 'Calculates the arccotangent (in radians).',
          cn: '计算反正切值（弧度）。',
          ja: '逆余接（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'ACOTH',
        call: "ACOTH(6)",
        result: 0.16823611831060645,
        definition: {
          en: 'Calculates the inverse hyperbolic cotangent.',
          cn: '计算反双曲正切值。',
          ja: '逆双曲線余接を計算します。'
        },
        parameterDefinitions: {
          en: "A number with an absolute value greater than 1.",
          cn: "绝对值大于1的数值。",
          ja: "絶対値が1以上の数。"
        }
      },
      {
        title: 'AGGREGATE',
        call: "AGGREGATE(9, 4, [-5,15], [32,'Hello World!'])",
        result: '10,32',
        definition: {
          en: 'Performs aggregate operations, ignoring errors or hidden rows.',
          cn: '执行聚合运算，忽略错误或隐藏行。',
          ja: '集計演算を実行し、エラーまたは非表示の行を無視します。'
        },
        parameterDefinitions: {
          en: "Function number, option, array1, ..., arrayN.",
          cn: "函数号，选项，数组1，...，数组N。",
          ja: "関数番号、オプション、配列1、...、配列N。"
        }
      },
      {
        title: 'ARABIC',
        call: "ARABIC('MCMXII')",
        result: 1912,
        definition: {
          en: 'Converts a Roman numeral to an Arabic numeral.',
          cn: '将罗马数字转换为阿拉伯数字。',
          ja: 'ローマ数字をアラビア数字に変換します。'
        },
        parameterDefinitions: {
          en: "Roman numeral string.",
          cn: "罗马数字字符串。",
          ja: "ローマ数字の文字列。"
        }
      },
      {
        title: 'ASIN',
        call: "ASIN(-0.5)",
        result: -0.5235987755982988,
        definition: {
          en: 'Calculates the arcsine (in radians).',
          cn: '计算反正弦值（弧度）。',
          ja: '逆正弦（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "A number between -1 and 1.",
          cn: "介于-1和1之间的数值。",
          ja: "-1から1の間の数。"
        }
      },
      {
        title: 'ASINH',
        call: "ASINH(-2.5)",
        result: -1.6472311463710965,
        definition: {
          en: 'Calculates the inverse hyperbolic sine.',
          cn: '计算反双曲正弦值。',
          ja: '逆双曲線正弦を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'ATAN',
        call: "ATAN(1)",
        result: 0.7853981633974483,
        definition: {
          en: 'Calculates the arctangent (in radians).',
          cn: '计算反正切值（弧度）。',
          ja: '逆正接（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'ATAN2',
        call: "ATAN2(-1, -1)",
        result: -2.356194490192345,
        definition: {
          en: 'Calculates the arctangent (in radians) from coordinates.',
          cn: '根据坐标计算反正切值（弧度）。',
          ja: '座標から逆正接（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Y coordinate, X coordinate.",
          cn: "y坐标，x坐标。",
          ja: "Y座標、X座標。"
        }
      },
      {
        title: 'ATANH',
        call: "ATANH(-0.1)",
        result: -0.10033534773107562,
        definition: {
          en: 'Calculates the inverse hyperbolic tangent.',
          cn: '计算反双曲正切值。',
          ja: '逆双曲線正接を計算します。'
        },
        parameterDefinitions: {
          en: "A number between -1 and 1.",
          cn: "介于-1和1之间的数值。",
          ja: "-1から1の間の数。"
        }
      },
      {
        title: 'BASE',
        call: "BASE(15, 2, 10)",
        result: '0000001111',
        definition: {
          en: 'Converts a number into a text representation at a given base.',
          cn: '将数值转换为指定基数的文本表示。',
          ja: '数を指定された基数のテキスト表現に変換します。'
        },
        parameterDefinitions: {
          en: "Number, base, [minimum length].",
          cn: "数值，基数，[最小长度]。",
          ja: "数、基数、[最小長さ]。"
        }
      },
      {
        title: 'CEILING',
        call: "CEILING(-5.5, 2, -1)",
        result: -6,
        definition: {
          en: 'Rounds a number up to the nearest multiple.',
          cn: '将数值向上舍入到最接近的倍数。',
          ja: '数を最も近い倍数に切り上げます。'
        },
        parameterDefinitions: {
          en: "Number, multiple, [mode].",
          cn: "数值，倍数，[模式]。",
          ja: "数、倍数、[モード]。"
        }
      },
      {
        title: 'CEILINGMATH',
        call: "CEILINGMATH(-5.5, 2, -1)",
        result: -6,
        definition: {
          en: 'Rounds a number up using specified multiple and direction.',
          cn: '将数值向上舍入，使用指定的倍数和方向。',
          ja: '指定された倍数と方向を使用して数を切り上げます。'
        },
        parameterDefinitions: {
          en: "Number, [multiple], [mode].",
          cn: "数值，[倍数]，[模式]。",
          ja: "数、[倍数]、[モード]。"
        }
      },
      {
        title: 'CEILINGPRECISE',
        call: "CEILINGPRECISE(-4.1, -2)",
        result: -4,
        definition: {
          en: 'Rounds a number up to the nearest multiple, regardless of sign.',
          cn: '将数值向上舍入到最接近的倍数，不考虑符号。',
          ja: '数を最も近い倍数に切り上げ、符号に関わらず行います。'
        },
        parameterDefinitions: {
          en: "Number, [multiple].",
          cn: "数值，[倍数]。",
          ja: "数、[倍数]。"
        }
      },
      {
        title: 'COMBIN',
        call: "COMBIN(8, 2)",
        result: 28,
        definition: {
          en: 'Calculates the number of combinations.',
          cn: '计算组合数。',
          ja: '組み合わせの数を計算します。'
        },
        parameterDefinitions: {
          en: "Total number, chosen number.",
          cn: "总数，选中数。",
          ja: "総数、選択数。"
        }
      },
      {
        title: 'COMBINA',
        call: "COMBINA(4, 3)",
        result: 20,
        definition: {
          en: 'Calculates the number of combinations with repetitions.',
          cn: '计算允许重复的组合数。',
          ja: '繰り返しを許した組み合わせの数を計算します。'
        },
        parameterDefinitions: {
          en: "Total number, chosen number.",
          cn: "总数，选中数。",
          ja: "総数、選択数。"
        }
      },
      {
        title: 'COS',
        call: "COS(1)",
        result: 0.5403023058681398,
        definition: {
          en: 'Calculates the cosine (in radians).',
          cn: '计算余弦值（弧度）。',
          ja: '余弦（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle (in radians).",
          cn: "角度（弧度）。",
          ja: "角度（ラジアン）。"
        }
      },
      {
        title: 'COSH',
        call: "COSH(1)",
        result: 1.5430806348152437,
        definition: {
          en: 'Calculates the hyperbolic cosine.',
          cn: '计算双曲余弦值。',
          ja: '双曲線余弦を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'COT',
        call: "COT(30)",
        result: -0.15611995216165922,
        definition: {
          en: 'Calculates the cotangent (in radians).',
          cn: '计算余切值（弧度）。',
          ja: '余接（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle (in radians).",
          cn: "角度（弧度）。",
          ja: "角度（ラジアン）。"
        }
      },
      {
        title: 'COTH',
        call: "COTH(2)",
        result: 1.0373147207275482,
        definition: {
          en: 'Calculates the hyperbolic cotangent.',
          cn: '计算双曲余切值。',
          ja: '双曲線余接を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'CSC',
        call: "CSC(15)",
        result: 1.5377805615408537,
        definition: {
          en: 'Calculates the cosecant (in radians).',
          cn: '计算余割值（弧度）。',
          ja: '余割（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle (in radians).",
          cn: "角度（弧度）。",
          ja: "角度（ラジアン）。"
        }
      },
      {
        title: 'CSCH',
        call: "CSCH(1.5)",
        result: 0.46964244059522464,
        definition: {
          en: 'Calculates the hyperbolic cosecant.',
          cn: '计算双曲余割值。',
          ja: '双曲線余割を計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'DECIMAL',
        call: "DECIMAL('FF', 16)",
        result: 255,
        definition: {
          en: 'Converts a text representation of a number to decimal.',
          cn: '将文本形式的数字转换为十进制。',
          ja: '数のテキスト表現を10進数に変換します。'
        },
        parameterDefinitions: {
          en: "Text, base.",
          cn: "文本，基数。",
          ja: "テキスト、基数。"
        }
      },
      {
        title: 'ERF',
        call: "ERF(1)",
        result: 0.8427007929497149,
        definition: {
          en: 'Calculates the error function.',
          cn: '计算误差函数。',
          ja: '誤差関数を計算します。'
        },
        parameterDefinitions: {
          en: "Upper limit.",
          cn: "上限。",
          ja: "上限。"
        }
      },
      {
        title: 'ERFC',
        call: "ERFC(1)",
        result: 0.1572992070502851,
        definition: {
          en: 'Calculates the complementary error function.',
          cn: '计算互补误差函数。',
          ja: '相補誤差関数を計算します。'
        },
        parameterDefinitions: {
          en: "Lower limit.",
          cn: "下限。",
          ja: "下限。"
        }
      },
      {
        title: 'EVEN',
        call: "EVEN(-1)",
        result: -2,
        definition: {
          en: 'Rounds a number up to the nearest even integer.',
          cn: '将数值向上舍入到最接近的偶数。',
          ja: '数を最も近い偶数に切り上げます。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'EXP',
        call: "EXP(1)",
        result: 2.718281828459045,
        definition: {
          en: 'Calculates e raised to the power of a given number.',
          cn: '计算e的幂次方。',
          ja: 'e を指定された数の冪乗に計算します。'
        },
        parameterDefinitions: {
          en: "Exponent.",
          cn: "指数。",
          ja: "指数。"
        }
      },
      {
        title: 'FACT',
        call: "FACT(5)",
        result: 120,
        definition: {
          en: 'Calculates the factorial.',
          cn: '计算阶乘。',
          ja: '階乗を計算します。'
        },
        parameterDefinitions: {
          en: "Non-negative integer.",
          cn: "非负整数。",
          ja: "負でない整数。"
        }
      },
      {
        title: 'FACTDOUBLE',
        call: "FACTDOUBLE(7)",
        result: 105,
        definition: {
          en: 'Calculates the double factorial.',
          cn: '计算双阶乘。',
          ja: '二重階乗を計算します。'
        },
        parameterDefinitions: {
          en: "Non-negative integer.",
          cn: "非负整数。",
          ja: "負でない整数。"
        }
      },
      {
        title: 'FLOOR',
        call: "FLOOR(-3.1)",
        result: -4,
        definition: {
          en: 'Rounds a number down to the nearest multiple.',
          cn: '将数值向下舍入到最接近的倍数。',
          ja: '数を最も近い倍数に切り下げます。'
        },
        parameterDefinitions: {
          en: "Number, multiple.",
          cn: "数值，倍数。",
          ja: "数、倍数。"
        }
      },
      {
        title: 'FLOORMATH',
        call: "FLOORMATH(-4.1, -2, -1)",
        result: -4,
        definition: {
          en: 'Rounds a number down using specified multiple and direction.',
          cn: '将数值向下舍入，使用指定的倍数和方向。',
          ja: '指定された倍数と方向を使用して数を切り下げます。'
        },
        parameterDefinitions: {
          en: "Number, [multiple], [mode].",
          cn: "数值，[倍数]，[模式]。",
          ja: "数、[倍数]、[モード]。"
        }
      },
      {
        title: 'FLOORPRECISE',
        call: "FLOORPRECISE(-3.1, -2)",
        result: -4,
        definition: {
          en: 'Rounds a number down to the nearest multiple, regardless of sign.',
          cn: '将数值向下舍入到最接近的倍数，不考虑符号。',
          ja: '数を最も近い倍数に切り下げ、符号に関わらず行います。'
        },
        parameterDefinitions: {
          en: "Number, [multiple].",
          cn: "数值，[倍数]。",
          ja: "数、[倍数]。"
        }
      },
      {
        title: 'GCD',
        call: "GCD(24, 36, 48)",
        result: 12,
        definition: {
          en: 'Calculates the greatest common divisor.',
          cn: '计算最大公约数。',
          ja: '最大公約数を計算します。'
        },
        parameterDefinitions: {
          en: "Two or more integers.",
          cn: "两个或多个整数。",
          ja: "2つ以上の整数。"
        }
      },
      {
        title: 'INT',
        call: "INT(-8.9)",
        result: -9,
        definition: {
          en: 'Rounds a number down to the nearest integer.',
          cn: '将数值向下取整为最接近的整数。',
          ja: '数を最も近い整数に切り下げます。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'ISEVEN',
        call: "ISEVEN(-2.5)",
        result: true,
        definition: {
          en: 'Tests whether a number is even.',
          cn: '测试数值是否为偶数。',
          ja: '数が偶数かどうかをテストします。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'ISOCEILING',
        call: "ISOCEILING(-4.1, -2)",
        result: -4,
        definition: {
          en: 'Rounds a number up to the nearest multiple, following ISO standards.',
          cn: '将数值向上舍入到最接近的倍数，遵循ISO标准。',
          ja: 'ISO規格に従って数を最も近い倍数に切り上げます。'
        },
        parameterDefinitions: {
          en: "Number, [multiple].",
          cn: "数值，[倍数]。",
          ja: "数、[倍数]。"
        }
      },
      {
        title: 'ISODD',
        call: "ISODD(-2.5)",
        result: false,
        definition: {
          en: 'Tests whether a number is odd.',
          cn: '测试数值是否为奇数。',
          ja: '数が奇数かどうかをテストします。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'LCM',
        call: "LCM(24, 36, 48)",
        result: 144,
        definition: {
          en: 'Calculates the least common multiple.',
          cn: '计算最小公倍数。',
          ja: '最小公倍数を計算します。'
        },
        parameterDefinitions: {
          en: "Two or more integers.",
          cn: "两个或多个整数。",
          ja: "2つ以上の整数。"
        }
      },
      {
        title: 'LN',
        call: "LN(86)",
        result: 4.454347296253507,
        definition: {
          en: 'Calculates the natural logarithm.',
          cn: '计算自然对数。',
          ja: '自然対数を計算します。'
        },
        parameterDefinitions: {
          en: "Positive value.",
          cn: "正值。",
          ja: "正の値。"
        }
      },
      {
        title: 'LOG',
        call: "LOG(8, 2)",
        result: 3,
        definition: {
          en: 'Calculates the logarithm for a specified base.',
          cn: '计算指定底数的对数。',
          ja: '指定した底数の対数を計算します。'
        },
        parameterDefinitions: {
          en: "Number, base.",
          cn: "数值，底数。",
          ja: "数、底数。"
        }
      },
      {
        title: 'LOG10',
        call: "LOG10(100000)",
        result: 5,
        definition: {
          en: 'Calculates the logarithm with base 10.',
          cn: '计算以10为底的对数。',
          ja: '底数10の対数を計算します。'
        },
        parameterDefinitions: {
          en: "Positive value.",
          cn: "正值。",
          ja: "正の値。"
        }
      },
      {
        title: 'MOD',
        call: "MOD(3, -2)",
        result: -1,
        definition: {
          en: 'Calculates the remainder of two numbers divided.',
          cn: '计算两数相除的余数。',
          ja: '2つの数を割った時の剰余を計算します。'
        },
        parameterDefinitions: {
          en: "Dividend, divisor.",
          cn: "被除数，除数。",
          ja: "被除数、除数。"
        }
      },
      {
        title: 'MROUND',
        call: "MROUND(-10, -3)",
        result: -9,
        definition: {
          en: 'Rounds a number to the nearest multiple.',
          cn: '将数值四舍五入到最接近的倍数。',
          ja: '数を最も近い倍数に四捨五入します。'
        },
        parameterDefinitions: {
          en: "Number, multiple.",
          cn: "数值，倍数。",
          ja: "数、倍数。"
        }
      },
      {
        title: 'MULTINOMIAL',
        call: "MULTINOMIAL(2, 3, 4)",
        result: 1260,
        definition: {
          en: 'Calculates the multinomial coefficient.',
          cn: '计算多项式系数。',
          ja: '多項係数を計算します。'
        },
        parameterDefinitions: {
          en: "Two or more non-negative integers.",
          cn: "两个或多个非负整数。",
          ja: "2つ以上の負でない整数。"
        }
      },
      {
        title: 'ODD',
        call: "ODD(-1.5)",
        result: -3,
        definition: {
          en: 'Rounds a number up to the nearest odd integer.',
          cn: '将数值向上舍入到最接近的奇数。',
          ja: '数を最も近い奇数に切り上げます。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'POWER',
        call: "POWER(5, 2)",
        result: 25,
        definition: {
          en: 'Calculates a number raised to a power.',
          cn: '计算幂次方。',
          ja: '数の冪乗を計算します。'
        },
        parameterDefinitions: {
          en: "Base, exponent.",
          cn: "底数，指数。",
          ja: "底数、指数。"
        }
      },
      {
        title: 'PRODUCT',
        call: "PRODUCT(5, 15, 30)",
        result: 2250,
        definition: {
          en: 'Calculates the product of multiple numbers.',
          cn: '计算多个数值的乘积。',
          ja: '複数の数の積を計算します。'
        },
        parameterDefinitions: {
          en: "One or more numbers.",
          cn: "一个或多个数值。",
          ja: "1つ以上の数。"
        }
      },
      {
        title: 'QUOTIENT',
        call: "QUOTIENT(-10, 3)",
        result: -3,
        definition: {
          en: 'Calculates the integer portion of a division, ignoring the remainder.',
          cn: '计算两数相除的商，不包括余数。',
          ja: '割り算の整数部分を計算し、剰余を無視します。'
        },
        parameterDefinitions: {
          en: "Dividend, divisor.",
          cn: "被除数，除数。",
          ja: "被除数、除数。"
        }
      },
      {
        title: 'RADIANS',
        call: "RADIANS(180)",
        result: 3.141592653589793,
        definition: {
          en: 'Converts degrees to radians.',
          cn: '将角度转换为弧度。',
          ja: '度をラジアンに変換します。'
        },
        parameterDefinitions: {
          en: "Angle in degrees.",
          cn: "角度。",
          ja: "度数の角度。"
        }
      },
      {
        title: 'RAND',
        call: "RAND()",
        result: '[Random real number between 0 and 1]',
        definition: {
          en: 'Generates a random real number between 0 and 1.',
          cn: '生成0到1之间的随机实数。',
          ja: '0から1の間のランダムな実数を生成します。'
        },
        parameterDefinitions: {
          en: "No parameters.",
          cn: "无参数。",
          ja: "パラメータなし。"
        }
      },
      {
        title: 'RANDBETWEEN',
        call: "RANDBETWEEN(-1, 1)",
        result: '[Random integer between bottom and top]',
        definition: {
          en: 'Generates a random integer within a specified range.',
          cn: '生成指定范围内的随机整数。',
          ja: '指定された範囲内のランダムな整数を生成します。'
        },
        parameterDefinitions: {
          en: "Bottom, top.",
          cn: "下限，上限。",
          ja: "下限、上限。"
        }
      },
      {
        title: 'ROUND',
        call: "ROUND(626.3, -3)",
        result: 1000,
        definition: {
          en: 'Rounds a number to a specified number of digits.',
          cn: '按指定位数四舍五入数值。',
          ja: '数を指定された桁数に四捨五入します。'
        },
        parameterDefinitions: {
          en: "Number, num_digits.",
          cn: "数值，位数。",
          ja: "数、桁数。"
        }
      },
      {
        title: 'ROUNDDOWN',
        call: "ROUNDDOWN(-3.14159, 2)",
        result: -3.14,
        definition: {
          en: 'Rounds a number down to a specified number of digits.',
          cn: '将数值向下舍入到指定位数。',
          ja: '数を指定された桁数に切り下げます。'
        },
        parameterDefinitions: {
          en: "Number, num_digits.",
          cn: "数值，位数。",
          ja: "数、桁数。"
        }
      },
      {
        title: 'ROUNDUP',
        call: "ROUNDUP(-3.14159, 2)",
        result: -3.15,
        definition: {
          en: 'Rounds a number up to a specified number of digits.',
          cn: '将数值向上舍入到指定位数。',
          ja: '数を指定された桁数に切り上げます。'
        },
        parameterDefinitions: {
          en: "Number, num_digits.",
          cn: "数值，位数。",
          ja: "数、桁数。"
        }
      },
      {
        title: 'SEC',
        call: "SEC(45)",
        result: 1.9035944074044246,
        definition: {
          en: 'Calculates the secant (in radians).',
          cn: '计算正割值（弧度）。',
          ja: 'セカント（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle in radians.",
          cn: "角度（弧度）。",
          ja: "ラジアンの角度。"
        }
      },
      {
        title: 'SECH',
        call: "SECH(45)",
        result: 5.725037161098787e-20,
        definition: {
          en: 'Calculates the hyperbolic secant.',
          cn: '计算双曲正割值。',
          ja: '双曲線セカントを計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'SIGN',
        call: "SIGN(-0.00001)",
        result: -1,
        definition: {
          en: 'Returns the sign of a number.',
          cn: '返回数值的符号。',
          ja: '数の符号を返します。'
        },
        parameterDefinitions: {
          en: "Number.",
          cn: "数值。",
          ja: "数。"
        }
      },
      {
        title: 'SIN',
        call: "SIN(1)",
        result: 0.8414709848078965,
        definition: {
          en: 'Calculates the sine (in radians).',
          cn: '计算正弦值（弧度）。',
          ja: 'サイン（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle in radians.",
          cn: "角度（弧度）。",
          ja: "ラジアンの角度。"
        }
      },
      {
        title: 'SINH',
        call: "SINH(1)",
        result: 1.1752011936438014,
        definition: {
          en: 'Calculates the hyperbolic sine.',
          cn: '计算双曲正弦值。',
          ja: '双曲線サインを計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'SQRT',
        call: "SQRT(16)",
        result: 4,
        definition: {
          en: 'Calculates the square root.',
          cn: '计算平方根。',
          ja: '平方根を計算します。'
        },
        parameterDefinitions: {
          en: "Non-negative number.",
          cn: "非负数值。",
          ja: "負でない数。"
        }
      },
      {
        title: 'SQRTPI',
        call: "SQRTPI(2)",
        result: 2.5066282746310002,
        definition: {
          en: 'Calculates the square root of a number multiplied by pi.',
          cn: '计算数值与π的乘积的平方根。',
          ja: '数とπの積の平方根を計算します。'
        },
        parameterDefinitions: {
          en: "Non-negative number.",
          cn: "非负数值。",
          ja: "負でない数。"
        }
      },
      {
        title: 'SUBTOTAL',
        call: "SUBTOTAL(9, [-5,15], [32,'Hello World!'])",
        result: '10,32',
        definition: {
          en: 'Calculates a subtotal in a list or database, ignoring hidden rows.',
          cn: '计算子集的汇总值，忽略隐藏行。',
          ja: 'リストまたはデータベースの部分合計を計算し、非表示行を無視します。'
        },
        parameterDefinitions: {
          en: "Function_num, array1, ..., arrayN.",
          cn: "函数号，数组1，...，数组N。",
          ja: "関数番号、配列1、...、配列N。"
        }
      },
      {
        title: 'SUM',
        call: "SUM(-5, 15, 32, 'Hello World!')",
        result: 42,
        definition: {
          en: 'Calculates the sum of numbers, ignoring text.',
          cn: '计算数值总和，忽略文本。',
          ja: '数の合計を計算し、テキストを無視します。'
        },
        parameterDefinitions: {
          en: "One or more numbers.",
          cn: "一个或多个数值。",
          ja: "1つ以上の数。"
        }
      },
      {
        title: 'SUMIF',
        call: "SUMIF([2,4,8,16], '>5')",
        result: 24,
        definition: {
          en: 'Sums values based on a condition.',
          cn: '根据条件求和。',
          ja: '条件に基づいて値を合計します。'
        },
        parameterDefinitions: {
          en: "Array, criteria.",
          cn: "数组，条件。",
          ja: "配列、条件。"
        }
      },
      {
        title: 'SUMIFS',
        call: "SUMIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 12,
        definition: {
          en: 'Sums values based on multiple conditions.',
          cn: '根据多个条件求和。',
          ja: '複数の条件に基づいて値を合計します。'
        },
        parameterDefinitions: {
          en: "Sum_array, criteria_range1, criteria1, ..., criteria_rangeN, criteriaN.",
          cn: "求和数组，条件数组1，条件1，...，条件数组N，条件N。",
          ja: "合計配列、条件範囲1、条件1、...、条件範囲N、条件N。"
        }
      },
      {
        title: 'SUMPRODUCT',
        call: "SUMPRODUCT([[1,2],[3,4]], [[1,0],[0,1]])",
        result: 5,
        definition: {
          en: 'Calculates the sum of the products of corresponding elements in arrays.',
          cn: '计算数组元素的乘积之和。',
          ja: '配列の対応する要素の積の合計を計算します。'
        },
        parameterDefinitions: {
          en: "Two or more arrays.",
          cn: "两个或多个数组。",
          ja: "2つ以上の配列。"
        }
      },
      {
        title: 'SUMSQ',
        call: "SUMSQ(3, 4)",
        result: 25,
        definition: {
          en: 'Calculates the sum of squares of numbers.',
          cn: '计算数值的平方和。',
          ja: '数の二乗の合計を計算します。'
        },
        parameterDefinitions: {
          en: "One or more numbers.",
          cn: "一个或多个数值。",
          ja: "1つ以上の数。"
        }
      },
      {
        title: 'SUMX2MY2',
        call: "SUMX2MY2([1,2], [3,4])",
        result: -20,
        definition: {
          en: 'Calculates the sum of the difference of squares of corresponding elements in two arrays.',
          cn: '计算两个数组对应元素平方差之和。',
          ja: '2つの配列の対応する要素の二乗の差の合計を計算します。'
        },
        parameterDefinitions: {
          en: "Array1, array2.",
          cn: "数组1，数组2。",
          ja: "配列1、配列2。"
        }
      },
      {
        title: 'SUMX2PY2',
        call: "SUMX2PY2([1,2], [3,4])",
        result: 30,
        definition: {
          en: 'Calculates the sum of the sum of squares of corresponding elements in two arrays.',
          cn: '计算两个数组对应元素平方和之和。',
          ja: '2つの配列の対応する要素の二乗の合計の合計を計算します。'
        },
        parameterDefinitions: {
          en: "Array1, array2.",
          cn: "数组1，数组2。",
          ja: "配列1、配列2。"
        }
      },
      {
        title: 'SUMXMY2',
        call: "SUMXMY2([1,2], [3,4])",
        result: 8,
        definition: {
          en: 'Calculates the sum of squares of differences of corresponding elements in two arrays.',
          cn: '计算两个数组对应元素差的平方和。',
          ja: '2つの配列の対応する要素の差の二乗の合計を計算します。'
        },
        parameterDefinitions: {
          en: "Array1, array2.",
          cn: "数组1，数组2。",
          ja: "配列1、配列2。"
        }
      },
      {
        title: 'TAN',
        call: "TAN(1)",
        result: 1.5574077246549023,
        definition: {
          en: 'Calculates the tangent (in radians).',
          cn: '计算正切值（弧度）。',
          ja: 'タンジェント（ラジアン）を計算します。'
        },
        parameterDefinitions: {
          en: "Angle in radians.",
          cn: "角度（弧度）。",
          ja: "ラジアンの角度。"
        }
      },
      {
        title: 'TANH',
        call: "TANH(-2)",
        result: -0.9640275800758168,
        definition: {
          en: 'Calculates the hyperbolic tangent.',
          cn: '计算双曲正切值。',
          ja: '双曲線タンジェントを計算します。'
        },
        parameterDefinitions: {
          en: "Any number.",
          cn: "任意数值。",
          ja: "任意の数。"
        }
      },
      {
        title: 'TRUNC',
        call: "TRUNC(-8.9)",
        result: -8,
        definition: {
          en: 'Truncates a number without rounding.',
          cn: '截断数值，不进行四舍五入。',
          ja: '数を切り捨て、四捨五入を行いません。'
        },
        parameterDefinitions: {
          en: "Number, [num_digits].",
          cn: "数值，[位数]。",
          ja: "数、[桁数]。"
        }
      },
    ]
  },
  {
    category: 'STATISTICAL',
    functions: [
      {
        title: 'AVEDEV',
        call: "AVEDEV([2,4], [8,16])",
        result: 4.5,
        definition: {
          en: 'Calculates the average of the absolute deviations.',
          cn: '计算平均绝对偏差。',
          ja: '絶対偏差の平均を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays of numbers representing data points.",
          cn: "参数是数值数组，表示数据点。",
          ja: "引数はデータポイントを表す数値の配列です。"
        }
      },
      {
        title: 'AVERAGE',
        call: "AVERAGE([2,4], [8,16])",
        result: 7.5,
        definition: {
          en: 'Calculates the arithmetic mean.',
          cn: '计算算术平均值。',
          ja: '算術平均を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays of numbers representing data points to average.",
          cn: "参数是数值数组，表示要平均的数据点。",
          ja: "引数は平均化するデータポイントを表す数値の配列です。"
        }
      },
      {
        title: 'AVERAGEA',
        call: "AVERAGEA([2,4], [8,16])",
        result: 7.5,
        definition: {
          en: 'Calculates the average including text and logical values.',
          cn: '计算包含文本和逻辑值在内的平均值。',
          ja: 'テキストと論理値を含む平均を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays of numbers, text, or logical values; all non-empty values are calculated.",
          cn: "参数是数值、文本或逻辑值的数组，所有非空值都将被计算。",
          ja: "引数は数値、テキスト、または論理値の配列で、すべての非空値が計算されます。"
        }
      },
      {
        title: 'AVERAGEIF',
        call: "AVERAGEIF([2,4,8,16], '>5', [1, 2, 3, 4])",
        result: 3.5,
        definition: {
          en: 'Calculates the average based on a single condition.',
          cn: '基于单个条件计算平均值。',
          ja: '単一の条件に基づいて平均を計算します。'
        },
        parameterDefinitions: {
          en: "First argument is an array of numbers, second is a condition, third optional array for averaging.",
          cn: "第一个参数是数值数组，第二个参数是条件，第三个参数是可选的数值数组用于平均。",
          ja: "最初の引数は数値の配列、2つ目は条件、3つ目は省略可能な平均用の数値配列です。"
        }
      },
      {
        title: 'AVERAGEIFS',
        call: "AVERAGEIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 6,
        definition: {
          en: 'Calculates the average based on multiple conditions.',
          cn: '基于多个条件计算平均值。',
          ja: '複数の条件に基づいて平均を計算します。'
        },
        parameterDefinitions: {
          en: "First argument is an array of numbers, followed by pairs of condition arrays and condition expressions.",
          cn: "第一个参数是数值数组，后跟成对的条件数组和条件表达式。",
          ja: "最初の引数は数値の配列で、その後に条件配列と条件表現のペアが続きます。"
        }
      },
      {
        title: 'BETADIST',
        call: "BETADIST(2, 8, 10, true, 1, 3)",
        result: 0.6854705810117458,
        definition: {
          en: 'Calculates the cumulative beta probability density function.',
          cn: '计算累积贝塔概率密度函数。',
          ja: '累積ベータ確率密度関数を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are value, α, β, cumulative flag, A (optional), and B (optional).",
          cn: "参数依次是值、α、β、累积标志、A（可选）和B（可选）。",
          ja: "パラメータは順に値、α、β、累積フラグ、A（オプション）、およびB（オプション）です。"
        }
      },
      {
        title: 'BETAINV',
        call: "BETAINV(0.6854705810117458, 8, 10, 1, 3)",
        result: 1.9999999999999998,
        definition: {
          en: 'Calculates the inverse of the cumulative beta probability density function.',
          cn: '计算累积贝塔概率密度函数的反函数。',
          ja: '累積ベータ確率密度関数の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are probability, α, β, A (optional), and B (optional).",
          cn: "参数依次是概率、α、β、A（可选）和B（可选）。",
          ja: "パラメータは順に確率、α、β、A（オプション）、およびB（オプション）です。"
        }
      },
      {
        title: 'BINOMDIST',
        call: "BINOMDIST(6, 10, 0.5, false)",
        result: 0.205078125,
        definition: {
          en: 'Calculates the binomial distribution probability.',
          cn: '计算二项分布的概率。',
          ja: '二項分布の確率を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are trials, successes, success probability, and cumulative flag.",
          cn: "参数依次是试验次数、成功次数、成功概率、累积标志。",
          ja: "パラメータは順に試行回数、成功回数、成功確率、および累積フラグです。"
        }
      },
      {
        title: 'CORREL',
        call: "CORREL([3,2,4,5,6], [9,7,12,15,17])",
        result: 0.9970544855015815,
        definition: {
          en: 'Calculates the correlation coefficient between two datasets.',
          cn: '计算两个数据集的相关系数。',
          ja: '2つのデータセット間の相関係数を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are two arrays of numbers representing two datasets.",
          cn: "参数是两个数值数组，表示两个数据集。",
          ja: "引数は2つのデータセットを表す数値の配列です。"
        }
      },
      {
        title: 'COUNT',
        call: "COUNT([1,2], [3,4])",
        result: 4,
        definition: {
          en: 'Counts the number of numeric cells.',
          cn: '计算数值单元格的数量。',
          ja: '数値セルの数をカウントします。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays or ranges of numbers.",
          cn: "参数是数值数组或范围。",
          ja: "引数は数値の配列または範囲です。"
        }
      },
      {
        title: 'COUNTA',
        call: "COUNTA([1, null, 3, 'a', '', 'c'])",
        result: 4,
        definition: {
          en: 'Counts the number of non-empty cells.',
          cn: '计算非空单元格的数量。',
          ja: '非空セルの数をカウントします。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays or ranges of any type.",
          cn: "参数是任意类型的数组或范围。",
          ja: "引数は任意の型の配列または範囲です。"
        }
      },
      {
        title: 'COUNTBLANK',
        call: "COUNTBLANK([1, null, 3, 'a', '', 'c'])",
        result: 2,
        definition: {
          en: 'Counts the number of blank cells.',
          cn: '计算空白单元格的数量。',
          ja: '空白セルの数をカウントします。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays or ranges of any type.",
          cn: "参数是任意类型的数组或范围。",
          ja: "引数は任意の型の配列または範囲です。"
        }
      },
      {
        title: 'COUNTIF',
        call: "COUNTIF(['Caen', 'Melbourne', 'Palo Alto', 'Singapore'], 'a')",
        result: 3,
        definition: {
          en: 'Counts the number of cells based on a condition.',
          cn: '基于条件计算单元格数量。',
          ja: '条件に基づいてセルの数をカウントします。'
        },
        parameterDefinitions: {
          en: "Arguments are an array of numbers or text and a condition.",
          cn: "参数是数值或文本数组以及条件。",
          ja: "引数は数値またはテキストの配列と条件です。"
        }
      },
      {
        title: 'COUNTIFS',
        call: "COUNTIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 2,
        definition: {
          en: 'Counts the number of cells based on multiple conditions.',
          cn: '基于多个条件计算单元格数量。',
          ja: '複数の条件に基づいてセルの数をカウントします。'
        },
        parameterDefinitions: {
          en: "Arguments are pairs of condition arrays and condition expressions.",
          cn: "参数是成对的条件数组和条件表达式。",
          ja: "引数は条件配列と条件表現のペアです。"
        }
      },
      {
        title: 'COVARIANCEP',
        call: "COVARIANCEP([3,2,4,5,6], [9,7,12,15,17])",
        result: 5.2,
        definition: {
          en: 'Calculates the population covariance.',
          cn: '计算总体协方差。',
          ja: '母集団の共分散を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are two arrays of numbers representing two datasets.",
          cn: "参数是两个数值数组，表示两个数据集。",
          ja: "引数は2つのデータセットを表す数値の配列です。"
        }
      },
      {
        title: 'COVARIANCES',
        call: "COVARIANCES([2,4,8], [5,11,12])",
        result: 9.666666666666668,
        definition: {
          en: 'Calculates the sample covariance.',
          cn: '计算样本协方差。',
          ja: '標本の共分散を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are two arrays of numbers representing two datasets.",
          cn: "参数是两个数值数组，表示两个数据集。",
          ja: "引数は2つのデータセットを表す数値の配列です。"
        }
      },
      {
        title: 'DEVSQ',
        call: "DEVSQ([2,4,8,16])",
        result: 115,
        definition: {
          en: 'Calculates the sum of squares of deviations.',
          cn: '计算偏差平方和。',
          ja: '偏差の二乗和を計算します。'
        },
        parameterDefinitions: {
          en: "Arguments are arrays of numbers representing data points.",
          cn: "参数是数值数组，表示数据点。",
          ja: "引数はデータポイントを表す数値の配列です。"
        }
      },
      {
        title: 'EXPONDIST',
        call: "EXPONDIST(0.2, 10, true)",
        result: 0.8646647167633873,
        definition: {
          en: 'Calculates the exponential distribution.',
          cn: '计算指数分布。',
          ja: '指数分布を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are value, λ, and cumulative flag.",
          cn: "参数依次是值、λ、累积标志。",
          ja: "パラメータは順に値、λ、および累積フラグです。"
        }
      },
      {
        title: 'FDIST',
        call: "FDIST(15.2069, 6, 4, false)",
        result: 0.0012237917087831735,
        definition: {
          en: 'Calculates the F probability distribution.',
          cn: '计算F概率分布。',
          ja: 'F確率分布を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are value, degrees of freedom 1, degrees of freedom 2, and cumulative flag.",
          cn: "参数依次是值、自由度1、自由度2、累积标志。",
          ja: "パラメータは順に値、自由度1、自由度2、および累積フラグです。"
        }
      },
      {
        title: 'FINV',
        call: "FINV(0.01, 6, 4)",
        result: 0.10930991412457851,
        definition: {
          en: 'Calculates the inverse of the F probability distribution.',
          cn: '计算F概率分布的反函数。',
          ja: 'F確率分布の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: "Parameters are probability, degrees of freedom 1, and degrees of freedom 2.",
          cn: "参数依次是概率、自由度1、自由度2。",
          ja: "パラメータは順に確率、自由度1、および自由度2です。"
        }
      },
      {
        title: 'FISHER',
        call: "FISHER(0.75)",
        result: 0.9729550745276566,
        definition: {
          en: 'Calculates the Fisher transformation.',
          cn: '计算费舍尔变换。',
          ja: 'フィッシャー変換を計算します。'
        },
        parameterDefinitions: {
          en: "Parameter is a number representing the correlation coefficient.",
          cn: "参数是一个数值，表示相关系数。",
          ja: "パラメータは相関係数を表す数値です。"
        }
      },
      {
        title: 'FISHERINV',
        call: "FISHERINV(0.9729550745276566)",
        result: 0.75,
        definition: {
          en: 'Calculates the inverse of the Fisher transformation.',
          cn: '计算费舍尔逆变换。',
          ja: 'フィッシャー逆変換を計算します。'
        },
        parameterDefinitions: {
          en: "Parameter is a number representing the result of the Fisher transformation.",
          cn: "参数是一个数值，表示费舍尔变换的结果。",
          ja: "パラメータはフィッシャー変換の結果を表す数値です。"
        }
      },
      {
        title: 'FORECAST',
        call: "FORECAST(30, [6,7,9,15,21], [20,28,31,38,40])",
        result: 10.607253086419755,
        definition: {
          en: 'Predicts a y-value for a new x-value using known x and y values.',
          cn: '根据已知的x和y值预测新x值的y值。',
          ja: '既知のxとyの値を使用して、新しいxの値に対するyの値を予測します。'
        },
        parameterDefinitions: {
          en: 'new x-value, array of known y-values, array of known x-values',
          cn: '参数依次是新x值、已知y值数组、已知x值数组。',
          ja: '新しいxの値、既知のyの値の配列、既知のxの値の配列'
        }
      },
      {
        title: 'FREQUENCY',
        call: "FREQUENCY([79,85,78,85,50,81,95,88,97], [70,79,89])",
        result: '1,2,4,2',
        definition: {
          en: 'Calculates the frequency distribution.',
          cn: '计算频数分布。',
          ja: '頻度分布を計算します。'
        },
        parameterDefinitions: {
          en: 'array of data, array of bin boundaries',
          cn: '参数依次是数据数组、分组边界数组。',
          ja: 'データの配列、ビン境界の配列'
        }
      },
      {
        title: 'GAMMA',
        call: "GAMMA(2.5)",
        result: 1.3293403919101043,
        definition: {
          en: 'Calculates the gamma function value.',
          cn: '计算伽玛函数值。',
          ja: 'ガンマ関数の値を計算します。'
        },
        parameterDefinitions: {
          en: 'a positive number',
          cn: '参数是一个正数。',
          ja: '正の数'
        }
      },
      {
        title: 'GAMMALN',
        call: "GAMMALN(10)",
        result: 12.801827480081961,
        definition: {
          en: 'Calculates the natural logarithm of the gamma function.',
          cn: '计算伽玛函数的自然对数。',
          ja: 'ガンマ関数の自然対数を計算します。'
        },
        parameterDefinitions: {
          en: 'a positive number',
          cn: '参数是一个正数。',
          ja: '正の数'
        }
      },
      {
        title: 'GAUSS',
        call: "GAUSS(2)",
        result: 0.4772498680518208,
        definition: {
          en: 'Calculates the probability in the standard normal distribution.',
          cn: '计算标准正态分布下的概率。',
          ja: '標準正規分布における確率を計算します。'
        },
        parameterDefinitions: {
          en: 'a number representing the z-score',
          cn: '参数是一个数值，表示z分数。',
          ja: 'zスコアを表す数'
        }
      },
      {
        title: 'GEOMEAN',
        call: "GEOMEAN([2,4], [8,16])",
        result: 5.656854249492381,
        definition: {
          en: 'Calculates the geometric mean.',
          cn: '计算几何平均值。',
          ja: '幾何平均を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers representing data points',
          cn: '参数是数值数组，表示数据点。',
          ja: 'データポイントを表す数値の配列'
        }
      },
      {
        title: 'GROWTH',
        call: "GROWTH([2,4,8,16], [1,2,3,4], [5])",
        result: 32.00000000000003,
        definition: {
          en: 'Predicts exponential growth based on known data.',
          cn: '根据已知数据预测指数增长值。',
          ja: '既知のデータに基づいて指数成長を予測します。'
        },
        parameterDefinitions: {
          en: 'array of known y-values, array of known x-values, array of new x-values',
          cn: '参数依次是已知y值数组、已知x值数组、新x值数组。',
          ja: '既知のyの値の配列、既知のxの値の配列、新しいxの値の配列'
        }
      },
      {
        title: 'HARMEAN',
        call: "HARMEAN([2,4], [8,16])",
        result: 4.266666666666667,
        definition: {
          en: 'Calculates the harmonic mean.',
          cn: '计算调和平均值。',
          ja: '調和平均を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers representing data points',
          cn: '参数是数值数组，表示数据点。',
          ja: 'データポイントを表す数値の配列'
        }
      },
      {
        title: 'HYPGEOMDIST',
        call: "HYPGEOMDIST(1, 4, 8, 20, false)",
        result: 0.3632610939112487,
        definition: {
          en: 'Calculates the hypergeometric distribution.',
          cn: '计算超几何分布。',
          ja: '超幾何分布を計算します。'
        },
        parameterDefinitions: {
          en: 'number of successes in sample, sample size, number of successes in population, population size, cumulative flag',
          cn: '参数依次是样本中成功的次数、样本大小、总体中成功的次数、总体大小、累积标志。',
          ja: 'サンプル中の成功回数、サンプルサイズ、母集団中の成功回数、母集団サイズ、累積フラグ'
        }
      },
      {
        title: 'INTERCEPT',
        call: "INTERCEPT([2,3,9,1,8], [6,5,11,7,5])",
        result: 0.04838709677419217,
        definition: {
          en: 'Calculates the intercept of the linear regression.',
          cn: '计算线性回归的截距。',
          ja: '線形回帰の切片を計算します。'
        },
        parameterDefinitions: {
          en: 'array of known y-values, array of known x-values',
          cn: '参数依次是已知y值数组、已知x值数组。',
          ja: '既知のyの値の配列、既知のxの値の配列'
        }
      },
      {
        title: 'KURT',
        call: "KURT([3,4,5,2,3,4,5,6,4,7])",
        result: -0.15179963720841627,
        definition: {
          en: 'Calculates the kurtosis.',
          cn: '计算峰度。',
          ja: '尖度を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers representing data points',
          cn: '参数是数值数组，表示数据点。',
          ja: 'データポイントを表す数値の配列'
        }
      },
      {
        title: 'LARGE',
        call: "LARGE([3,5,3,5,4,4,2,4,6,7], 3)",
        result: 5,
        definition: {
          en: 'Returns the k-th largest value.',
          cn: '返回第k大的值。',
          ja: 'k番目に大きな値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, k value',
          cn: '参数依次是数值数组、k值。',
          ja: '数値の配列、kの値'
        }
      },
      {
        title: 'LINEST',
        call: "LINEST([1,9,5,7], [0,4,2,3], true, true)",
        result: '2,1',
        definition: {
          en: 'Performs linear regression analysis.',
          cn: '执行线性回归分析。',
          ja: '線形回帰分析を行います。'
        },
        parameterDefinitions: {
          en: 'array of known y-values, array of known x-values, whether to return additional statistics, whether to return more statistics',
          cn: '参数依次是已知y值数组、已知x值数组、是否返回附加统计信息、是否返回更多统计信息。',
          ja: '既知のyの値の配列、既知のxの値の配列、追加の統計情報を返すかどうか、より多くの統計情報を返すかどうか'
        }
      },
      {
        title: 'LOGNORMDIST',
        call: "LOGNORMDIST(4, 3.5, 1.2, true)",
        result: 0.0390835557068005,
        definition: {
          en: 'Calculates the lognormal distribution.',
          cn: '计算对数正态分布。',
          ja: '対数正規分布を計算します。'
        },
        parameterDefinitions: {
          en: 'value, mean, standard deviation, cumulative flag',
          cn: '参数依次是值、平均值、标准差、累积标志。',
          ja: '値、平均、標準偏差、累積フラグ'
        }
      },
      {
        title: 'LOGNORMINV',
        call: "LOGNORMINV(0.0390835557068005, 3.5, 1.2, true)",
        result: 4.000000000000001,
        definition: {
          en: 'Calculates the inverse of the lognormal distribution.',
          cn: '计算对数正态分布的反函数。',
          ja: '対数正規分布の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: 'probability, mean, standard deviation, cumulative flag',
          cn: '参数依次是概率、平均值、标准差、累积标志。',
          ja: '確率、平均、標準偏差、累積フラグ'
        }
      },
      {
        title: 'MAX',
        call: "MAX([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0.8,
        definition: {
          en: 'Returns the maximum value.',
          cn: '返回最大值。',
          ja: '最大値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'MAXA',
        call: "MAXA([0.1,0.2], [0.4,0.8], [true, false])",
        result: 1,
        definition: {
          en: 'Returns the maximum value including text and logical values.',
          cn: '返回包括文本和逻辑值的最大值。',
          ja: 'テキストと論理値を含む最大値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'MEDIAN',
        call: "MEDIAN([1,2,3], [4,5,6])",
        result: 3.5,
        definition: {
          en: 'Returns the median.',
          cn: '返回中位数。',
          ja: '中央値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'MIN',
        call: "MIN([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0.1,
        definition: {
          en: 'Returns the minimum value.',
          cn: '返回最小值。',
          ja: '最小値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'MINA',
        call: "MINA([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0,
        definition: {
          en: 'Returns the minimum value including text and logical values.',
          cn: '返回包括文本和逻辑值的最小值。',
          ja: 'テキストと論理値を含む最小値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'MODEMULT',
        call: "MODEMULT([1,2,3,4,3,2,1,2,3])",
        result: '2,3',
        definition: {
          en: 'Returns an array of the most frequent values.',
          cn: '返回出现频率最高的值数组。',
          ja: '最も頻繁に現れる値の配列を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'MODESNGL',
        call: "MODESNGL([1,2,3,4,3,2,1,2,3])",
        result: 2,
        definition: {
          en: 'Returns the single most frequent value.',
          cn: '返回最常出现的单个值。',
          ja: '最も頻繁に現れる単一の値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'NORMDIST',
        call: "NORMDIST(42, 40, 1.5, true)",
        result: 0.9087887802741321,
        definition: {
          en: 'Calculates the normal distribution.',
          cn: '计算正态分布。',
          ja: '正規分布を計算します。'
        },
        parameterDefinitions: {
          en: 'value, mean, standard deviation, cumulative flag',
          cn: '参数依次是值、平均值、标准差、累积标志。',
          ja: '値、平均、標準偏差、累積フラグ'
        }
      },
      {
        title: 'NORMINV',
        call: "NORMINV(0.9087887802741321, 40, 1.5)",
        result: 42,
        definition: {
          en: 'Calculates the inverse of the normal distribution.',
          cn: '计算正态分布的反函数。',
          ja: '正規分布の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: 'probability, mean, standard deviation',
          cn: '参数依次是概率、平均值、标准差。',
          ja: '確率、平均、標準偏差'
        }
      },
      {
        title: 'NORMSDIST',
        call: "NORMSDIST(1, true)",
        result: 0.8413447460685429,
        definition: {
          en: 'Calculates the standard normal distribution.',
          cn: '计算标准正态分布。',
          ja: '標準正規分布を計算します。'
        },
        parameterDefinitions: {
          en: 'a number representing the z-score',
          cn: '参数是一个数值，表示z分数。',
          ja: 'zスコアを表す数'
        }
      },
      {
        title: 'NORMSINV',
        call: "NORMSINV(0.8413447460685429)",
        result: 1.0000000000000002,
        definition: {
          en: 'Calculates the inverse of the standard normal distribution.',
          cn: '计算标准正态分布的反函数。',
          ja: '標準正規分布の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: 'a probability value',
          cn: '参数是一个概率值。',
          ja: '確率値'
        }
      },
      {
        title: 'PEARSON',
        call: "PEARSON([9,7,5,3,1], [10,6,1,5,3])",
        result: 0.6993786061802354,
        definition: {
          en: 'Calculates the Pearson product-moment correlation coefficient.',
          cn: '计算皮尔逊乘积矩相关系数。',
          ja: 'ピアソン積率相関係数を計算します。'
        },
        parameterDefinitions: {
          en: 'two arrays of numbers representing two datasets',
          cn: '参数是两个数值数组，表示两个数据集。',
          ja: '2つのデータセットを表す数値の配列'
        }
      },
      {
        title: 'PERCENTILEEXC',
        call: "PERCENTILEEXC([1,2,3,4], 0.3)",
        result: 1.5,
        definition: {
          en: 'Calculates the percentile exclusive.',
          cn: '计算排除百分位数。',
          ja: 'パーセンタイルを除外して計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, k value',
          cn: '参数依次是数值数组、k值。',
          ja: '数値の配列、kの値'
        }
      },
      {
        title: 'PERCENTILEINC',
        call: "PERCENTILEINC([1,2,3,4], 0.3)",
        result: 1.9,
        definition: {
          en: 'Calculates the percentile inclusive.',
          cn: '计算包含百分位数。',
          ja: 'パーセンタイルを含めて計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, k value',
          cn: '参数依次是数值数组、k值。',
          ja: '数値の配列、kの値'
        }
      },
      {
        title: 'PERCENTRANKEXC',
        call: "PERCENTRANKEXC([1,2,3,4], 2, 2)",
        result: 0.4,
        definition: {
          en: 'Calculates the percentage rank exclusive.',
          cn: '计算排除百分比排名。',
          ja: 'パーセントランクを除外して計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, x value, significance (optional)',
          cn: '参数依次是数值数组、x值、显著性（可选）。',
          ja: '数値の配列、xの値、有意水準（オプション）'
        }
      },
      {
        title: 'PERCENTRANKINC',
        call: "PERCENTRANKINC([1,2,3,4], 2, 2)",
        result: 0.33,
        definition: {
          en: 'Calculates the percentage rank inclusive.',
          cn: '计算包含百分比排名。',
          ja: 'パーセントランクを含めて計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, x value, significance (optional)',
          cn: '参数依次是数值数组、x值、显著性（可选）。',
          ja: '数値の配列、xの値、有意水準（オプション）'
        }
      },
      {
        title: 'PERMUT',
        call: "PERMUT(100, 3)",
        result: 970200,
        definition: {
          en: 'Calculates the number of permutations.',
          cn: '计算排列数。',
          ja: '順列の数を計算します。'
        },
        parameterDefinitions: {
          en: 'total n, chosen k',
          cn: '参数依次是总数n、选择数k。',
          ja: '全体n、選択k'
        }
      },
      {
        title: 'PERMUTATIONA',
        call: "PERMUTATIONA(4, 3)",
        result: 64,
        definition: {
          en: 'Calculates the number of permutations with repetition.',
          cn: '计算允许重复的排列数。',
          ja: '繰り返しを許した順列の数を計算します。'
        },
        parameterDefinitions: {
          en: 'total n, chosen k',
          cn: '参数依次是总数n、选择数k。',
          ja: '全体n、選択k'
        }
      },
      {
        title: 'PHI',
        call: "PHI(0.75)",
        result: 0.30113743215480443,
        definition: {
          en: 'Calculates the density function for the standard normal distribution.',
          cn: '计算标准正态分布的密度函数。',
          ja: '標準正規分布の密度関数を計算します。'
        },
        parameterDefinitions: {
          en: 'a number representing the z-score',
          cn: '参数是一个数值，表示z分数。',
          ja: 'zスコアを表す数'
        }
      },
      {
        title: 'POISSONDIST',
        call: "POISSONDIST(2, 5, true)",
        result: 0.12465201948308113,
        definition: {
          en: 'Calculates the Poisson distribution.',
          cn: '计算泊松分布。',
          ja: 'ポアソン分布を計算します。'
        },
        parameterDefinitions: {
          en: 'number of events, mean, cumulative flag',
          cn: '参数依次是事件次数、平均值、累积标志。',
          ja: '事象の回数、平均、累積フラグ'
        }
      },
      {
        title: 'PROB',
        call: "PROB([1,2,3,4], [0.1,0.2,0.2,0.1], 2, 3)",
        result: 0.4,
        definition: {
          en: 'Calculates the sum of probabilities.',
          cn: '计算概率之和。',
          ja: '確率の合計を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, array of probabilities, lower limit, upper limit',
          cn: '参数依次是数值数组、概率数组、下限、上限。',
          ja: '数値の配列、確率の配列、下限、上限'
        }
      },
      {
        title: 'QUARTILEEXC',
        call: "QUARTILEEXC([1,2,3,4], 1)",
        result: 1.25,
        definition: {
          en: 'Calculates the quartile exclusive.',
          cn: '计算排除四分位数。',
          ja: '四分位数を除外して計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, quart value',
          cn: '参数依次是数值数组、quart值。',
          ja: '数値の配列、quartの値'
        }
      },
      {
        title: 'QUARTILEINC',
        call: "QUARTILEINC([1,2,3,4], 1)",
        result: 1.75,
        definition: {
          en: 'Calculates the quartile inclusive.',
          cn: '计算包含四分位数。',
          ja: '四分位数を含めて計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, quart value',
          cn: '参数依次是数值数组、quart值。',
          ja: '数値の配列、quartの値'
        }
      },
      {
        title: 'RANKAVG',
        call: "RANKAVG(4, [2,4,4,8,8,16], false)",
        result: 4.5,
        definition: {
          en: 'Calculates the average rank.',
          cn: '计算平均排名。',
          ja: '平均ランクを計算します。'
        },
        parameterDefinitions: {
          en: 'value, array of numbers, order (ascending/descending)',
          cn: '参数依次是数值、数值数组、排序方式（升序/降序）。',
          ja: '値、数値の配列、順序（昇順/降順）'
        }
      },
      {
        title: 'RANKEQ',
        call: "RANKEQ(4, [2,4,4,8,8,16], false)",
        result: 4,
        definition: {
          en: 'Calculates the rank equal to a specified value.',
          cn: '计算等于指定值的排名。',
          ja: '指定された値に等しいランクを計算します。'
        },
        parameterDefinitions: {
          en: 'value, array of numbers, order (ascending/descending)',
          cn: '参数依次是数值、数值数组、排序方式（升序/降序）。',
          ja: '値、数値の配列、順序（昇順/降順）'
        }
      },
      {
        title: 'RSQ',
        call: "RSQ([9,7,5,3,1], [10,6,1,5,3])",
        result: 0.4891304347826088,
        definition: {
          en: 'Calculates the coefficient of determination.',
          cn: '计算决定系数。',
          ja: '決定係数を計算します。'
        },
        parameterDefinitions: {
          en: 'two arrays of numbers representing two datasets',
          cn: '参数是两个数值数组，表示两个数据集。',
          ja: '2つのデータセットを表す数値の配列'
        }
      },
      {
        title: 'SKEW',
        call: "SKEW([3,4,5,2,3,4,5,6,4,7])",
        result: 0.3595430714067974,
        definition: {
          en: 'Calculates the skewness.',
          cn: '计算偏度。',
          ja: '歪度を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers representing data points',
          cn: '参数是数值数组，表示数据点。',
          ja: 'データポイントを表す数値の配列'
        }
      },
      {
        title: 'SKEWP',
        call: "SKEWP([3,4,5,2,3,4,5,6,4,7])",
        result: 0.303193339354144,
        definition: {
          en: 'Calculates the skewness based on a population.',
          cn: '计算基于总体的偏度。',
          ja: '母集団に基づく歪度を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers representing data points',
          cn: '参数是数值数组，表示数据点。',
          ja: 'データポイントを表す数値の配列'
        }
      },
      {
        title: 'SLOPE',
        call: "SLOPE([1,9,5,7], [0,4,2,3])",
        result: 2,
        definition: {
          en: 'Calculates the slope of the linear regression.',
          cn: '计算线性回归的斜率。',
          ja: '線形回帰の傾きを計算します。'
        },
        parameterDefinitions: {
          en: 'array of known y-values, array of known x-values',
          cn: '参数依次是已知y值数组、已知x值数组。',
          ja: '既知のyの値の配列、既知のxの値の配列'
        }
      },
      {
        title: 'SMALL',
        call: "SMALL([3,5,3,5,4,4,2,4,6,7], 3)",
        result: 3,
        definition: {
          en: 'Returns the k-th smallest value.',
          cn: '返回第k小的值。',
          ja: 'k番目に小さい値を返します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, k value',
          cn: '参数依次是数值数组、k值。',
          ja: '数値の配列、kの値'
        }
      },
      {
        title: 'STANDARDIZE',
        call: "STANDARDIZE(42, 40, 1.5)",
        result: 1.3333333333333333,
        definition: {
          en: 'Standardizes a value to a z-score.',
          cn: '将值标准化为z分数。',
          ja: '値をzスコアに標準化します。'
        },
        parameterDefinitions: {
          en: 'value, mean, standard deviation',
          cn: '参数依次是值、平均值、标准差。',
          ja: '値、平均、標準偏差'
        }
      },
      {
        title: 'STDEVA',
        call: "STDEVA([2,4], [8,16], [true, false])",
        result: 6.013872850889572,
        definition: {
          en: 'Calculates the standard deviation including text and logical values.',
          cn: '计算包含文本和逻辑值的标准差。',
          ja: 'テキストと論理値を含む標準偏差を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'STDEVP',
        call: "STDEVP([2,4], [8,16], [true, false])",
        result: 5.361902647381804,
        definition: {
          en: 'Calculates the standard deviation of a population.',
          cn: '计算总体标准差。',
          ja: '母集団の標準偏差を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'STDEVPA',
        call: "STDEVPA([2,4], [8,16], [true, false])",
        result: 5.489889697333535,
        definition: {
          en: 'Calculates the standard deviation of a population including text and logical values.',
          cn: '计算基于总体并包含文本和逻辑值的标准差。',
          ja: 'テキストと論理値を含む母集団の標準偏差を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'STDEVS',
        call: "STDEVS([2,4], [8,16], [true, false])",
        result: 6.191391873668904,
        definition: {
          en: 'Calculates the sample standard deviation.',
          cn: '计算样本标准差。',
          ja: '標本の標準偏差を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'STEYX',
        call: "STEYX([2,3,9,1,8,7,5], [6,5,11,7,5,4,4])",
        result: 3.305718950210041,
        definition: {
          en: 'Calculates the standard error of the predicted value.',
          cn: '计算预测值的标准误差。',
          ja: '予測値の標準誤差を計算します。'
        },
        parameterDefinitions: {
          en: 'array of known y-values, array of known x-values',
          cn: '参数依次是已知y值数组、已知x值数组。',
          ja: '既知のyの値の配列、既知のxの値の配列'
        }
      },
      {
        title: 'TINV',
        call: "TINV(0.9946953263673741, 1)",
        result: 59.99999999996535,
        definition: {
          en: 'Calculates the inverse of the t-distribution.',
          cn: '计算t分布的反函数。',
          ja: 't分布の逆関数を計算します。'
        },
        parameterDefinitions: {
          en: 'probability, degrees of freedom',
          cn: '参数依次是概率、自由度。',
          ja: '確率、自由度'
        }
      },
      {
        title: 'TRIMMEAN',
        call: "TRIMMEAN([4,5,6,7,2,3,4,5,1,2,3], 0.2)",
        result: 3.7777777777777777,
        definition: {
          en: 'Calculates the mean of the interior of a data set.',
          cn: '计算内部平均值。',
          ja: 'データセットの内側の平均を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, fraction to trim',
          cn: '参数依次是数值数组、修剪比例。',
          ja: '数値の配列、トリミングする比率'
        }
      },
      {
        title: 'VARA',
        call: "VARA([2,4], [8,16], [true, false])",
        result: 36.16666666666667,
        definition: {
          en: 'Calculates variance including text and logical values.',
          cn: '计算包含文本和逻辑值的方差。',
          ja: 'テキストと論理値を含む分散を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'VARP',
        call: "VARP([2,4], [8,16], [true, false])",
        result: 28.75,
        definition: {
          en: 'Calculates variance based on an entire population.',
          cn: '计算总体方差。',
          ja: '母集団全体に基づく分散を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'VARPA',
        call: "VARPA([2,4], [8,16], [true, false])",
        result: 30.13888888888889,
        definition: {
          en: 'Calculates variance based on an entire population including text and logical values.',
          cn: '计算基于总体并包含文本和逻辑值的方差。',
          ja: 'テキストと論理値を含む母集団全体の分散を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, text, or logical values',
          cn: '参数是数值、文本或逻辑值的数组。',
          ja: '数値、テキスト、または論理値の配列'
        }
      },
      {
        title: 'VARS',
        call: "VARS([2,4], [8,16], [true, false])",
        result: 38.333333333333336,
        definition: {
          en: 'Calculates sample variance.',
          cn: '计算样本方差。',
          ja: '標本の分散を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers',
          cn: '参数是数值数组。',
          ja: '数値の配列'
        }
      },
      {
        title: 'WEIBULLDIST',
        call: "WEIBULLDIST(105, 20, 100, true)",
        result: 0.9295813900692769,
        definition: {
          en: 'Calculates the Weibull distribution.',
          cn: '计算韦伯分布。',
          ja: 'ワイブル分布を計算します。'
        },
        parameterDefinitions: {
          en: 'value, alpha, beta, cumulative flag',
          cn: '参数依次是值、α、β、累积标志。',
          ja: '値、α、β、累積フラグ'
        }
      },
      {
        title: 'ZTEST',
        call: "ZTEST([3,6,7,8,6,5,4,2,1,9], 4)",
        result: 0.09057419685136381,
        definition: {
          en: 'Calculates the one-tailed probability of a z-test.',
          cn: '计算z检验的单尾概率。',
          ja: 'z検定の片尾確率を計算します。'
        },
        parameterDefinitions: {
          en: 'array of numbers, hypothesized mean',
          cn: '参数依次是数值数组、假设平均值。',
          ja: '数値の配列、仮説平均'
        }
      }
    ]
  },
  {
    category: 'TEXT',
    functions: [
      {
        title: 'CHAR',
        call: "CHAR(65)",
        result: 'A',
        definition: {
          en: 'Converts a number code to its corresponding character.',
          cn: '将数字代码转换为对应的字符。',
          ja: '数値コードを対応する文字に変換します。'
        },
        parameterDefinitions: {
          en: 'number representing the character code',
          cn: '参数是数字，表示字符的编码。',
          ja: '文字のコードを表す数値'
        }
      },
      {
        title: 'CLEAN',
        call: "CLEAN('Monthly report')",
        result: 'Monthly report',
        definition: {
          en: 'Removes all non-printable characters from text.',
          cn: '移除文本中的所有非打印字符。',
          ja: 'テキストからすべての非表示文字を削除します。'
        },
        parameterDefinitions: {
          en: 'text string to clean',
          cn: '参数是包含要清理的文本字符串。',
          ja: 'クリーニングするテキスト文字列'
        }
      },
      {
        title: 'CODE',
        call: "CODE('A')",
        result: 65,
        definition: {
          en: 'Returns the numeric code of the first character in a text string.',
          cn: '返回文本字符串中第一个字符的数字代码。',
          ja: 'テキスト文字列の最初の文字の数値コードを返します。'
        },
        parameterDefinitions: {
          en: 'text string containing a single character',
          cn: '参数是包含单个字符的文本字符串。',
          ja: '単一の文字を含むテキスト文字列'
        }
      },
      {
        title: 'CONCATENATE',
        call: "CONCATENATE('Andreas', ' ', 'Hauser')",
        result: 'Andreas Hauser',
        definition: {
          en: 'Joins multiple text strings into one string.',
          cn: '将多个文本字符串合并为一个字符串。',
          ja: '複数のテキスト文字列を1つの文字列に結合します。'
        },
        parameterDefinitions: {
          en: 'one or more text strings to concatenate',
          cn: '参数是一个或多个要连接的文本字符串。',
          ja: '連結する1つ以上のテキスト文字列'
        }
      },
      {
        title: 'EXACT',
        call: "EXACT('Word', 'word')",
        result: false,
        definition: {
          en: 'Checks if two text strings are identical, case-sensitive.',
          cn: '检查两个字符串是否完全相同，区分大小写。',
          ja: '2つのテキスト文字列が同一であるかを確認します（大文字と小文字を区別）。'
        },
        parameterDefinitions: {
          en: 'two text strings to compare',
          cn: '参数是两个要比较的文本字符串。',
          ja: '比較する2つのテキスト文字列'
        }
      },
      {
        title: 'FIND',
        call: "FIND('M', 'Miriam McGovern', 3)",
        result: 8,
        definition: {
          en: 'Finds the position of a substring within text, starting at a specified position.',
          cn: '从起始位置开始查找子字符串的位置。',
          ja: '指定された位置から開始して、テキスト内の部分文字列の位置を見つけます。'
        },
        parameterDefinitions: {
          en: 'text to find, source text, optional start position',
          cn: '参数包括要查找的文本、源文本和可选的起始位置。',
          ja: '見つけるテキスト、ソーステキスト、オプションの開始位置'
        }
      },
      {
        title: 'LEFT',
        call: "LEFT('Sale Price', 4)",
        result: 'Sale',
        definition: {
          en: 'Extracts a specified number of characters from the left side of a string.',
          cn: '从字符串左侧提取指定数量的字符。',
          ja: '文字列の左側から指定された数の文字を抽出します。'
        },
        parameterDefinitions: {
          en: 'text string and number of characters to extract',
          cn: '参数是文本字符串和要提取的字符数。',
          ja: 'テキスト文字列と抽出する文字数'
        }
      },
      {
        title: 'LEN',
        call: "LEN('Phoenix, AZ')",
        result: 11,
        definition: {
          en: 'Returns the number of characters in a text string.',
          cn: '返回文本字符串中的字符数。',
          ja: 'テキスト文字列の文字数を返します。'
        },
        parameterDefinitions: {
          en: 'text string to count',
          cn: '参数是包含要计数的文本字符串。',
          ja: 'カウントするテキスト文字列'
        }
      },
      {
        title: 'LOWER',
        call: "LOWER('E. E. Cummings')",
        result: 'e. e. cummings',
        definition: {
          en: 'Converts all characters to lowercase.',
          cn: '将所有字符转换为小写。',
          ja: 'すべての文字を小文字に変換します。'
        },
        parameterDefinitions: {
          en: 'text string to convert',
          cn: '参数是要转换的文本字符串。',
          ja: '変換するテキスト文字列'
        }
      },
      {
        title: 'MID',
        call: "MID('Fluid Flow', 7, 20)",
        result: 'Flow',
        definition: {
          en: 'Extracts a specified number of characters from the middle of a string.',
          cn: '从字符串中间提取指定数量的字符。',
          ja: '文字列の中央から指定された数の文字を抽出します。'
        },
        parameterDefinitions: {
          en: 'text string, start position, number of characters to extract',
          cn: '参数是文本字符串、起始位置和要提取的字符数。',
          ja: 'テキスト文字列、開始位置、抽出する文字数'
        }
      },
      {
        title: 'NUMBERVALUE',
        call: "NUMBERVALUE('2.500,27', ',', '.')",
        result: 2500.27,
        definition: {
          en: 'Converts text to a number based on specified delimiters.',
          cn: '根据指定的分隔符将文本转换为数字。',
          ja: '指定された区切り文字に基づいてテキストを数値に変換します。'
        },
        parameterDefinitions: {
          en: 'text string, decimal separator, group separator',
          cn: '参数是文本字符串、小数分隔符和组分隔符。',
          ja: 'テキスト文字列、小数点区切り文字、グループ区切り文字'
        }
      },
      {
        title: 'PROPER',
        call: "PROPER('this is a TITLE')",
        result: 'This Is A Title',
        definition: {
          en: 'Capitalizes the first letter of each word.',
          cn: '将每个单词的首字母大写。',
          ja: '各単語の最初の文字を大文字にします。'
        },
        parameterDefinitions: {
          en: 'text string to format',
          cn: '参数是要格式化的文本字符串。',
          ja: '書式設定するテキスト文字列'
        }
      },
      {
        title: 'REPLACE',
        call: "REPLACE('abcdefghijk', 6, 5, '*')",
        result: 'abcde*k',
        definition: {
          en: 'Replaces part of old text with new text.',
          cn: '用新文本替换旧文本中的部分。',
          ja: '古いテキストの一部を新しいテキストで置き換えます。'
        },
        parameterDefinitions: {
          en: 'original text, start position, number of characters to replace, new text',
          cn: '参数是原始文本、起始位置、要替换的字符数和新文本。',
          ja: '元のテキスト、開始位置、置き換える文字数、新しいテキスト'
        }
      },
      {
        title: 'REPT',
        call: "REPT('*-', 3)",
        result: '*-*-*-',
        definition: {
          en: 'Repeats text a specified number of times.',
          cn: '根据指定次数重复文本。',
          ja: 'テキストを指定回数繰り返します。'
        },
        parameterDefinitions: {
          en: 'text string and number of repetitions',
          cn: '参数是文本字符串和重复次数。',
          ja: 'テキスト文字列と繰り返し回数'
        }
      },
      {
        title: 'RIGHT',
        call: "RIGHT('Sale Price', 5)",
        result: 'Price',
        definition: {
          en: 'Extracts a specified number of characters from the right side of a string.',
          cn: '从字符串右侧提取指定数量的字符。',
          ja: '文字列の右側から指定された数の文字を抽出します。'
        },
        parameterDefinitions: {
          en: 'text string and number of characters to extract',
          cn: '参数是文本字符串和要提取的字符数。',
          ja: 'テキスト文字列と抽出する文字数'
        }
      },
      {
        title: 'ROMAN',
        call: "ROMAN(499)",
        result: 'CDXCIX',
        definition: {
          en: 'Converts an Arabic numeral to Roman numerals.',
          cn: '将阿拉伯数字转换为罗马数字。',
          ja: 'アラビア数字をローマ数字に変換します。'
        },
        parameterDefinitions: {
          en: 'Arabic numeral to convert',
          cn: '参数是要转换的阿拉伯数字。',
          ja: '変換するアラビア数字'
        }
      },
      {
        title: 'SEARCH',
        call: "SEARCH('margin', 'Profit Margin')",
        result: 8,
        definition: {
          en: 'Finds the position of a substring in text, not case-sensitive.',
          cn: '在文本中查找子字符串，不区分大小写。',
          ja: 'テキスト内で部分文字列の位置を見つけます（大文字と小文字を区別しません）。'
        },
        parameterDefinitions: {
          en: 'text to find, source text',
          cn: '参数包括要查找的文本和源文本。',
          ja: '見つけるテキスト、ソーステキスト'
        }
      },
      {
        title: 'SUBSTITUTE',
        call: "SUBSTITUTE('Quarter 1, 2011', '1', '2', 3)",
        result: 'Quarter 1, 2012',
        definition: {
          en: 'Replaces specific instances of old text with new text.',
          cn: '用新文本替换旧文本中的特定实例。',
          ja: '古いテキストの特定のインスタンスを新しいテキストで置き換えます。'
        },
        parameterDefinitions: {
          en: 'original text, old text, new text, optional instance to replace',
          cn: '参数是原始文本、旧文本、新文本和可选的替换实例。',
          ja: '元のテキスト、古いテキスト、新しいテキスト、オプションの置き換えインスタンス'
        }
      },
      {
        title: 'T',
        call: "T('Rainfall')",
        result: 'Rainfall',
        definition: {
          en: 'Returns the text if the argument is text; otherwise returns an empty string.',
          cn: '如果参数是文本，则返回该文本；否则返回空字符串。',
          ja: '引数がテキストであればそのテキストを返し、そうでなければ空の文字列を返します。'
        },
        parameterDefinitions: {
          en: 'any data type',
          cn: '参数可以是任何类型的数据。',
          ja: '任意のデータ型'
        }
      },
      {
        title: 'TRIM',
        call: "TRIM(' First Quarter Earnings ')",
        result: 'First Quarter Earnings',
        definition: {
          en: 'Removes spaces before and after text, preserves internal multiple spaces as one.',
          cn: '去除文本前后的空格，内部多于一个的空格保留为一个。',
          ja: 'テキストの前後にあるスペースを削除し、内部の複数のスペースを1つに保ちます。'
        },
        parameterDefinitions: {
          en: 'text string to trim',
          cn: '参数是要修剪的文本字符串。',
          ja: 'トリミングするテキスト文字列'
        }
      },
      {
        title: 'TEXTJOIN',
        call: "TEXTJOIN(' ', true, 'The', '', 'sun', 'will', 'come', 'up', 'tomorrow.')",
        result: 'The sun will come up tomorrow.',
        definition: {
          en: 'Joins multiple text items into one string using a specified delimiter.',
          cn: '将多个文本项连接成一个字符串，使用指定的分隔符。',
          ja: '指定された区切り文字を使用して、複数のテキスト項目を1つの文字列に結合します。'
        },
        parameterDefinitions: {
          en: 'delimiter, ignore empty flag, text items to join',
          cn: '参数是分隔符、忽略空值标志和要连接的文本项。',
          ja: '区切り文字、空を無視するフラグ、結合するテキスト項目'
        }
      },
      {
        title: 'UNICHAR',
        call: "UNICHAR(66)",
        result: 'B',
        definition: {
          en: 'Returns the character corresponding to the given Unicode number.',
          cn: '返回给定Unicode数字对应的字符。',
          ja: '指定されたUnicode数値に対応する文字を返します。'
        },
        parameterDefinitions: {
          en: 'Unicode character code',
          cn: '参数是Unicode字符代码。',
          ja: 'Unicode文字コード'
        }
      },
      {
        title: 'UNICODE',
        call: "UNICODE('B')",
        result: 66,
        definition: {
          en: 'Returns the Unicode number of the first character in a text string.',
          cn: '返回文本的第一个字符的Unicode数字。',
          ja: 'テキスト文字列の最初の文字のUnicode数値を返します。'
        },
        parameterDefinitions: {
          en: 'text string containing a single character',
          cn: '参数是包含单个字符的文本字符串。',
          ja: '単一の文字を含むテキスト文字列'
        }
      },
      {
        title: 'UPPER',
        call: "UPPER('total')",
        result: 'TOTAL',
        definition: {
          en: 'Converts all characters to uppercase.',
          cn: '将所有字符转换为大写。',
          ja: 'すべての文字を大文字に変換します。'
        },
        parameterDefinitions: {
          en: 'text string to convert',
          cn: '参数是要转换的文本字符串。',
          ja: '変換するテキスト文字列'
        }
      }
    ]
  }
];

const CommonComponent = generateFunctionsComponent({ data: functionsData });

const FormulajsFunctions: React.FC = () => {
  console.log(Object.keys(formulajs));

  // 在此挂载 formula.js
  useEffect(() => {
    Object.keys(formulajs).forEach((key) => {
      (window as any)[key] = (formulajs as any)[key];
    });
  }, []);

  return <CommonComponent />;
};

export default FormulajsFunctions;

