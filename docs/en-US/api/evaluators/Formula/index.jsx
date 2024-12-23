import React, { useState, useEffect } from 'react';
import './index.css';
import * as formulajs from '@formulajs/formulajs';


const functionsData = [
  {
    category: 'DATE',
    functions: [
      {
        title: 'DATE',
        call: 'DATE(2008, 7, 8)',
        result: 'Tue Jul 08 2008 00:00:00 GMT-0700 (PDT)',
        definition: "根据给定的年、月和日创建日期。",
        parameterDefinitions: "年份（整数），月份（1-12），日期（1-31）。"
      },
      {
        title: 'DATEVALUE',
        call: "DATEVALUE('8/22/2011')",
        result: 'Mon Aug 22 2011 00:00:00 GMT-0700 (PDT)',
        definition: "将文本格式的日期转换为日期序列号。",
        parameterDefinitions: "文本字符串，表示日期。"
      },
      {
        title: 'DAY',
        call: "DAY('15-Apr-11')",
        result: 15,
        definition: "返回指定日期中的日部分。",
        parameterDefinitions: "日期值或日期文本字符串。"
      },
      {
        title: 'DAYS',
        call: "DAYS('3/15/11', '2/1/11')",
        result: 42,
        definition: "计算两个日期之间的天数。",
        parameterDefinitions: "结束日期，开始日期。"
      },
      {
        title: 'DAYS360',
        call: "DAYS360('1-Jan-11', '31-Dec-11')",
        result: 360,
        definition: "基于一年360天计算两个日期间的天数。",
        parameterDefinitions: "起始日期，结束日期。"
      },
      {
        title: 'EDATE',
        call: "EDATE('1/15/11', -1)",
        result: 'Wed Dec 15 2010 00:00:00 GMT-0800 (PST)',
        definition: "返回指定月份数之前或之后的日期。",
        parameterDefinitions: "起始日期，月份数（正数为将来，负数为过去）。"
      },
      {
        title: 'EOMONTH',
        call: "EOMONTH('1/1/11', -3)",
        result: 'Sun Oct 31 2010 00:00:00 GMT-0700 (PDT)',
        definition: "返回指定月份数之前或之后的月末日期。",
        parameterDefinitions: "起始日期，月份数（正数为将来，负数为过去）。"
      },
      {
        title: 'HOUR',
        call: "HOUR('7/18/2011 7:45:00 AM')",
        result: 7,
        definition: "返回时间中的小时部分。",
        parameterDefinitions: "时间值或时间文本字符串。"
      },
      {
        title: 'MINUTE',
        call: "MINUTE('2/1/2011 12:45:00 PM')",
        result: 45,
        definition: "返回时间中的分钟部分。",
        parameterDefinitions: "时间值或时间文本字符串。"
      },
      {
        title: 'ISOWEEKNUM',
        call: "ISOWEEKNUM('3/9/2012')",
        result: 10,
        definition: "返回一年中给定日期所在的ISO周数。",
        parameterDefinitions: "日期值或日期文本字符串。"
      },
      {
        title: 'MONTH',
        call: "MONTH('15-Apr-11')",
        result: 4,
        definition: "返回指定日期中的月部分。",
        parameterDefinitions: "日期值或日期文本字符串。"
      },
      {
        title: 'NETWORKDAYS',
        call: "NETWORKDAYS('10/1/2012', '3/1/2013', ['11/22/2012'])",
        result: 109,
        definition: "计算两个日期间的工作日数，不包括周末和指定的假期。",
        parameterDefinitions: "开始日期，结束日期，可选假期数组。"
      },
      {
        title: 'NETWORKDAYSINTL',
        call: "NETWORKDAYSINTL('1/1/2006', '2/1/2006', 7, ['1/2/2006'])",
        result: 23,
        definition: "计算两个日期间的工作日数，允许自定义周末，并排除指定假期。",
        parameterDefinitions: "开始日期，结束日期，周末模式，可选假期数组。"
      },
      {
        title: 'NOW',
        call: "NOW()",
        result: 'Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)',
        definition: "返回当前日期和时间。",
        parameterDefinitions: "无参数。"
      },
      {
        title: 'SECOND',
        call: "SECOND('2/1/2011 4:48:18 PM')",
        result: 18,
        definition: "返回时间中的秒部分。",
        parameterDefinitions: "时间值或时间文本字符串。"
      },
      {
        title: 'TIME',
        call: 'TIME(16, 48, 10)',
        result: 0.7001157407407408,
        definition: "根据给定的小时、分钟和秒创建时间。",
        parameterDefinitions: "小时（0-23），分钟（0-59），秒（0-59）。"
      },
      {
        title: 'TIMEVALUE',
        call: "TIMEVALUE('22-Aug-2011 6:35 AM')",
        result: 0.2743055555555556,
        definition: "将文本格式的时间转换为时间序列号。",
        parameterDefinitions: "文本字符串，表示时间。"
      },
      {
        title: 'TODAY',
        call: "TODAY()",
        result: 'Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)',
        definition: "返回今天的日期。",
        parameterDefinitions: "无参数。"
      },
      {
        title: 'WEEKDAY',
        call: "WEEKDAY('2/14/2008', 3)",
        result: 3,
        definition: "返回一周中某一天的数字。",
        parameterDefinitions: "日期值或日期文本字符串，返回类型（1-3）。"
      },
      {
        title: 'YEAR',
        call: "YEAR('7/5/2008')",
        result: 2008,
        definition: "返回指定日期中的年部分。",
        parameterDefinitions: "日期值或日期文本字符串。"
      },
      {
        title: 'WEEKNUM',
        call: "WEEKNUM('3/9/2012', 2)",
        result: 11,
        definition: "返回一年中给定日期所在的周数。",
        parameterDefinitions: "日期值或日期文本字符串，可选周开始日（1=星期日，2=星期一）。"
      },
      {
        title: 'WORKDAY',
        call: "WORKDAY('10/1/2008', 151, ['11/26/2008', '12/4/2008'])",
        result: 'Mon May 04 2009 00:00:00 GMT-0700 (PDT)',
        definition: "返回从起始日期起指定工作日数之前或之后的日期，不包括周末和指定的假期。",
        parameterDefinitions: "起始日期，工作日数，可选假期数组。"
      },
      {
        title: 'WORKDAYINTL',
        call: "WORKDAYINTL('1/1/2012', 30, 17)",
        result: 'Sun Feb 05 2012 00:00:00 GMT-0800 (PST)',
        definition: "返回从起始日期起指定工作日数之前或之后的日期，允许自定义周末，并排除指定假期。",
        parameterDefinitions: "起始日期，工作日数，周末模式。"
      },
      {
        title: 'YEARFRAC',
        call: "YEARFRAC('1/1/2012', '7/30/2012', 3)",
        result: 0.5780821917808219,
        definition: "计算两个日期之间的年分数。",
        parameterDefinitions: "开始日期，结束日期，可选基础（日计数基准）。"
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
        definition: "计算定期支付利息的有价证券的应计利息。",
        parameterDefinitions: "起始日期，首次支付利息日期，结算日期，年利率，面值，期间数，基础。"
      },
      {
        title: 'CUMIPMT',
        call: "CUMIPMT(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -9916.77251395708,
        definition: "计算一系列付款中累积的利息支付。",
        parameterDefinitions: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'CUMPRINC',
        call: "CUMPRINC(0.1/12, 30*12, 100000, 13, 24, 0)",
        result: -614.0863271085149,
        definition: "计算一系列付款中累积的本金支付。",
        parameterDefinitions: "利率，总期数，现值，开始期数，结束期数，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'DB',
        call: "DB(1000000, 100000, 6, 1, 6)",
        result: 159500,
        definition: "使用固定余额递减法计算折旧。",
        parameterDefinitions: "成本，残值，使用寿命，期间，月份。"
      },
      {
        title: 'DDB',
        call: "DDB(1000000, 100000, 6, 1, 1.5)",
        result: 250000,
        definition: "使用双倍余额递减法或其他指定方法计算折旧。",
        parameterDefinitions: "成本，残值，使用寿命，期间，因子。"
      },
      {
        title: 'DOLLARDE',
        call: "DOLLARDE(1.1, 16)",
        result: 1.625,
        definition: "将分数表示的价格转换为小数表示。",
        parameterDefinitions: "分数形式的美元价格，分母。"
      },
      {
        title: 'DOLLARFR',
        call: "DOLLARFR(1.625, 16)",
        result: 1.1,
        definition: "将小数表示的价格转换为分数表示。",
        parameterDefinitions: "小数形式的美元价格，分母。"
      },
      {
        title: 'EFFECT',
        call: "EFFECT(0.1, 4)",
        result: 0.10381289062499977,
        definition: "计算实际年利率。",
        parameterDefinitions: "名义年利率，每年复利次数。"
      },
      {
        title: 'FV',
        call: "FV(0.1/12, 10, -100, -1000, 0)",
        result: 2124.874409194097,
        definition: "计算投资的未来价值。",
        parameterDefinitions: "每期利率，期数，每期支付额，现值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'FVSCHEDULE',
        call: "FVSCHEDULE(100, [0.09,0.1,0.11])",
        result: 133.08900000000003,
        definition: "根据一系列复利率计算本金的未来价值。",
        parameterDefinitions: "本金，利率数组。"
      },
      {
        title: 'IPMT',
        call: "IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: 928.8235718400465,
        definition: "计算特定期间内的利息支付。",
        parameterDefinitions: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'IRR',
        call: "IRR([-75000,12000,15000,18000,21000,24000], 0.075)",
        result: 0.05715142887178447,
        definition: "计算内部收益率。",
        parameterDefinitions: "现金流数组，估计值。"
      },
      {
        title: 'ISPMT',
        call: "ISPMT(0.1/12, 6, 2*12, 100000)",
        result: -625,
        definition: "计算特定期间内的利息支付（适用于贷款）。",
        parameterDefinitions: "每期利率，期间，总期数，贷款金额。"
      },
      {
        title: 'MIRR',
        call: "MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)",
        result: 0.07971710360838036,
        definition: "计算修正内部收益率。",
        parameterDefinitions: "现金流数组，融资利率，再投资利率。"
      },
      {
        title: 'NOMINAL',
        call: "NOMINAL(0.1, 4)",
        result: 0.09645475633778045,
        definition: "计算名义年利率。",
        parameterDefinitions: "实际年利率，每年复利次数。"
      },
      {
        title: 'NPER',
        call: "NPER(0.1/12, -100, -1000, 10000, 0)",
        result: 63.39385422740764,
        definition: "计算达到目标值所需的期数。",
        parameterDefinitions: "每期利率，每期支付额，现值，未来值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'NPV',
        call: "NPV(0.1, -10000, 2000, 4000, 8000)",
        result: 1031.3503176012546,
        definition: "计算一系列未来现金流的净现值。",
        parameterDefinitions: "每期折现率，现金流数组。"
      },
      {
        title: 'PDURATION',
        call: "PDURATION(0.1, 1000, 2000)",
        result: 7.272540897341714,
        definition: "计算达到特定值所需的时间。",
        parameterDefinitions: "每期利率，现值，未来值。"
      },
      {
        title: 'PMT',
        call: "PMT(0.1/12, 2*12, 1000, 10000, 0)",
        result: -42426.08563793503,
        definition: "计算贷款的每期支付额。",
        parameterDefinitions: "每期利率，总期数，现值，未来值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'PPMT',
        call: "PPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",
        result: -43354.909209775076,
        definition: "计算特定期间内的本金支付。",
        parameterDefinitions: "每期利率，期间，总期数，现值，未来值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'PV',
        call: "PV(0.1/12, 2*12, 1000, 10000, 0)",
        result: -29864.950264779152,
        definition: "计算投资的现值。",
        parameterDefinitions: "每期利率，期数，每期支付额，未来值，支付类型（0=期末，1=期初）。"
      },
      {
        title: 'RATE',
        call: "RATE(2*12, -1000, -10000, 100000, 0, 0.1)",
        result: 0.06517891177181533,
        definition: "计算每期利率。",
        parameterDefinitions: "总期数，每期支付额，现值，未来值，支付类型（0=期末，1=期初），估计值。"
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
        definition: "将二进制数转换为十进制数。",
        parameterDefinitions: "二进制数值。"
      },
      {
        title: 'BIN2HEX',
        call: "BIN2HEX(101010)",
        result: '2a',
        definition: "将二进制数转换为十六进制数。",
        parameterDefinitions: "二进制数值。"
      },
      {
        title: 'BIN2OCT',
        call: "BIN2OCT(101010)",
        result: '52',
        definition: "将二进制数转换为八进制数。",
        parameterDefinitions: "二进制数值。"
      },
      {
        title: 'BITAND',
        call: "BITAND(42, 24)",
        result: 8,
        definition: "执行两个数字的按位与运算。",
        parameterDefinitions: "整数，整数。"
      },
      {
        title: 'BITLSHIFT',
        call: "BITLSHIFT(42, 24)",
        result: 704643072,
        definition: "对数字进行左移位操作。",
        parameterDefinitions: "整数，移位量。"
      },
      {
        title: 'BITOR',
        call: "BITOR(42, 24)",
        result: 58,
        definition: "执行两个数字的按位或运算。",
        parameterDefinitions: "整数，整数。"
      },
      {
        title: 'BITRSHIFT',
        call: "BITRSHIFT(42, 2)",
        result: 10,
        definition: "对数字进行右移位操作。",
        parameterDefinitions: "整数，移位量。"
      },
      {
        title: 'BITXOR',
        call: "BITXOR(42, 24)",
        result: 50,
        definition: "执行两个数字的按位异或运算。",
        parameterDefinitions: "整数，整数。"
      },
      {
        title: 'COMPLEX',
        call: "COMPLEX(3, 4)",
        result: '3+4i',
        definition: "创建复数。",
        parameterDefinitions: "实部，虚部。"
      },
      {
        title: 'CONVERT',
        call: "CONVERT(64, 'kibyte', 'bit')",
        result: 524288,
        definition: "在不同单位之间转换数值。",
        parameterDefinitions: "数值，原始单位，目标单位。"
      },
      {
        title: 'DEC2BIN',
        call: "DEC2BIN(42)",
        result: '101010',
        definition: "将十进制数转换为二进制数。",
        parameterDefinitions: "十进制数值。"
      },
      {
        title: 'DEC2HEX',
        call: "DEC2HEX(42)",
        result: '2a',
        definition: "将十进制数转换为十六进制数。",
        parameterDefinitions: "十进制数值。"
      },
      {
        title: 'DEC2OCT',
        call: "DEC2OCT(42)",
        result: '52',
        definition: "将十进制数转换为八进制数。",
        parameterDefinitions: "十进制数值。"
      },
      {
        title: 'DELTA',
        call: "DELTA(42, 42)",
        result: 1,
        definition: "测试两个值是否相等。",
        parameterDefinitions: "数值，数值。"
      },
      {
        title: 'ERF',
        call: "ERF(1)",
        result: 0.8427007929497149,
        definition: "计算误差函数。",
        parameterDefinitions: "上限。"
      },
      {
        title: 'ERFC',
        call: "ERFC(1)",
        result: 0.1572992070502851,
        definition: "计算互补误差函数。",
        parameterDefinitions: "下限。"
      },
      {
        title: 'GESTEP',
        call: "GESTEP(42, 24)",
        result: 1,
        definition: "测试一个数是否大于或等于另一个数。",
        parameterDefinitions: "数值，阈值。"
      },
      {
        title: 'HEX2BIN',
        call: "HEX2BIN('2a')",
        result: '101010',
        definition: "将十六进制数转换为二进制数。",
        parameterDefinitions: "十六进制数值。"
      },
      {
        title: 'HEX2DEC',
        call: "HEX2DEC('2a')",
        result: 42,
        definition: "将十六进制数转换为十进制数。",
        parameterDefinitions: "十六进制数值。"
      },
      {
        title: 'HEX2OCT',
        call: "HEX2OCT('2a')",
        result: '52',
        definition: "将十六进制数转换为八进制数。",
        parameterDefinitions: "十六进制数值。"
      },
      {
        title: 'IMABS',
        call: "IMABS('3+4i')",
        result: 5,
        definition: "计算复数的绝对值（模）。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMAGINARY',
        call: "IMAGINARY('3+4i')",
        result: 4,
        definition: "返回复数的虚部。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMARGUMENT',
        call: "IMARGUMENT('3+4i')",
        result: 0.9272952180016122,
        definition: "计算复数的幅角。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCONJUGATE',
        call: "IMCONJUGATE('3+4i')",
        result: '3-4i',
        definition: "计算复数的共轭。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCOS',
        call: "IMCOS('1+i')",
        result: '0.8337300251311491-0.9888977057628651i',
        definition: "计算复数的余弦。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCOSH',
        call: "IMCOSH('1+i')",
        result: '0.8337300251311491+0.9888977057628651i',
        definition: "计算复数的双曲余弦。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCOT',
        call: "IMCOT('1+i')",
        result: '0.21762156185440265-0.8680141428959249i',
        definition: "计算复数的余切。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCSC',
        call: "IMCSC('1+i')",
        result: '0.6215180171704283-0.3039310016284264i',
        definition: "计算复数的余割。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMCSCH',
        call: "IMCSCH('1+i')",
        result: '0.3039310016284264-0.6215180171704283i',
        definition: "计算复数的双曲余割。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMDIV',
        call: "IMDIV('1+2i', '3+4i')",
        result: '0.44+0.08i',
        definition: "计算两个复数的除法。",
        parameterDefinitions: "被除复数，除复数。"
      },
      {
        title: 'IMEXP',
        call: "IMEXP('1+i')",
        result: '1.4686939399158851+2.2873552871788423i',
        definition: "计算复数的指数。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMLN',
        call: "IMLN('1+i')",
        result: '0.3465735902799727+0.7853981633974483i',
        definition: "计算复数的自然对数。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMLOG10',
        call: "IMLOG10('1+i')",
        result: '0.1505149978319906+0.3410940884604603i',
        definition: "计算复数的以10为底的对数。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMLOG2',
        call: "IMLOG2('1+i')",
        result: '0.5000000000000001+1.1330900354567985i',
        definition: "计算复数的以2为底的对数。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMPOWER',
        call: "IMPOWER('1+i', 2)",
        result: '1.2246063538223775e-16+2.0000000000000004i',
        definition: "计算复数的幂。",
        parameterDefinitions: "复数，幂次。"
      },
      {
        title: 'IMPRODUCT',
        call: "IMPRODUCT('1+2i', '3+4i', '5+6i')",
        result: '-85+20i',
        definition: "计算多个复数的乘积。",
        parameterDefinitions: "复数数组。"
      },
      {
        title: 'IMREAL',
        call: "IMREAL('3+4i')",
        result: 3,
        definition: "返回复数的实部。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSEC',
        call: "IMSEC('1+i')",
        result: '0.4983370305551868+0.591083841721045i',
        definition: "计算复数的正割。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSECH',
        call: "IMSECH('1+i')",
        result: '0.4983370305551868-0.591083841721045i',
        definition: "计算复数的双曲正割。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSIN',
        call: "IMSIN('1+i')",
        result: '1.2984575814159773+0.6349639147847361i',
        definition: "计算复数的正弦。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSINH',
        call: "IMSINH('1+i')",
        result: '0.6349639147847361+1.2984575814159773i',
        definition: "计算复数的双曲正弦。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSQRT',
        call: "IMSQRT('1+i')",
        result: '1.0986841134678098+0.45508986056222733i',
        definition: "计算复数的平方根。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'IMSUB',
        call: "IMSUB('3+4i', '1+2i')",
        result: '2+2i',
        definition: "计算两个复数的减法。",
        parameterDefinitions: "被减复数，减复数。"
      },
      {
        title: 'IMSUM',
        call: "IMSUM('1+2i', '3+4i', '5+6i')",
        result: '9+12i',
        definition: "计算多个复数的和。",
        parameterDefinitions: "复数数组。"
      },
      {
        title: 'IMTAN',
        call: "IMTAN('1+i')",
        result: '0.2717525853195117+1.0839233273386946i',
        definition: "计算复数的正切。",
        parameterDefinitions: "复数。"
      },
      {
        title: 'OCT2BIN',
        call: "OCT2BIN('52')",
        result: '101010',
        definition: "将八进制数转换为二进制数。",
        parameterDefinitions: "八进制数值。"
      },
      {
        title: 'OCT2DEC',
        call: "OCT2DEC('52')",
        result: 42,
        definition: "将八进制数转换为十进制数。",
        parameterDefinitions: "八进制数值。"
      },
      {
        title: 'OCT2HEX',
        call: "OCT2HEX('52')",
        result: '2a',
        definition: "将八进制数转换为十六进制数。",
        parameterDefinitions: "八进制数值。"
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
        definition: "当所有参数都为真时返回真，否则返回假。",
        parameterDefinitions: "参数是一个或多个逻辑值（布尔值），只有所有参数均为真时函数才返回真。"
      },
      {
        title: 'FALSE',
        call: "FALSE()",
        result: false,
        definition: "返回逻辑值假。",
        parameterDefinitions: "无参数。"
      },
      {
        title: 'IF',
        call: "IF(true, 'Hello!', 'Goodbye!')",
        result: 'Hello!',
        definition: "根据条件的真假返回不同的值。",
        parameterDefinitions: "条件，条件为真时的值，条件为假时的值。"
      },
      {
        title: 'IFS',
        call: "IFS(false, 'Hello!', true, 'Goodbye!')",
        result: 'Goodbye!',
        definition: "检查多个条件，并返回第一个为真的结果值。",
        parameterDefinitions: "多对条件和对应的值，成对出现。"
      },
      {
        title: 'NOT',
        call: "NOT(true)",
        result: false,
        definition: "反转逻辑值，真变假，假变真。",
        parameterDefinitions: "一个逻辑值（布尔值）。"
      },
      {
        title: 'OR',
        call: "OR(true, false, true)",
        result: true,
        definition: "当任一参数为真时返回真，否则返回假。",
        parameterDefinitions: "参数是一个或多个逻辑值（布尔值），只要有一个参数为真函数即返回真。"
      },
      {
        title: 'SWITCH',
        call: "SWITCH(7, 9, 'Nine', 7, 'Seven')",
        result: 'Seven',
        definition: "根据表达式的值返回匹配的结果值，若无匹配则返回默认值。",
        parameterDefinitions: "表达式，匹配值1，结果值1，...，[默认值]。"
      },
      {
        title: 'TRUE',
        call: "TRUE()",
        result: true,
        definition: "返回逻辑值真。",
        parameterDefinitions: "无参数。"
      },
      {
        title: 'XOR',
        call: "XOR(true, false, true)",
        result: false,
        definition: "当且仅当有奇数个参数为真时返回真，否则返回假。",
        parameterDefinitions: "参数是一个或多个逻辑值（布尔值），有奇数个参数为真时返回真。"
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
        definition: "返回数值的绝对值。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'ACOS',
        call: "ACOS(-0.5)",
        result: 2.0943951023931957,
        definition: "计算反余弦值（弧度）。",
        parameterDefinitions: "介于-1和1之间的数值。"
      },
      {
        title: 'ACOSH',
        call: "ACOSH(10)",
        result: 2.993222846126381,
        definition: "计算反双曲余弦值。",
        parameterDefinitions: "大于等于1的数值。"
      },
      {
        title: 'ACOT',
        call: "ACOT(2)",
        result: 0.46364760900080615,
        definition: "计算反正切值（弧度）。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'ACOTH',
        call: "ACOTH(6)",
        result: 0.16823611831060645,
        definition: "计算反双曲正切值。",
        parameterDefinitions: "绝对值大于1的数值。"
      },
      {
        title: 'AGGREGATE',
        call: "AGGREGATE(9, 4, [-5,15], [32,'Hello World!'])",
        result: '10,32',
        definition: "执行聚合运算，忽略错误或隐藏行。",
        parameterDefinitions: "函数号，选项，数组1，...，数组N。"
      },
      {
        title: 'ARABIC',
        call: "ARABIC('MCMXII')",
        result: 1912,
        definition: "将罗马数字转换为阿拉伯数字。",
        parameterDefinitions: "罗马数字字符串。"
      },
      {
        title: 'ASIN',
        call: "ASIN(-0.5)",
        result: -0.5235987755982988,
        definition: "计算反正弦值（弧度）。",
        parameterDefinitions: "介于-1和1之间的数值。"
      },
      {
        title: 'ASINH',
        call: "ASINH(-2.5)",
        result: -1.6472311463710965,
        definition: "计算反双曲正弦值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'ATAN',
        call: "ATAN(1)",
        result: 0.7853981633974483,
        definition: "计算反正切值（弧度）。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'ATAN2',
        call: "ATAN2(-1, -1)",
        result: -2.356194490192345,
        definition: "根据坐标计算反正切值（弧度）。",
        parameterDefinitions: "y坐标，x坐标。"
      },
      {
        title: 'ATANH',
        call: "ATANH(-0.1)",
        result: -0.10033534773107562,
        definition: "计算反双曲正切值。",
        parameterDefinitions: "介于-1和1之间的数值。"
      },
      {
        title: 'BASE',
        call: "BASE(15, 2, 10)",
        result: '0000001111',
        definition: "将数值转换为指定基数的文本表示。",
        parameterDefinitions: "数值，基数，[最小长度]。"
      },
      {
        title: 'CEILING',
        call: "CEILING(-5.5, 2, -1)",
        result: -6,
        definition: "将数值向上舍入到最接近的倍数。",
        parameterDefinitions: "数值，倍数，[模式]。"
      },
      {
        title: 'CEILINGMATH',
        call: "CEILINGMATH(-5.5, 2, -1)",
        result: -6,
        definition: "将数值向上舍入，使用指定的倍数和方向。",
        parameterDefinitions: "数值，[倍数]，[模式]。"
      },
      {
        title: 'CEILINGPRECISE',
        call: "CEILINGPRECISE(-4.1, -2)",
        result: -4,
        definition: "将数值向上舍入到最接近的倍数，不考虑符号。",
        parameterDefinitions: "数值，[倍数]。"
      },
      {
        title: 'COMBIN',
        call: "COMBIN(8, 2)",
        result: 28,
        definition: "计算组合数。",
        parameterDefinitions: "总数，选中数。"
      },
      {
        title: 'COMBINA',
        call: "COMBINA(4, 3)",
        result: 20,
        definition: "计算允许重复的组合数。",
        parameterDefinitions: "总数，选中数。"
      },
      {
        title: 'COS',
        call: "COS(1)",
        result: 0.5403023058681398,
        definition: "计算余弦值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'COSH',
        call: "COSH(1)",
        result: 1.5430806348152437,
        definition: "计算双曲余弦值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'COT',
        call: "COT(30)",
        result: -0.15611995216165922,
        definition: "计算余切值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'COTH',
        call: "COTH(2)",
        result: 1.0373147207275482,
        definition: "计算双曲余切值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'CSC',
        call: "CSC(15)",
        result: 1.5377805615408537,
        definition: "计算余割值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'CSCH',
        call: "CSCH(1.5)",
        result: 0.46964244059522464,
        definition: "计算双曲余割值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'DECIMAL',
        call: "DECIMAL('FF', 16)",
        result: 255,
        definition: "将文本形式的数字转换为十进制。",
        parameterDefinitions: "文本，基数。"
      },
      {
        title: 'ERF',
        call: "ERF(1)",
        result: 0.8427007929497149,
        definition: "计算误差函数。",
        parameterDefinitions: "上限。"
      },
      {
        title: 'ERFC',
        call: "ERFC(1)",
        result: 0.1572992070502851,
        definition: "计算互补误差函数。",
        parameterDefinitions: "下限。"
      },
      {
        title: 'EVEN',
        call: "EVEN(-1)",
        result: -2,
        definition: "将数值向上舍入到最接近的偶数。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'EXP',
        call: "EXP(1)",
        result: 2.718281828459045,
        definition: "计算e的幂次方。",
        parameterDefinitions: "指数。"
      },
      {
        title: 'FACT',
        call: "FACT(5)",
        result: 120,
        definition: "计算阶乘。",
        parameterDefinitions: "非负整数。"
      },
      {
        title: 'FACTDOUBLE',
        call: "FACTDOUBLE(7)",
        result: 105,
        definition: "计算双阶乘。",
        parameterDefinitions: "非负整数。"
      },
      {
        title: 'FLOOR',
        call: "FLOOR(-3.1)",
        result: -4,
        definition: "将数值向下舍入到最接近的倍数。",
        parameterDefinitions: "数值，倍数。"
      },
      {
        title: 'FLOORMATH',
        call: "FLOORMATH(-4.1, -2, -1)",
        result: -4,
        definition: "将数值向下舍入，使用指定的倍数和方向。",
        parameterDefinitions: "数值，[倍数]，[模式]。"
      },
      {
        title: 'FLOORPRECISE',
        call: "FLOORPRECISE(-3.1, -2)",
        result: -4,
        definition: "将数值向下舍入到最接近的倍数，不考虑符号。",
        parameterDefinitions: "数值，[倍数]。"
      },
      {
        title: 'GCD',
        call: "GCD(24, 36, 48)",
        result: 12,
        definition: "计算最大公约数。",
        parameterDefinitions: "两个或多个整数。"
      },
      {
        title: 'INT',
        call: "INT(-8.9)",
        result: -9,
        definition: "将数值向下取整为最接近的整数。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'ISEVEN',
        call: "ISEVEN(-2.5)",
        result: true,
        definition: "测试数值是否为偶数。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'ISOCEILING',
        call: "ISOCEILING(-4.1, -2)",
        result: -4,
        definition: "将数值向上舍入到最接近的倍数，遵循ISO标准。",
        parameterDefinitions: "数值，[倍数]。"
      },
      {
        title: 'ISODD',
        call: "ISODD(-2.5)",
        result: false,
        definition: "测试数值是否为奇数。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'LCM',
        call: "LCM(24, 36, 48)",
        result: 144,
        definition: "计算最小公倍数。",
        parameterDefinitions: "两个或多个整数。"
      },
      {
        title: 'LN',
        call: "LN(86)",
        result: 4.454347296253507,
        definition: "计算自然对数。",
        parameterDefinitions: "正值。"
      },
      {
        title: 'LOG',
        call: "LOG(8, 2)",
        result: 3,
        definition: "计算指定底数的对数。",
        parameterDefinitions: "数值，底数。"
      },
      {
        title: 'LOG10',
        call: "LOG10(100000)",
        result: 5,
        definition: "计算以10为底的对数。",
        parameterDefinitions: "正值。"
      },
      {
        title: 'MOD',
        call: "MOD(3, -2)",
        result: -1,
        definition: "计算两数相除的余数。",
        parameterDefinitions: "被除数，除数。"
      },
      {
        title: 'MROUND',
        call: "MROUND(-10, -3)",
        result: -9,
        definition: "将数值四舍五入到最接近的倍数。",
        parameterDefinitions: "数值，倍数。"
      },
      {
        title: 'MULTINOMIAL',
        call: "MULTINOMIAL(2, 3, 4)",
        result: 1260,
        definition: "计算多项式系数。",
        parameterDefinitions: "两个或多个非负整数。"
      },
      {
        title: 'ODD',
        call: "ODD(-1.5)",
        result: -3,
        definition: "将数值向上舍入到最接近的奇数。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'POWER',
        call: "POWER(5, 2)",
        result: 25,
        definition: "计算幂次方。",
        parameterDefinitions: "底数，指数。"
      },
      {
        title: 'PRODUCT',
        call: "PRODUCT(5, 15, 30)",
        result: 2250,
        definition: "计算多个数值的乘积。",
        parameterDefinitions: "一个或多个数值。"
      },
      {
        title: 'QUOTIENT',
        call: "QUOTIENT(-10, 3)",
        result: -3,
        definition: "计算两数相除的商，不包括余数。",
        parameterDefinitions: "被除数，除数。"
      },
      {
        title: 'RADIANS',
        call: "RADIANS(180)",
        result: 3.141592653589793,
        definition: "将角度转换为弧度。",
        parameterDefinitions: "角度。"
      },
      {
        title: 'RAND',
        call: "RAND()",
        result: '[Random real number between 0 and 1]',
        definition: "生成0到1之间的随机实数。",
        parameterDefinitions: "无参数。"
      },
      {
        title: 'RANDBETWEEN',
        call: "RANDBETWEEN(-1, 1)",
        result: '[Random integer between bottom and top]',
        definition: "生成指定范围内的随机整数。",
        parameterDefinitions: "下限，上限。"
      },
      {
        title: 'ROUND',
        call: "ROUND(626.3, -3)",
        result: 1000,
        definition: "按指定位数四舍五入数值。",
        parameterDefinitions: "数值，位数。"
      },
      {
        title: 'ROUNDDOWN',
        call: "ROUNDDOWN(-3.14159, 2)",
        result: -3.14,
        definition: "将数值向下舍入到指定位数。",
        parameterDefinitions: "数值，位数。"
      },
      {
        title: 'ROUNDUP',
        call: "ROUNDUP(-3.14159, 2)",
        result: -3.15,
        definition: "将数值向上舍入到指定位数。",
        parameterDefinitions: "数值，位数。"
      },
      {
        title: 'SEC',
        call: "SEC(45)",
        result: 1.9035944074044246,
        definition: "计算正割值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'SECH',
        call: "SECH(45)",
        result: 5.725037161098787e-20,
        definition: "计算双曲正割值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'SIGN',
        call: "SIGN(-0.00001)",
        result: -1,
        definition: "返回数值的符号。",
        parameterDefinitions: "数值。"
      },
      {
        title: 'SIN',
        call: "SIN(1)",
        result: 0.8414709848078965,
        definition: "计算正弦值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'SINH',
        call: "SINH(1)",
        result: 1.1752011936438014,
        definition: "计算双曲正弦值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'SQRT',
        call: "SQRT(16)",
        result: 4,
        definition: "计算平方根。",
        parameterDefinitions: "非负数值。"
      },
      {
        title: 'SQRTPI',
        call: "SQRTPI(2)",
        result: 2.5066282746310002,
        definition: "计算数值与π的乘积的平方根。",
        parameterDefinitions: "非负数值。"
      },
      {
        title: 'SUBTOTAL',
        call: "SUBTOTAL(9, [-5,15], [32,'Hello World!'])",
        result: '10,32',
        definition: "计算子集的汇总值，忽略隐藏行。",
        parameterDefinitions: "函数号，数组1，...，数组N。"
      },
      {
        title: 'SUM',
        call: "SUM(-5, 15, 32, 'Hello World!')",
        result: 42,
        definition: "计算数值总和，忽略文本。",
        parameterDefinitions: "一个或多个数值。"
      },
      {
        title: 'SUMIF',
        call: "SUMIF([2,4,8,16], '>5')",
        result: 24,
        definition: "根据条件求和。",
        parameterDefinitions: "数组，条件。"
      },
      {
        title: 'SUMIFS',
        call: "SUMIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 12,
        definition: "根据多个条件求和。",
        parameterDefinitions: "求和数组，条件数组1，条件1，...，条件数组N，条件N。"
      },
      {
        title: 'SUMPRODUCT',
        call: "SUMPRODUCT([[1,2],[3,4]], [[1,0],[0,1]])",
        result: 5,
        definition: "计算数组元素的乘积之和。",
        parameterDefinitions: "两个或多个数组。"
      },
      {
        title: 'SUMSQ',
        call: "SUMSQ(3, 4)",
        result: 25,
        definition: "计算数值的平方和。",
        parameterDefinitions: "一个或多个数值。"
      },
      {
        title: 'SUMX2MY2',
        call: "SUMX2MY2([1,2], [3,4])",
        result: -20,
        definition: "计算两个数组对应元素平方差之和。",
        parameterDefinitions: "数组1，数组2。"
      },
      {
        title: 'SUMX2PY2',
        call: "SUMX2PY2([1,2], [3,4])",
        result: 30,
        definition: "计算两个数组对应元素平方和之和。",
        parameterDefinitions: "数组1，数组2。"
      },
      {
        title: 'SUMXMY2',
        call: "SUMXMY2([1,2], [3,4])",
        result: 8,
        definition: "计算两个数组对应元素差的平方和。",
        parameterDefinitions: "数组1，数组2。"
      },
      {
        title: 'TAN',
        call: "TAN(1)",
        result: 1.5574077246549023,
        definition: "计算正切值（弧度）。",
        parameterDefinitions: "角度（弧度）。"
      },
      {
        title: 'TANH',
        call: "TANH(-2)",
        result: -0.9640275800758168,
        definition: "计算双曲正切值。",
        parameterDefinitions: "任意数值。"
      },
      {
        title: 'TRUNC',
        call: "TRUNC(-8.9)",
        result: -8,
        definition: "截断数值，不进行四舍五入。",
        parameterDefinitions: "数值，[位数]。"
      }
    ]
  },
  {
    category: 'STATISTICAL',
    functions: [
      {
        title: 'AVEDEV',
        call: "AVEDEV([2,4], [8,16])",
        result: 4.5,
        definition: "计算平均绝对偏差。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'AVERAGE',
        call: "AVERAGE([2,4], [8,16])",
        result: 7.5,
        definition: "计算算术平均值。",
        parameterDefinitions: "参数是数值数组，表示要平均的数据点。"
      },
      {
        title: 'AVERAGEA',
        call: "AVERAGEA([2,4], [8,16])",
        result: 7.5,
        definition: "计算包含文本和逻辑值在内的平均值。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组，所有非空值都将被计算。"
      },
      {
        title: 'AVERAGEIF',
        call: "AVERAGEIF([2,4,8,16], '>5', [1, 2, 3, 4])",
        result: 3.5,
        definition: "基于单个条件计算平均值。",
        parameterDefinitions: "第一个参数是数值数组，第二个参数是条件，第三个参数是可选的数值数组用于平均。"
      },
      {
        title: 'AVERAGEIFS',
        call: "AVERAGEIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 6,
        definition: "基于多个条件计算平均值。",
        parameterDefinitions: "第一个参数是数值数组，后跟成对的条件数组和条件表达式。"
      },
      {
        title: 'BETADIST',
        call: "BETADIST(2, 8, 10, true, 1, 3)",
        result: 0.6854705810117458,
        definition: "计算累积贝塔概率密度函数。",
        parameterDefinitions: "参数依次是值、α、β、累积标志、A（可选）和B（可选）。"
      },
      {
        title: 'BETAINV',
        call: "BETAINV(0.6854705810117458, 8, 10, 1, 3)",
        result: 1.9999999999999998,
        definition: "计算累积贝塔概率密度函数的反函数。",
        parameterDefinitions: "参数依次是概率、α、β、A（可选）和B（可选）。"
      },
      {
        title: 'BINOMDIST',
        call: "BINOMDIST(6, 10, 0.5, false)",
        result: 0.205078125,
        definition: "计算二项分布的概率。",
        parameterDefinitions: "参数依次是试验次数、成功次数、成功概率、累积标志。"
      },
      {
        title: 'CORREL',
        call: "CORREL([3,2,4,5,6], [9,7,12,15,17])",
        result: 0.9970544855015815,
        definition: "计算两个数据集的相关系数。",
        parameterDefinitions: "参数是两个数值数组，表示两个数据集。"
      },
      {
        title: 'COUNT',
        call: "COUNT([1,2], [3,4])",
        result: 4,
        definition: "计算数值单元格的数量。",
        parameterDefinitions: "参数是数值数组或范围。"
      },
      {
        title: 'COUNTA',
        call: "COUNTA([1, null, 3, 'a', '', 'c'])",
        result: 4,
        definition: "计算非空单元格的数量。",
        parameterDefinitions: "参数是任意类型的数组或范围。"
      },
      {
        title: 'COUNTBLANK',
        call: "COUNTBLANK([1, null, 3, 'a', '', 'c'])",
        result: 2,
        definition: "计算空白单元格的数量。",
        parameterDefinitions: "参数是任意类型的数组或范围。"
      },
      {
        title: 'COUNTIF',
        call: "COUNTIF(['Caen', 'Melbourne', 'Palo Alto', 'Singapore'], 'a')",
        result: 3,
        definition: "基于条件计算单元格数量。",
        parameterDefinitions: "参数是数值或文本数组以及条件。"
      },
      {
        title: 'COUNTIFS',
        call: "COUNTIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",
        result: 2,
        definition: "基于多个条件计算单元格数量。",
        parameterDefinitions: "参数是成对的条件数组和条件表达式。"
      },
      {
        title: 'COUNTUNIQUE',
        call: "COUNTUNIQUE([1,1,2,2,3,3])",
        result: 3,
        definition: "计算唯一值的数量。",
        parameterDefinitions: "参数是数值或文本数组。"
      },
      {
        title: 'COVARIANCEP',
        call: "COVARIANCEP([3,2,4,5,6], [9,7,12,15,17])",
        result: 5.2,
        definition: "计算总体协方差。",
        parameterDefinitions: "参数是两个数值数组，表示两个数据集。"
      },
      {
        title: 'COVARIANCES',
        call: "COVARIANCES([2,4,8], [5,11,12])",
        result: 9.666666666666668,
        definition: "计算样本协方差。",
        parameterDefinitions: "参数是两个数值数组，表示两个数据集。"
      },
      {
        title: 'DEVSQ',
        call: "DEVSQ([2,4,8,16])",
        result: 115,
        definition: "计算偏差平方和。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'EXPONDIST',
        call: "EXPONDIST(0.2, 10, true)",
        result: 0.8646647167633873,
        definition: "计算指数分布。",
        parameterDefinitions: "参数依次是值、λ、累积标志。"
      },
      {
        title: 'FDIST',
        call: "FDIST(15.2069, 6, 4, false)",
        result: 0.0012237917087831735,
        definition: "计算F概率分布。",
        parameterDefinitions: "参数依次是值、自由度1、自由度2、累积标志。"
      },
      {
        title: 'FINV',
        call: "FINV(0.01, 6, 4)",
        result: 0.10930991412457851,
        definition: "计算F概率分布的反函数。",
        parameterDefinitions: "参数依次是概率、自由度1、自由度2。"
      },
      {
        title: 'FISHER',
        call: "FISHER(0.75)",
        result: 0.9729550745276566,
        definition: "计算费舍尔变换。",
        parameterDefinitions: "参数是一个数值，表示相关系数。"
      },
      {
        title: 'FISHERINV',
        call: "FISHERINV(0.9729550745276566)",
        result: 0.75,
        definition: "计算费舍尔逆变换。",
        parameterDefinitions: "参数是一个数值，表示费舍尔变换的结果。"
      },
      {
        title: 'FORECAST',
        call: "FORECAST(30, [6,7,9,15,21], [20,28,31,38,40])",
        result: 10.607253086419755,
        definition: "根据已知的x和y值预测新x值的y值。",
        parameterDefinitions: "参数依次是新x值、已知y值数组、已知x值数组。"
      },
      {
        title: 'FREQUENCY',
        call: "FREQUENCY([79,85,78,85,50,81,95,88,97], [70,79,89])",
        result: '1,2,4,2',
        definition: "计算频数分布。",
        parameterDefinitions: "参数依次是数据数组、分组边界数组。"
      },
      {
        title: 'GAMMA',
        call: "GAMMA(2.5)",
        result: 1.3293403919101043,
        definition: "计算伽玛函数值。",
        parameterDefinitions: "参数是一个正数。"
      },
      {
        title: 'GAMMALN',
        call: "GAMMALN(10)",
        result: 12.801827480081961,
        definition: "计算伽玛函数的自然对数。",
        parameterDefinitions: "参数是一个正数。"
      },
      {
        title: 'GAUSS',
        call: "GAUSS(2)",
        result: 0.4772498680518208,
        definition: "计算标准正态分布下的概率。",
        parameterDefinitions: "参数是一个数值，表示z分数。"
      },
      {
        title: 'GEOMEAN',
        call: "GEOMEAN([2,4], [8,16])",
        result: 5.656854249492381,
        definition: "计算几何平均值。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'GROWTH',
        call: "GROWTH([2,4,8,16], [1,2,3,4], [5])",
        result: 32.00000000000003,
        definition: "根据已知数据预测指数增长值。",
        parameterDefinitions: "参数依次是已知y值数组、已知x值数组、新x值数组。"
      },
      {
        title: 'HARMEAN',
        call: "HARMEAN([2,4], [8,16])",
        result: 4.266666666666667,
        definition: "计算调和平均值。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'HYPGEOMDIST',
        call: "HYPGEOMDIST(1, 4, 8, 20, false)",
        result: 0.3632610939112487,
        definition: "计算超几何分布。",
        parameterDefinitions: "参数依次是样本中成功的次数、样本大小、总体中成功的次数、总体大小、累积标志。"
      },
      {
        title: 'INTERCEPT',
        call: "INTERCEPT([2,3,9,1,8], [6,5,11,7,5])",
        result: 0.04838709677419217,
        definition: "计算线性回归的截距。",
        parameterDefinitions: "参数依次是已知y值数组、已知x值数组。"
      },
      {
        title: 'KURT',
        call: "KURT([3,4,5,2,3,4,5,6,4,7])",
        result: -0.15179963720841627,
        definition: "计算峰度。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'LARGE',
        call: "LARGE([3,5,3,5,4,4,2,4,6,7], 3)",
        result: 5,
        definition: "返回第k大的值。",
        parameterDefinitions: "参数依次是数值数组、k值。"
      },
      {
        title: 'LINEST',
        call: "LINEST([1,9,5,7], [0,4,2,3], true, true)",
        result: '2,1',
        definition: "执行线性回归分析。",
        parameterDefinitions: "参数依次是已知y值数组、已知x值数组、是否返回附加统计信息、是否返回更多统计信息。"
      },
      {
        title: 'LOGNORMDIST',
        call: "LOGNORMDIST(4, 3.5, 1.2, true)",
        result: 0.0390835557068005,
        definition: "计算对数正态分布。",
        parameterDefinitions: "参数依次是值、平均值、标准差、累积标志。"
      },
      {
        title: 'LOGNORMINV',
        call: "LOGNORMINV(0.0390835557068005, 3.5, 1.2, true)",
        result: 4.000000000000001,
        definition: "计算对数正态分布的反函数。",
        parameterDefinitions: "参数依次是概率、平均值、标准差、累积标志。"
      },
      {
        title: 'MAX',
        call: "MAX([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0.8,
        definition: "返回最大值。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'MAXA',
        call: "MAXA([0.1,0.2], [0.4,0.8], [true, false])",
        result: 1,
        definition: "返回包括文本和逻辑值的最大值。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'MEDIAN',
        call: "MEDIAN([1,2,3], [4,5,6])",
        result: 3.5,
        definition: "返回中位数。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'MIN',
        call: "MIN([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0.1,
        definition: "返回最小值。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'MINA',
        call: "MINA([0.1,0.2], [0.4,0.8], [true, false])",
        result: 0,
        definition: "返回包括文本和逻辑值的最小值。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'MODEMULT',
        call: "MODEMULT([1,2,3,4,3,2,1,2,3])",
        result: '2,3',
        definition: "返回出现频率最高的值数组。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'MODESNGL',
        call: "MODESNGL([1,2,3,4,3,2,1,2,3])",
        result: 2,
        definition: "返回最常出现的单个值。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'NORMDIST',
        call: "NORMDIST(42, 40, 1.5, true)",
        result: 0.9087887802741321,
        definition: "计算正态分布。",
        parameterDefinitions: "参数依次是值、平均值、标准差、累积标志。"
      },
      {
        title: 'NORMINV',
        call: "NORMINV(0.9087887802741321, 40, 1.5)",
        result: 42,
        definition: "计算正态分布的反函数。",
        parameterDefinitions: "参数依次是概率、平均值、标准差。"
      },
      {
        title: 'NORMSDIST',
        call: "NORMSDIST(1, true)",
        result: 0.8413447460685429,
        definition: "计算标准正态分布。",
        parameterDefinitions: "参数是一个数值，表示z分数。"
      },
      {
        title: 'NORMSINV',
        call: "NORMSINV(0.8413447460685429)",
        result: 1.0000000000000002,
        definition: "计算标准正态分布的反函数。",
        parameterDefinitions: "参数是一个概率值。"
      },
      {
        title: 'PEARSON',
        call: "PEARSON([9,7,5,3,1], [10,6,1,5,3])",
        result: 0.6993786061802354,
        definition: "计算皮尔逊乘积矩相关系数。",
        parameterDefinitions: "参数是两个数值数组，表示两个数据集。"
      },
      {
        title: 'PERCENTILEEXC',
        call: "PERCENTILEEXC([1,2,3,4], 0.3)",
        result: 1.5,
        definition: "计算排除百分位数。",
        parameterDefinitions: "参数依次是数值数组、k值。"
      },
      {
        title: 'PERCENTILEINC',
        call: "PERCENTILEINC([1,2,3,4], 0.3)",
        result: 1.9,
        definition: "计算包含百分位数。",
        parameterDefinitions: "参数依次是数值数组、k值。"
      },
      {
        title: 'PERCENTRANKEXC',
        call: "PERCENTRANKEXC([1,2,3,4], 2, 2)",
        result: 0.4,
        definition: "计算排除百分比排名。",
        parameterDefinitions: "参数依次是数值数组、x值、显著性（可选）。"
      },
      {
        title: 'PERCENTRANKINC',
        call: "PERCENTRANKINC([1,2,3,4], 2, 2)",
        result: 0.33,
        definition: "计算包含百分比排名。",
        parameterDefinitions: "参数依次是数值数组、x值、显著性（可选）。"
      },
      {
        title: 'PERMUT',
        call: "PERMUT(100, 3)",
        result: 970200,
        definition: "计算排列数。",
        parameterDefinitions: "参数依次是总数n、选择数k。"
      },
      {
        title: 'PERMUTATIONA',
        call: "PERMUTATIONA(4, 3)",
        result: 64,
        definition: "计算允许重复的排列数。",
        parameterDefinitions: "参数依次是总数n、选择数k。"
      },
      {
        title: 'PHI',
        call: "PHI(0.75)",
        result: 0.30113743215480443,
        definition: "计算标准正态分布的密度函数。",
        parameterDefinitions: "参数是一个数值，表示z分数。"
      },
      {
        title: 'POISSONDIST',
        call: "POISSONDIST(2, 5, true)",
        result: 0.12465201948308113,
        definition: "计算泊松分布。",
        parameterDefinitions: "参数依次是事件次数、平均值、累积标志。"
      },
      {
        title: 'PROB',
        call: "PROB([1,2,3,4], [0.1,0.2,0.2,0.1], 2, 3)",
        result: 0.4,
        definition: "计算概率之和。",
        parameterDefinitions: "参数依次是数值数组、概率数组、下限、上限。"
      },
      {
        title: 'QUARTILEEXC',
        call: "QUARTILEEXC([1,2,3,4], 1)",
        result: 1.25,
        definition: "计算排除四分位数。",
        parameterDefinitions: "参数依次是数值数组、quart值。"
      },
      {
        title: 'QUARTILEINC',
        call: "QUARTILEINC([1,2,3,4], 1)",
        result: 1.75,
        definition: "计算包含四分位数。",
        parameterDefinitions: "参数依次是数值数组、quart值。"
      },
      {
        title: 'RANKAVG',
        call: "RANKAVG(4, [2,4,4,8,8,16], false)",
        result: 4.5,
        definition: "计算平均排名。",
        parameterDefinitions: "参数依次是数值、数值数组、排序方式（升序/降序）。"
      },
      {
        title: 'RANKEQ',
        call: "RANKEQ(4, [2,4,4,8,8,16], false)",
        result: 4,
        definition: "计算等于指定值的排名。",
        parameterDefinitions: "参数依次是数值、数值数组、排序方式（升序/降序）。"
      },
      {
        title: 'RSQ',
        call: "RSQ([9,7,5,3,1], [10,6,1,5,3])",
        result: 0.4891304347826088,
        definition: "计算决定系数。",
        parameterDefinitions: "参数是两个数值数组，表示两个数据集。"
      },
      {
        title: 'SKEW',
        call: "SKEW([3,4,5,2,3,4,5,6,4,7])",
        result: 0.3595430714067974,
        definition: "计算偏度。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'SKEWP',
        call: "SKEWP([3,4,5,2,3,4,5,6,4,7])",
        result: 0.303193339354144,
        definition: "计算基于总体的偏度。",
        parameterDefinitions: "参数是数值数组，表示数据点。"
      },
      {
        title: 'SLOPE',
        call: "SLOPE([1,9,5,7], [0,4,2,3])",
        result: 2,
        definition: "计算线性回归的斜率。",
        parameterDefinitions: "参数依次是已知y值数组、已知x值数组。"
      },
      {
        title: 'SMALL',
        call: "SMALL([3,5,3,5,4,4,2,4,6,7], 3)",
        result: 3,
        definition: "返回第k小的值。",
        parameterDefinitions: "参数依次是数值数组、k值。"
      },
      {
        title: 'STANDARDIZE',
        call: "STANDARDIZE(42, 40, 1.5)",
        result: 1.3333333333333333,
        definition: "将值标准化为z分数。",
        parameterDefinitions: "参数依次是值、平均值、标准差。"
      },
      {
        title: 'STDEVA',
        call: "STDEVA([2,4], [8,16], [true, false])",
        result: 6.013872850889572,
        definition: "计算包含文本和逻辑值的标准差。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'STDEVP',
        call: "STDEVP([2,4], [8,16], [true, false])",
        result: 5.361902647381804,
        definition: "计算总体标准差。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'STDEVPA',
        call: "STDEVPA([2,4], [8,16], [true, false])",
        result: 5.489889697333535,
        definition: "计算基于总体并包含文本和逻辑值的标准差。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'STDEVS',
        call: "STDEVS([2,4], [8,16], [true, false])",
        result: 6.191391873668904,
        definition: "计算样本标准差。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'STEYX',
        call: "STEYX([2,3,9,1,8,7,5], [6,5,11,7,5,4,4])",
        result: 3.305718950210041,
        definition: "计算预测值的标准误差。",
        parameterDefinitions: "参数依次是已知y值数组、已知x值数组。"
      },
      {
        title: 'TINV',
        call: "TINV(0.9946953263673741, 1)",
        result: 59.99999999996535,
        definition: "计算t分布的反函数。",
        parameterDefinitions: "参数依次是概率、自由度。"
      },
      {
        title: 'TRIMMEAN',
        call: "TRIMMEAN([4,5,6,7,2,3,4,5,1,2,3], 0.2)",
        result: 3.7777777777777777,
        definition: "计算内部平均值。",
        parameterDefinitions: "参数依次是数值数组、修剪比例。"
      },
      {
        title: 'VARA',
        call: "VARA([2,4], [8,16], [true, false])",
        result: 36.16666666666667,
        definition: "计算包含文本和逻辑值的方差。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'VARP',
        call: "VARP([2,4], [8,16], [true, false])",
        result: 28.75,
        definition: "计算总体方差。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'VARPA',
        call: "VARPA([2,4], [8,16], [true, false])",
        result: 30.13888888888889,
        definition: "计算基于总体并包含文本和逻辑值的方差。",
        parameterDefinitions: "参数是数值、文本或逻辑值的数组。"
      },
      {
        title: 'VARS',
        call: "VARS([2,4], [8,16], [true, false])",
        result: 38.333333333333336,
        definition: "计算样本方差。",
        parameterDefinitions: "参数是数值数组。"
      },
      {
        title: 'WEIBULLDIST',
        call: "WEIBULLDIST(105, 20, 100, true)",
        result: 0.9295813900692769,
        definition: "计算韦伯分布。",
        parameterDefinitions: "参数依次是值、α、β、累积标志。"
      },
      {
        title: 'ZTEST',
        call: "ZTEST([3,6,7,8,6,5,4,2,1,9], 4)",
        result: 0.09057419685136381,
        definition: "计算z检验的单尾概率。",
        parameterDefinitions: "参数依次是数值数组、假设平均值。"
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
        definition: "将数字代码转换为对应的字符。",
        parameterDefinitions: "参数是数字，表示字符的编码。"
      },
      {
        title: 'CLEAN',
        call: "CLEAN('Monthly report')",
        result: 'Monthly report',
        definition: "移除文本中的所有非打印字符。",
        parameterDefinitions: "参数是包含要清理的文本字符串。"
      },
      {
        title: 'CODE',
        call: "CODE('A')",
        result: 65,
        definition: "返回文本字符串中第一个字符的数字代码。",
        parameterDefinitions: "参数是包含单个字符的文本字符串。"
      },
      {
        title: 'CONCATENATE',
        call: "CONCATENATE('Andreas', ' ', 'Hauser')",
        result: 'Andreas Hauser',
        definition: "将多个文本字符串合并为一个字符串。",
        parameterDefinitions: "参数是一个或多个要连接的文本字符串。"
      },
      {
        title: 'EXACT',
        call: "EXACT('Word', 'word')",
        result: false,
        definition: "检查两个字符串是否完全相同，区分大小写。",
        parameterDefinitions: "参数是两个要比较的文本字符串。"
      },
      {
        title: 'FIND',
        call: "FIND('M', 'Miriam McGovern', 3)",
        result: 8,
        definition: "从起始位置开始查找子字符串的位置。",
        parameterDefinitions: "参数包括要查找的文本、源文本和可选的起始位置。"
      },
      {
        title: 'LEFT',
        call: "LEFT('Sale Price', 4)",
        result: 'Sale',
        definition: "从字符串左侧提取指定数量的字符。",
        parameterDefinitions: "参数是文本字符串和要提取的字符数。"
      },
      {
        title: 'LEN',
        call: "LEN('Phoenix, AZ')",
        result: 11,
        definition: "返回文本字符串中的字符数。",
        parameterDefinitions: "参数是包含要计数的文本字符串。"
      },
      {
        title: 'LOWER',
        call: "LOWER('E. E. Cummings')",
        result: 'e. e. cummings',
        definition: "将所有字符转换为小写。",
        parameterDefinitions: "参数是要转换的文本字符串。"
      },
      {
        title: 'MID',
        call: "MID('Fluid Flow', 7, 20)",
        result: 'Flow',
        definition: "从字符串中间提取指定数量的字符。",
        parameterDefinitions: "参数是文本字符串、起始位置和要提取的字符数。"
      },
      {
        title: 'NUMBERVALUE',
        call: "NUMBERVALUE('2.500,27', ',', '.')",
        result: 2500.27,
        definition: "根据指定的分隔符将文本转换为数字。",
        parameterDefinitions: "参数是文本字符串、小数分隔符和组分隔符。"
      },
      {
        title: 'PROPER',
        call: "PROPER('this is a TITLE')",
        result: 'This Is A Title',
        definition: "将每个单词的首字母大写。",
        parameterDefinitions: "参数是要格式化的文本字符串。"
      },
      {
        title: 'REPLACE',
        call: "REPLACE('abcdefghijk', 6, 5, '*')",
        result: 'abcde*k',
        definition: "用新文本替换旧文本中的部分。",
        parameterDefinitions: "参数是原始文本、起始位置、要替换的字符数和新文本。"
      },
      {
        title: 'REPT',
        call: "REPT('*-', 3)",
        result: '*-*-*-',
        definition: "根据指定次数重复文本。",
        parameterDefinitions: "参数是文本字符串和重复次数。"
      },
      {
        title: 'RIGHT',
        call: "RIGHT('Sale Price', 5)",
        result: 'Price',
        definition: "从字符串右侧提取指定数量的字符。",
        parameterDefinitions: "参数是文本字符串和要提取的字符数。"
      },
      {
        title: 'ROMAN',
        call: "ROMAN(499)",
        result: 'CDXCIX',
        definition: "将阿拉伯数字转换为罗马数字。",
        parameterDefinitions: "参数是要转换的阿拉伯数字。"
      },
      {
        title: 'SEARCH',
        call: "SEARCH('margin', 'Profit Margin')",
        result: 8,
        definition: "在文本中查找子字符串，不区分大小写。",
        parameterDefinitions: "参数包括要查找的文本和源文本。"
      },
      {
        title: 'SUBSTITUTE',
        call: "SUBSTITUTE('Quarter 1, 2011', '1', '2', 3)",
        result: 'Quarter 1, 2012',
        definition: "用新文本替换旧文本中的特定实例。",
        parameterDefinitions: "参数是原始文本、旧文本、新文本和可选的替换实例。"
      },
      {
        title: 'T',
        call: "T('Rainfall')",
        result: 'Rainfall',
        definition: "如果参数是文本，则返回该文本；否则返回空字符串。",
        parameterDefinitions: "参数可以是任何类型的数据。"
      },
      {
        title: 'TRIM',
        call: "TRIM(' First Quarter Earnings ')",
        result: 'First Quarter Earnings',
        definition: "去除文本前后的空格，内部多于一个的空格保留为一个。",
        parameterDefinitions: "参数是要修剪的文本字符串。"
      },
      {
        title: 'TEXTJOIN',
        call: "TEXTJOIN(' ', true, 'The', '', 'sun', 'will', 'come', 'up', 'tomorrow.')",
        result: 'The sun will come up tomorrow.',
        definition: "将多个文本项连接成一个字符串，使用指定的分隔符。",
        parameterDefinitions: "参数是分隔符、忽略空值标志和要连接的文本项。"
      },
      {
        title: 'UNICHAR',
        call: "UNICHAR(66)",
        result: 'B',
        definition: "返回给定Unicode数字对应的字符。",
        parameterDefinitions: "参数是Unicode字符代码。"
      },
      {
        title: 'UNICODE',
        call: "UNICODE('B')",
        result: 66,
        definition: "返回文本的第一个字符的Unicode数字。",
        parameterDefinitions: "参数是包含单个字符的文本字符串。"
      },
      {
        title: 'UPPER',
        call: "UPPER('total')",
        result: 'TOTAL',
        definition: "将所有字符转换为大写。",
        parameterDefinitions: "参数是要转换的文本字符串。"
      }
    ]
  }
];

const FormulaFunctions = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // 将 Formula.js 的函数添加到全局
    const formulaKeys = Object.keys(formulajs);
    formulaKeys.forEach((key) => {
      window[key] = formulajs[key];
    });
  }, []);

  const executeFormula = (formulaStr) => {
    try {
      if (!formulaStr.trim()) {
        setResult('');
        return;
      }
      // 1. 评估公式
      let evaluatedResult = Function('"use strict"; return (' + formulaStr + ')')();

      // 2. 转字符串，避免 [object Date] 报错
      if (evaluatedResult instanceof Date) {
        evaluatedResult = evaluatedResult.toString();
      } else if (
        typeof evaluatedResult === 'object' &&
        evaluatedResult !== null
      ) {
        evaluatedResult = JSON.stringify(evaluatedResult);
      } else {
        evaluatedResult = String(evaluatedResult);
      }

      setResult(evaluatedResult);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  const handleFunctionClick = (funcCall) => {
    setFormula(funcCall);
    executeFormula(funcCall);
  };

  const handleInputChange = (e) => {
    const newFormula = e.target.value;
    setFormula(newFormula);
    executeFormula(newFormula);
  };

  return (
    <div className="page-container">
      {/* 输入与结果区域 */}
      <div className="container" id="formula-container">
        <div className="row gx-2 gy-2 align-items-center">
          {/* 左侧：Formula label & input */}
          <div className="col-12 col-md-8 d-flex">
            <span className="input-group-text">Formula: </span>
            <input
              type="text"
              id="in"
              className="form-control"
              placeholder="Enter formula here"
              value={formula}
              onChange={handleInputChange}
            />
          </div>
          {/* 右侧：Result */}
          <div className="col-12 col-md-4">
            <div className="input-group-text" id="result">
              {result}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <p></p>
        <p>点击函数的 <strong>Example call</strong> 将示例加载到上方的输入框中并执行。</p>

        {/* 按类别分组的函数表格 */}
        <div id="function-tables">
          {functionsData.map((categoryData) => (
            <div key={categoryData.category}>
              <h2>{categoryData.category}</h2>
              <div className="table-responsive mb-4">
                <table className="table table-bordered">
                  <thead>
                  <tr>
                    <th>Function</th>
                    <th>Definition</th>
                    <th>Example call</th>
                    <th>Parameters</th>
                    <th>Expected result</th>
                  </tr>
                  </thead>
                  <tbody>
                  {categoryData.functions.map((func) => (
                    <tr key={func.title} className="function">
                      <td>
                        <code className="function-name">{func.title}</code>
                      </td>
                      <td>{func.definition}</td>
                      <td>
                        <div
                          className="clickable"
                          role="button"
                          onClick={() => handleFunctionClick(func.call)}
                        >
                          <code className="function-call">{func.call}</code>
                        </div>
                      </td>
                      <td>{func.parameterDefinitions}</td>
                      <td>{func.result}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormulaFunctions;

