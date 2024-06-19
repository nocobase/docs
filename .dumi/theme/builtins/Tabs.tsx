import { Tabs as AntdTabs } from 'antd';
import React from 'react';

const Tabs = (props) => {
    console.log(props);
  const arr = () => {
    return props.children.map(child => {
      return {
        key: child.props.name,
        label: child.props.label,
        children: child.props.children,
      }
    })
  };
  return (
    <div className="markdown">
      <AntdTabs items={arr()} />
    </div>
  );
};

export default Tabs;
