// generateFunctionsComponent.tsx
import React, { useState } from 'react';
import { useSiteData } from 'dumi';
import { Card, Col, Input, Row, Table, Typography } from 'antd';

const { Title, Text } = Typography;

// 这部分类型仅作示例
export interface IFunctionDefinition {
  en?: string;
  cn?: string;
  ja?: string;
}

export interface IFunctionItem {
  title: string;
  call: string;
  result: string | number | object | any;
  definition: IFunctionDefinition;
  parameterDefinitions: IFunctionDefinition;
}

export interface IFunctionCategory {
  category: string;
  functions: IFunctionItem[];
}

interface IGenerateFunctionsComponentProps {
  data: IFunctionCategory[];
  evaluateFunction?: (expression: string, scope?: Record<string, any>) => any;
}

/**
 * 通用的函数组件生成逻辑。
 * 不挂载任何库，也不关心要挂载哪些库。
 * 只负责将用户输入的公式执行，并将结果显示出来。
 */
const generateFunctionsComponent = (props: IGenerateFunctionsComponentProps) => {
  const { data, evaluateFunction } = props;

  const CommonFunctions: React.FC = () => {
    const { themeConfig } = useSiteData();
    const zhCN = themeConfig.lang === 'zh-CN';
    const jaJP = themeConfig.lang === 'ja-JP';

    const [formula, setFormula] = useState('');
    const [result, setResult] = useState('');

    /**
     * 执行公式
     * @param formulaStr 用户输入或点击示例时得到的字符串，如 "SQRT(16)" 或 "DATE(2023,10,1)"
     */
    const executeFormula = (formulaStr: string) => {
      try {
        if (!formulaStr.trim()) {
          setResult('');
          return;
        }
        
        let evaluatedResult;
        
        // 使用提供的evaluateFunction如果有的话，否则使用默认的函数求值方式
        if (evaluateFunction) {
          evaluatedResult = evaluateFunction(formulaStr);
        } else {
          // 旧的求值逻辑保留作为备用
          evaluatedResult = Function('"use strict"; return (' + formulaStr + ')')();
        }

        if (evaluatedResult instanceof Date) {
          evaluatedResult = evaluatedResult.toString();
        } else if (typeof evaluatedResult === 'object' && evaluatedResult !== null) {
          evaluatedResult = JSON.stringify(evaluatedResult);
        } else {
          evaluatedResult = String(evaluatedResult);
        }
        setResult(evaluatedResult);
      } catch (error: any) {
        setResult(`Error: ${error.message}`);
      }
    };

    /**
     * 点某个示例时，直接填入公式并执行
     */
    const handleFunctionClick = (funcCall: string) => {
      setFormula(funcCall);
      executeFormula(funcCall);
    };

    /**
     * 输入框变动
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormula = e.target.value;
      setFormula(newFormula);
      executeFormula(newFormula);
    };

    /**
     * 获取本地化文案的小工具
     */
    const getLocalizedText = (obj?: IFunctionDefinition): string => {
      if (!obj) return '';
      if (zhCN && obj.cn) return obj.cn;
      if (jaJP && obj.ja) return obj.ja;
      // 默认英文
      return obj.en || '';
    };

    /**
     * antd 表格列定义
     */
    const columns = [
      {
        title: 'Function',
        dataIndex: 'title',
        key: 'title',
        width: '10%',
        render: (text: string) => <Text strong>{text}</Text>,
      },
      {
        title: 'Definition',
        dataIndex: 'definition',
        key: 'definition',
        width: '25%',
        render: (definition: IFunctionDefinition) => {
          return getLocalizedText(definition);
        },
      },
      {
        title: 'Example call',
        dataIndex: 'call',
        key: 'call',
        width: '20%',
        render: (call: string) => (
          <Text style={{ color: '#1677ff', cursor: 'pointer' }} onClick={() => handleFunctionClick(call)}>
            {call}
          </Text>
        ),
      },
      {
        title: 'Parameters',
        dataIndex: 'parameterDefinitions',
        key: 'parameterDefinitions',
        width: '20%',
        render: (params: IFunctionDefinition) => {
          return getLocalizedText(params);
        },
      },
      {
        title: 'Expected result',
        dataIndex: 'result',
        key: 'result',
        width: '25%',
      },
    ];

    return (
      <div>
        <section
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 999,
            background: '#fff',
            padding: '16px 0',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Card style={{ marginBottom: 0 }}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Row gutter={8} align="middle">
                  <Col flex="70px">
                    <Text strong>Formula:</Text>
                  </Col>
                  <Col flex="auto">
                    <Input
                      placeholder="Enter formula here"
                      value={formula}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row gutter={8} align="middle">
                  <Col flex="60px">
                    <Text strong>Result:</Text>
                  </Col>
                  <Col flex="auto">
                    <Card
                      size="small"
                      style={{
                        backgroundColor: '#f6ffed',
                        border: '1px solid #b7eb8f',
                        borderRadius: 4,
                      }}
                    >
                      <Text style={{ fontWeight: 'bold' }}>{result}</Text>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div style={{ marginTop: 16 }}>
              <Text>
                {zhCN
                  ? '点击下面表格中某函数的 Example call，可将示例自动填入上方输入框并执行。'
                  : jaJP
                    ? '下のテーブルの Example call をクリックすると、上の入力欄に自動的に入力して実行します。'
                    : 'Click an Example call below to populate and execute in the input above.'}
              </Text>
            </div>
          </Card>
        </section>

        {data.map((category) => (
          <Card key={category.category} style={{ marginTop: 24 }}>
            <Title level={3}>{category.category}</Title>
            <Table
              dataSource={category.functions}
              columns={columns}
              rowKey="title"
              pagination={false}
            />
          </Card>
        ))}
      </div>
    );
  };

  return CommonFunctions;
};

export default generateFunctionsComponent;
