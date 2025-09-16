import React from 'react';
import { Dropdown, Menu } from 'antd';

// 定义自定义的 LangIcon 组件
const LangIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    width="1.5em"
    height="1.5em"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z"></path>
    <path d="M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-.3.8-.4 1.7-.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4a8.42 8.42 0 00-7.7-5.4zm12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80zm160 0h-88v-80h88v80z"></path>
  </svg>
);

const LangSwitch: React.FC = () => {
  if (typeof window === 'undefined') return null;

  const { hostname, href } = window.location;

  const languages = [
    { code: 'en', label: 'English', hostname: 'docs.nocobase.com' },
    { code: 'cn', label: '简体中文', hostname: 'docs-cn.nocobase.com' },
    { code: 'ja', label: '日本語', hostname: 'docs-jp.nocobase.com' },
    { code: 'ru', label: 'Русский', hostname: 'docs-ru.nocobase.com' },
  ];

  const currentLang = languages.find(lang => lang.hostname === hostname);

  const handleMenuClick = ({ key }: { key: string }) => {
    const selectedLang = languages.find(lang => lang.code === key);
    if (selectedLang && selectedLang.hostname !== hostname) {
      const url = new URL(href);
      url.hostname = selectedLang.hostname;
      url.port = ''; // 移除端口号
      window.location.href = url.toString();
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {languages.map(lang => (
        <Menu.Item key={lang.code} disabled={lang.hostname === hostname}>
          {lang.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <span style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        <LangIcon style={{ marginRight: 8 }} />
        {/*{currentLang ? currentLang.label : 'Language'}*/}
      </span>
    </Dropdown>
  );
};

export default LangSwitch;
