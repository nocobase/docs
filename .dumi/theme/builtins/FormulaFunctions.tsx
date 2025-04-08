import React from 'react';
import * as formulajs from '@formulajs/formulajs';
import generateFunctionsComponent from './generator/generateFunctionsComponent';
import { evaluate } from './utils/formulaEvaluate';
import { IFunctionCategory } from './generator/generateFunctionsComponent';

const functionsData = [
  {
    category: "DATE",
    functions: [
      {
        title: "DATE",
        call: "DATE(2008, 7, 8)",
        result: "Tue Jul 08 2008 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Create a date by given year, month, day.",
          cn: "根据给定的年、月和日创建日期。",
          ja: "指定された年、月、日から日付を作成します。"
        },
        parameterDefinitions: {
          en: "year (integer), month (1-12), date (1-31)",
          cn: "年份（整数），月份（1-12），日期（1-31）。",
          ja: "年（整数）、月（1-12）、日（1-31）"
        }
      },
      {
        title: "DATEVALUE",
        call: "DATEVALUE('8/22/2011')",
        result: "Mon Aug 22 2011 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Converts a date in text format to a serial number.",
          cn: "将文本格式的日期转换为日期序列号。",
          ja: "テキスト形式の日付をシリアル番号に変換します。"
        },
        parameterDefinitions: {
          en: "text string representing a date",
          cn: "表示日期的文本字符串",
          ja: "日付を表す文字列"
        }
      },
      {
        title: "DAY",
        call: "DAY('15-Apr-11')",
        result: 15,
        definition: {
          en: "Returns the day of the specified date.",
          cn: "返回指定日期中的日部分。",
          ja: "指定された日付の日にちを返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string",
          cn: "日期值或日期文本字符串。",
          ja: "日付値または日付の文字列"
        }
      },
      {
        title: "DAYS",
        call: "DAYS('3/15/11', '2/1/11')",
        result: 42,
        definition: {
          en: "Calculates the number of days between two dates.",
          cn: "计算两个日期之间的天数。",
          ja: "2つの日付間の日数を計算します。"
        },
        parameterDefinitions: {
          en: "end date, start date",
          cn: "结束日期，开始日期。",
          ja: "終了日、開始日"
        }
      },
      {
        title: "DAYS360",
        call: "DAYS360('1-Jan-11', '31-Dec-11')",
        result: 360,
        definition: {
          en: "Calculates the number of days between two dates based on a 360-day year.",
          cn: "基于一年360天计算两个日期间的天数。",
          ja: "360日の年に基づいて2つの日付間の日数を計算します。"
        },
        parameterDefinitions: {
          en: "start date, end date",
          cn: "起始日期，结束日期。",
          ja: "開始日、終了日"
        }
      },
      {
        title: "EDATE",
        call: "EDATE('1/15/11', -1)",
        result: "Wed Dec 15 2010 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the date that is the indicated number of months before or after the start date.",
          cn: "返回指定月份数之前或之后的日期。",
          ja: "開始日から指定された月数前後にある日付を返します。"
        },
        parameterDefinitions: {
          en: "start date, months (positive for future, negative for past)",
          cn: "起始日期，月份数（正数为将来，负数为过去）。",
          ja: "開始日、月数（未来は正、過去は負）"
        }
      },
      {
        title: "EOMONTH",
        call: "EOMONTH('1/1/11', -3)",
        result: "Sun Oct 31 2010 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the last day of the month that is the indicated number of months before or after the start date.",
          cn: "返回指定月份数之前或之后的月末日期。",
          ja: "開始日から指定された月数前後にある月末の日付を返します。"
        },
        parameterDefinitions: {
          en: "start date, months (positive for future, negative for past)",
          cn: "起始日期，月份数（正数为将来，负数为过去）。",
          ja: "開始日、月数（未来は正、過去は負）"
        }
      },
      {
        title: "HOUR",
        call: "HOUR('7/18/2011 7:45:00 AM')",
        result: 7,
        definition: {
          en: "Returns the hour part of a time value.",
          cn: "返回时间中的小时部分。",
          ja: "時間値の時間を返します。"
        },
        parameterDefinitions: {
          en: "time value or time text string",
          cn: "时间值或时间文本字符串。",
          ja: "時間値または時間の文字列"
        }
      },
      {
        title: "MINUTE",
        call: "MINUTE('2/1/2011 12:45:00 PM')",
        result: 45,
        definition: {
          en: "Returns the minute part of a time value.",
          cn: "返回时间中的分钟部分。",
          ja: "時間値の分を返します。"
        },
        parameterDefinitions: {
          en: "time value or time text string",
          cn: "时间值或时间文本字符串。",
          ja: "時間値または時間の文字列"
        }
      },
      {
        title: "ISOWEEKNUM",
        call: "ISOWEEKNUM('3/9/2012')",
        result: 10,
        definition: {
          en: "Returns the ISO week number of the year for a given date.",
          cn: "返回一年中给定日期所在的ISO周数。",
          ja: "指定された日付が属するISO週番号を返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string",
          cn: "日期值或日期文本字符串。",
          ja: "日付値または日付の文字列"
        }
      },
      {
        title: "MONTH",
        call: "MONTH('15-Apr-11')",
        result: 4,
        definition: {
          en: "Returns the month part of a date value.",
          cn: "返回指定日期中的月部分。",
          ja: "日付値の月を返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string",
          cn: "日期值或日期文本字符串。",
          ja: "日付値または日付の文字列"
        }
      },
      {
        title: "NETWORKDAYS",
        call: "NETWORKDAYS('10/1/2012', '3/1/2013', ['11/22/2012'])",
        result: 109,
        definition: {
          en: "Calculates the total number of working days between two dates, excluding weekends and specified holidays.",
          cn: "计算两个日期间的工作日数，不包括周末和指定的假期。",
          ja: "2つの日付間の平日の総数を計算し、週末と指定された休日を除きます。"
        },
        parameterDefinitions: {
          en: "start date, end date, optional holidays array",
          cn: "开始日期，结束日期，可选假期数组。",
          ja: "開始日、終了日、オプションの休日配列"
        }
      },
      {
        title: "NETWORKDAYSINTL",
        call: "NETWORKDAYSINTL('1/1/2006', '2/1/2006', 7, ['1/2/2006'])",
        result: 23,
        definition: {
          en: "Calculates the total number of working days between two dates, allowing for custom weekends, and excluding specified holidays.",
          cn: "计算两个日期间的工作日数，允许自定义周末，并排除指定假期。",
          ja: "2つの日付間の平日の総数を計算し、カスタム週末を許可し、指定された休日を除きます。"
        },
        parameterDefinitions: {
          en: "start date, end date, weekend pattern, optional holidays array",
          cn: "开始日期，结束日期，周末模式，可选假期数组。",
          ja: "開始日、終了日、週末パターン、オプションの休日配列"
        }
      },
      {
        title: "NOW",
        call: "NOW()",
        result: "Tue Apr 08 2025 16:41:21 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the current date and time.",
          cn: "返回当前日期和时间。",
          ja: "現在の日付と時刻を返します。"
        },
        parameterDefinitions: {
          en: "no parameters",
          cn: "无参数。",
          ja: "パラメータなし"
        }
      },
      {
        title: "SECOND",
        call: "SECOND('2/1/2011 4:48:18 PM')",
        result: 18,
        definition: {
          en: "Returns the second part of a time value.",
          cn: "返回时间中的秒部分。",
          ja: "時間値の秒を返します。"
        },
        parameterDefinitions: {
          en: "time value or time text string",
          cn: "时间值或时间文本字符串。",
          ja: "時間値または時間の文字列"
        }
      },
      {
        title: "TIME",
        call: "TIME(16, 48, 10)",
        result: 0.700115741,
        definition: {
          en: "Creates a time from the given hour, minute, and second.",
          cn: "根据给定的小时、分钟和秒创建时间。",
          ja: "指定された時間、分、秒から時間を作成します。"
        },
        parameterDefinitions: {
          en: "hour (0-23), minute (0-59), second (0-59)",
          cn: "小时（0-23），分钟（0-59），秒（0-59）。",
          ja: "時間（0-23）、分（0-59）、秒（0-59）"
        }
      },
      {
        title: "TIMEVALUE",
        call: "TIMEVALUE('22-Aug-2011 6:35 AM')",
        result: 0.274305556,
        definition: {
          en: "Converts a time in text format to a time serial number.",
          cn: "将文本格式的时间转换为时间序列号。",
          ja: "テキスト形式の時間を時間のシリアル番号に変換します。"
        },
        parameterDefinitions: {
          en: "text string representing a time",
          cn: "文本字符串，表示时间。",
          ja: "時間を表す文字列"
        }
      },
      {
        title: "TODAY",
        call: "TODAY()",
        result: "Tue Apr 08 2025 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the current date.",
          cn: "返回今天的日期。",
          ja: "今日の日付を返します。"
        },
        parameterDefinitions: {
          en: "no parameters",
          cn: "无参数。",
          ja: "パラメータなし"
        }
      },
      {
        title: "WEEKDAY",
        call: "WEEKDAY('2/14/2008', 3)",
        result: 3,
        definition: {
          en: "Returns the day of the week as a number.",
          cn: "返回一周中某一天的数字。",
          ja: "週の日にちを数値で返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string, return type (1-3)",
          cn: "日期值或日期文本字符串，返回类型（1-3）。",
          ja: "日付値または日付の文字列、戻り値のタイプ（1-3）"
        }
      },
      {
        title: "YEAR",
        call: "YEAR('7/5/2008')",
        result: 2008,
        definition: {
          en: "Returns the year part of a date value.",
          cn: "返回指定日期中的年部分。",
          ja: "日付値の年を返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string",
          cn: "日期值或日期文本字符串。",
          ja: "日付値または日付の文字列"
        }
      },
      {
        title: "WEEKNUM",
        call: "WEEKNUM('3/9/2012', 2)",
        result: 11,
        definition: {
          en: "Returns the week number of the year for a given date.",
          cn: "返回一年中给定日期所在的周数。",
          ja: "指定された日付が属する週番号を返します。"
        },
        parameterDefinitions: {
          en: "date value or date text string, optional week start day (1=Sunday, 2=Monday)",
          cn: "日期值或日期文本字符串，可选周开始日（1=星期日，2=星期一）。",
          ja: "日付値または日付の文字列、オプションの週の開始日（1=日曜日、2=月曜日）"
        }
      },
      {
        title: "WORKDAY",
        call: "WORKDAY('10/1/2008', 151, ['11/26/2008', '12/4/2008'])",
        result: "Mon May 04 2009 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the date that is the indicated number of workdays before or after the start date, excluding weekends and specified holidays.",
          cn: "返回从起始日期起指定工作日数之前或之后的日期，不包括周末和指定的假期。",
          ja: "開始日から指定された作業日前後にある日付を返し、週末と指定された休日を除きます。"
        },
        parameterDefinitions: {
          en: "start date, workdays, optional holidays array",
          cn: "起始日期，工作日数，可选假期数组。",
          ja: "開始日、作業日数、オプションの休日配列"
        }
      },
      {
        title: "WORKDAYINTL",
        call: "WORKDAYINTL('1/1/2012', 30, 17)",
        result: "Sun Feb 05 2012 00:00:00 GMT+0800 (中国标准时间)",
        definition: {
          en: "Returns the date that is the indicated number of workdays before or after the start date, allowing for custom weekends, and excluding specified holidays.",
          cn: "返回从起始日期起指定工作日数之前或之后的日期，允许自定义周末，并排除指定假期。",
          ja: "開始日から指定された作業日前後にある日付を返し、カスタム週末を許可し、指定された休日を除きます。"
        },
        parameterDefinitions: {
          en: "start date, workdays, weekend pattern",
          cn: "起始日期，工作日数，周末模式。",
          ja: "開始日、作業日数、週末パターン"
        }
      },
      {
        title: "YEARFRAC",
        call: "YEARFRAC('1/1/2012', '7/30/2012', 3)",
        result: 0.578082192,
        definition: {
          en: "Calculates the fraction of the year represented by the number of whole days between two dates.",
          cn: "计算两个日期之间的年分数。",
          ja: "2つの日付間の全日数が表す年の分数を計算します。"
        },
        parameterDefinitions: {
          en: "start date, end date, optional basis (day count basis)",
          cn: "开始日期，结束日期，可选基础（日计数基准）。",
          ja: "開始日、終了日、オプションのベース（日数の基準）"
        }
      }
    ]
  },
  {
    category: "FINANCIAL",
    functions: [
      {
        title: "ACCRINT",
        call: "ACCRINT('01/01/2011', '02/01/2011', '07/01/2014', 0.1, 1000, 1, 0)",
        result: 350,
        definition: {
          en: "Calculate the accrued interest for a security that pays periodic interest.",
          cn: "计算定期支付利息的有价证券的应计利息。",
          ja: "定期的な利払いをする証券の付利金を計算します。"
        },
        parameterDefinitions: {
          en: "start_date, first_interest, settlement, rate, par, frequency, basis",
          cn: "起始日期，首次支付利息日期，结算日期，年利率，面值，期间数，基础。",
          ja: "開始日、最初の利払日、決済日、利率、額面、頻度、基準"
        }
      },
      {
        title: "CUMIPMT",
        call: "CUMIPMT(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -9916.772513957,
        definition: {
          en: "Calculate the cumulative interest paid on a loan between start and end periods.",
          cn: "计算一系列付款中累积的利息支付。",
          ja: "開始期間と終了期間の間に支払われるローンの累積利息を計算します。"
        },
        parameterDefinitions: {
          en: "rate, nper, pv, start_period, end_period, type",
          cn: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。",
          ja: "利率、総期間、現在価値、開始期間、終了期間、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "CUMPRINC",
        call: "CUMPRINC(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -614.086327109,
        definition: {
          en: "Calculate the cumulative principal paid on a loan between start and end periods.",
          cn: "计算一系列付款中累积的本金支付。",
          ja: "開始期間と終了期間の間に支払われるローンの累積元本を計算します。"
        },
        parameterDefinitions: {
          en: "rate, nper, pv, start_period, end_period, type",
          cn: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。",
          ja: "利率、総期間、現在価値、開始期間、終了期間、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "DB",
        call: "DB(1000000, 100000, 6, 1, 6)",
        result: 159500,
        definition: {
          en: "Calculate the depreciation of an asset for a specified period using the fixed-declining balance method.",
          cn: "使用固定余额递减法计算折旧。",
          ja: "固定残価逓減法を使用して指定された期間の資産の減価償却を計算します。"
        },
        parameterDefinitions: {
          en: "cost, salvage, life, period, month",
          cn: "成本，残值，使用寿命，期间，月份。",
          ja: "原価、残価、耐用年数、期間、月数"
        }
      },
      {
        title: "DDB",
        call: "DDB(1000000, 100000, 6, 1, 1.5)",
        result: 250000,
        definition: {
          en: "Calculate the depreciation of an asset for a specified period using the double-declining balance method or another specified method.",
          cn: "使用双倍余额递减法或其他指定方法计算折旧。",
          ja: "二重残価逓減法または他の指定された方法を使用して指定された期間の資産の減価償却を計算します。"
        },
        parameterDefinitions: {
          en: "cost, salvage, life, period, factor",
          cn: "成本，残值，使用寿命，期间，因子。",
          ja: "原価、残価、耐用年数、期間、係数"
        }
      },
      {
        title: "DOLLARDE",
        call: "DOLLARDE(1.1, 16)",
        result: 1.625,
        definition: {
          en: "Converts a dollar price expressed as a fraction into a decimal number.",
          cn: "将分数表示的价格转换为小数表示。",
          ja: "分数で表現されたドル価格を小数に変換します。"
        },
        parameterDefinitions: {
          en: "fractional_dollar, fraction",
          cn: "分数形式的美元价格，分母。",
          ja: "分数形式のドル価格、分母"
        }
      },
      {
        title: "DOLLARFR",
        call: "DOLLARFR(1.625, 16)",
        result: 1.1,
        definition: {
          en: "Converts a dollar price expressed as a decimal number into a fractional dollar.",
          cn: "将小数表示的价格转换为分数表示。",
          ja: "小数で表現されたドル価格を分数のドルに変換します。"
        },
        parameterDefinitions: {
          en: "decimal_dollar, fraction",
          cn: "小数形式的美元价格，分母。",
          ja: "小数形式のドル価格、分母"
        }
      },
      {
        title: "EFFECT",
        call: "EFFECT(0.1, 4)",
        result: 0.103812891,
        definition: {
          en: "Calculate the effective annual interest rate.",
          cn: "计算实际年利率。",
          ja: "実際の年間利率を計算します。"
        },
        parameterDefinitions: {
          en: "nominal_rate, npery",
          cn: "名义年利率，每年复利次数。",
          ja: "名目年利率、年複利回数"
        }
      },
      {
        title: "FV",
        call: "FV(0.1/12, 10, -100, -1000, 0)",
        result: 2124.874409194,
        definition: {
          en: "Calculate the future value of an investment.",
          cn: "计算投资的未来价值。",
          ja: "投資の将来価値を計算します。"
        },
        parameterDefinitions: {
          en: "rate, nper, pmt, pv, type",
          cn: "每期利率，期数，每期支付额，现值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間数、各期支払額、現在価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "FVSCHEDULE",
        call: "FVSCHEDULE(100, [0.09,0.1,0.11])",
        result: 133.089,
        definition: {
          en: "Calculate the future value of an initial principal after applying a series of compound interest rates.",
          cn: "根据一系列复利率计算本金的未来价值。",
          ja: "一連の複利利率を適用した後の初期元本の将来価値を計算します。"
        },
        parameterDefinitions: {
          en: "principal, schedule",
          cn: "本金，利率数组。",
          ja: "元本、利率スケジュール"
        }
      },
      {
        title: "IPMT",
        call: "IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: 928.82357184,
        definition: {
          en: "Calculate the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.",
          cn: "计算特定期间内的利息支付。",
          ja: "一定の利率と定期的な定額返済に基づく投資の特定期間の利息支払を計算します。"
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv, fv, type",
          cn: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "IRR",
        call: "IRR([-75000,12000,15000,18000,21000,24000], 0.075)",
        result: 0.057151429,
        definition: {
          en: "Calculate the internal rate of return for a series of cash flows.",
          cn: "计算内部收益率。",
          ja: "一連のキャッシュフローの内部収益率を計算します。"
        },
        parameterDefinitions: {
          en: "values, guess",
          cn: "现金流数组，估计值。",
          ja: "キャッシュフロー配列、推定値"
        }
      },
      {
        title: "ISPMT",
        call: "ISPMT(0.1/12, 6, 2*12, 100000)",
        result: -625,
        definition: {
          en: "Calculate the interest paid during a specific period of a loan.",
          cn: "计算特定期间内的利息支付（适用于贷款）。",
          ja: "ローンの特定期間の利息支払を計算します。"
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv",
          cn: "每期利率，期间，总期数，贷款金额。",
          ja: "各期利率、期間、総期間、ローン額"
        }
      },
      {
        title: "MIRR",
        call: "MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)",
        result: 0.079717104,
        definition: {
          en: "Calculate the modified internal rate of return for a series of periodic cash flows.",
          cn: "计算修正内部收益率。",
          ja: "一連の定期的なキャッシュフローの修正内部収益率を計算します。"
        },
        parameterDefinitions: {
          en: "values, finance_rate, reinvest_rate",
          cn: "现金流数组，融资利率，再投资利率。",
          ja: "キャッシュフロー配列、財務利率、再投資利率"
        }
      },
      {
        title: "NOMINAL",
        call: "NOMINAL(0.1, 4)",
        result: 0.096454756,
        definition: {
          en: "Calculate the nominal annual interest rate.",
          cn: "计算名义年利率。",
          ja: "名目の年間利率を計算します。"
        },
        parameterDefinitions: {
          en: "effect_rate, npery",
          cn: "实际年利率，每年复利次数。",
          ja: "実際の年間利率、年複利回数"
        }
      },
      {
        title: "NPER",
        call: "NPER(0.1/12, -100, -1000, 10000, 0)",
        result: 63.393854227,
        definition: {
          en: "Calculate the number of periods for an investment based on periodic, constant payments and a constant interest rate.",
          cn: "计算达到目标值所需的期数。",
          ja: "一定の利率と定期的な定額返済に基づく投資の期間数を計算します。"
        },
        parameterDefinitions: {
          en: "rate, pmt, pv, fv, type",
          cn: "每期利率，每期支付额，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、各期支払額、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "NPV",
        call: "NPV(0.1, -10000, 2000, 4000, 8000)",
        result: 1031.350317601,
        definition: {
          en: "Calculate the net present value of an investment based on a series of future cash flows and a discount rate for each period.",
          cn: "计算一系列未来现金流的净现值。",
          ja: "各期間の割引率に基づく一連の将来のキャッシュフローによる投資の純現在価値を計算します。"
        },
        parameterDefinitions: {
          en: "rate, value1, value2, ...",
          cn: "每期折现率，现金流数组。",
          ja: "各期割引率、キャッシュフロー配列"
        }
      },
      {
        title: "PDURATION",
        call: "PDURATION(0.1, 1000, 2000)",
        result: 7.272540897,
        definition: {
          en: "Calculate the number of periods required for an investment to reach a specified value.",
          cn: "计算达到特定值所需的时间。",
          ja: "投資が指定された価値に到達するのに必要な期間数を計算します。"
        },
        parameterDefinitions: {
          en: "rate, pv, fv",
          cn: "每期利率，现值，未来值。",
          ja: "各期利率、現在価値、将来価値"
        }
      },
      {
        title: "PMT",
        call: "PMT(0.1/12, 2*12, 1000, 10000, 0)",
        result: -424.260856379,
        definition: {
          en: "Calculate the payment for a loan based on constant payments and a constant interest rate.",
          cn: "计算贷款的每期支付额。",
          ja: "一定の利率と定額返済に基づくローンの各期支払を計算します。"
        },
        parameterDefinitions: {
          en: "rate, nper, pv, fv, type",
          cn: "每期利率，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "PPMT",
        call: "PPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: -43354.909209775,
        definition: {
          en: "Calculate the principal payment for a given period for an investment based on periodic, constant payments and a constant interest rate.",
          cn: "计算特定期间内的本金支付。",
          ja: "一定の利率と定期的な定額返済に基づく投資の特定期間の元本支払を計算します。"
        },
        parameterDefinitions: {
          en: "rate, per, nper, pv, fv, type",
          cn: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間、総期間、現在価値、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "PV",
        call: "PV(0.1/12, 2*12, 1000, 10000, 0)",
        result: -29864.950264779,
        definition: {
          en: "Calculate the present value of an investment.",
          cn: "计算投资的现值。",
          ja: "投資の現在価値を計算します。"
        },
        parameterDefinitions: {
          en: "rate, nper, pmt, fv, type",
          cn: "每期利率，期数，每期支付额，未来值，支付类型（0=期末，1=期初）。",
          ja: "各期利率、期間数、各期支払額、将来価値、タイプ（0=期末、1=期初）"
        }
      },
      {
        title: "RATE",
        call: "RATE(2*12, -1000, -10000, 100000, 0, 0.1)",
        result: 0.065178912,
        definition: {
          en: "Calculate the interest rate per period of an annuity.",
          cn: "计算每期利率。",
          ja: "年金の各期利率を計算します。"
        },
        parameterDefinitions: {
          en: "nper, pmt, pv, fv, type, guess",
          cn: "总期数，每期支付额，现值，未来值，支付类型（0=期末，1=期初），估计值。",
          ja: "総期間、各期支払額、現在価値、将来価値、タイプ（0=期末、1=期初）、推定値"
        }
      }
    ]
  }
];

// Create component with evaluate function
const FormulajsFunctions: React.FC = () => {
  const CommonComponent = generateFunctionsComponent({ 
    data: functionsData as IFunctionCategory[],
    evaluateFunction: evaluate
  });

  return <CommonComponent />;
};

export default FormulajsFunctions;

