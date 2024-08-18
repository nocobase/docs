import { useSiteData } from 'dumi';
import React from 'react';

const CommercialInstallation = (props) => {
  const { themeConfig } = useSiteData();
  const zhCN = themeConfig.lang === 'zh-CN';
  return (
    <div>
      <div className="markdown">
        <h2>{zhCN ? '安装' : 'Installation'}</h2>
      </div>
      <div className="dumi-default-container markdown" data-type="info">
        <svg viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
        <section>
          {zhCN ? (
            <p>该插件为商业插件，需要通过插件管理器上传并激活插件：</p>
          ) : (
            <p>This is a commercial plugin, which need to be uploaded and enabled in plugin manager.</p>
          )}
          <p>
            <img alt="" src="https://static-docs.nocobase.com/20240323162741.png" />
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommercialInstallation;
