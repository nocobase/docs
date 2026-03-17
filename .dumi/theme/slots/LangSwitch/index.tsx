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

// 语言与路径前缀映射：英文 /v1/，其他语言 /v1/{lang}/
const LANG_PATH_PREFIX: Record<string, string> = {
  'en-US': '/v1/',
  'zh-CN': '/v1/zh-CN/',
  'ja-JP': '/v1/ja-JP/',
  'ru-RU': '/v1/ru-RU/',
  'fr-FR': '/v1/fr-FR/',
};

const LANGUAGES = [
  { code: 'en-US', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'ja-JP', label: '日本語' },
  { code: 'ru-RU', label: 'Русский' },
  { code: 'fr-FR', label: 'Français' },
];

/** 从当前 pathname 解析出当前语言和文档路径（不含语言前缀） */
function parsePath(pathname: string): { lang: string; docPath: string } {
  for (const [lang, prefix] of Object.entries(LANG_PATH_PREFIX)) {
    if (lang === 'en-US') continue;
    if (pathname.startsWith(prefix)) {
      return { lang, docPath: pathname.slice(prefix.length).replace(/^\/+/, '') || '' };
    }
  }
  // 匹配 /v1 或 /v1/ 开头的视为英文
  if (pathname === '/v1' || pathname === '/v1/') {
    return { lang: 'en-US', docPath: '' };
  }
  if (pathname.startsWith('/v1/')) {
    return { lang: 'en-US', docPath: pathname.slice(4) || '' };
  }
  return { lang: 'en-US', docPath: pathname.replace(/^\/+/, '') };
}

const LangSwitch: React.FC = () => {
  if (typeof window === 'undefined') return null;

  const { pathname, search, hash } = window.location;
  const { lang: currentLang } = parsePath(pathname);

  const handleMenuClick = ({ key }: { key: string }) => {
    const targetPrefix = LANG_PATH_PREFIX[key] || LANG_PATH_PREFIX['en-US'];
    const { docPath } = parsePath(pathname);
    const newPath = targetPrefix + docPath + search + hash;
    window.location.href = newPath;
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {LANGUAGES.map((lang) => (
        <Menu.Item key={lang.code}>
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
