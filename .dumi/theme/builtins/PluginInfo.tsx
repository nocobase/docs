import { Link, useSiteData } from 'dumi';
import React from 'react';
import messages from '../locale/pluginInfo';

interface PluginInfoProps {
  name: string;
  link?: string;
  commercial?: boolean;
  licenseBundled?: boolean;
  /** @deprecated This parameter is deprecated and will be removed in future versions. */
  deprecated?: boolean;
}

const PluginInfo: React.FC<PluginInfoProps> = (props) => {
  const { name, link, commercial, licenseBundled, deprecated } = props;
  const { themeConfig } = useSiteData();
  const zhCN = themeConfig.lang === 'zh-CN';
  const jaJP = themeConfig.lang === 'ja-JP';
  const bundleTexts = licenseBundled === 'enterprise' ? {
    'zh-CN': '企业版',
    'ja-JP': '企业版',
    'en-US': 'commercial edition',
  } : {
    'zh-CN': '商业版',
    'ja-JP': '商业版',
    'en-US': 'commercial edition',
  }
  const lang = themeConfig.lang || 'en-US';
  const t = messages[lang];

  const getCommercialLink = () => {
    const baseUrl = 'https://www.nocobase.com';
    const path = {
      'zh-CN': '/cn/commercial',
      'ja-JP': '/jp/commercial',
      'en-US': '/en/commercial'
    }[lang];
    
    return (
      <a target="_blank" rel="noreferrer" href={`${baseUrl}${path}`}>
        {t.commercialEdition}
      </a>
    );
  };

  const getLicenseLink = () => {
    const baseUrl = 'https://www.nocobase.com';
    const path = {
      'zh-CN': '/cn/plugins',
      'ja-JP': '/jp/plugins',
      'en-US': '/en/plugins'
    }[lang];
    
    return (
      <a target="_blank" rel="noreferrer" href={`${baseUrl}${path}`}>
        {t.commercialLicense}
      </a>
    );
  };

  return (
    <div>
      <div className="dumi-default-container markdown" data-type={deprecated ? 'warning' : 'info'}>
        <svg viewBox="64 64 896 896">
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
        </svg>
        <h4>{deprecated ? t.deprecatedInfo : t.info}</h4>
        <section>
          {licenseBundled ? (
            <p>
              {t.bundledPluginMessage.split('{pluginName}').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link>
                  )}
                </React.Fragment>
              ))}
              {t.bundledPluginMessage.includes('{commercialLink}') && getCommercialLink()}
            </p>
          ) : (
            <p>
              {commercial ? t.pluginMessage.split('{commercialText}')[0] + t.commercial : t.pluginMessage.split('{commercialText}')[0]}
              <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link>
              {commercial && (
                <>
                  {t.licenseDetails.split('{licenseLink}')[0]}
                  {getLicenseLink()}
                  {t.licenseDetails.split('{licenseLink}')[1]}
                </>
              )}
            </p>
          )}
        </section>
        {deprecated && (
          <section>
            <p>{t.deprecatedMessage}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default PluginInfo;
