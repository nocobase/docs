import { Link, useSiteData } from 'dumi';
import React from 'react';
import messages from '../locale/pluginInfo';

interface PluginInfoProps {
  name: string;
  link?: string;
  plugins?: string;
  commercial?: boolean;
  licenseBundled?: 'enterprise' | 'commercial' | boolean;
  /** @deprecated This parameter is deprecated and will be removed in future versions. */
  deprecated?: boolean;
}

function PluginLink(props: { name: string; link?: string }) {
  const { name, link } = props;
  return <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link>;
}

function PluginList({ plugins, name, link }: { plugins?: string; name: string; link?: string }) {
  return plugins ? (
    <>
      {plugins.split(',').map((item, i) => (
        <React.Fragment key={item}>
          <PluginLink name={item.trim()} />
          {i < plugins.split(',').length - 1 ? ', ' : ''}
        </React.Fragment>
      ))}
    </>
  ) : (
    <PluginLink name={name} link={link} />
  );
}

function formatMessage(template: string, values: Record<string, React.ReactNode>) {
  const parts = template.split(/(\{[^}]+\})/g);
  return parts.map((part, index) => {
    const matches = part.match(/\{([^}]+)\}/);
    if (matches) {
      const key = matches[1];
      return <React.Fragment key={index}>{values[key]}</React.Fragment>;
    }
    return part;
  });
}

const PluginInfo: React.FC<PluginInfoProps> = (props) => {
  const { name, link, plugins, commercial, licenseBundled, deprecated } = props;
  const { themeConfig } = useSiteData();
  const lang = themeConfig.lang || 'en-US';
  const t = messages[lang];

  const edition = licenseBundled && licenseBundled === 'enterprise' 
    ? t.enterpriseEdition 
    : t.commercialEdition;

  const commercialLink = (text: string) => {
    const paths = {
      'zh-CN': '/cn/commercial',
      'ja-JP': '/jp/commercial',
      'en-US': '/en/commercial'
    };
    
    return (
      <a target="_blank" rel="noreferrer" href={`${t.commercialBaseUrl}${paths[lang]}`}>
        {text}
      </a>
    );
  };

  const licenseLink = () => {
    const paths = {
      'zh-CN': '/cn/plugins',
      'ja-JP': '/jp/plugins',
      'en-US': '/en/plugins'
    };
    
    return (
      <a target="_blank" rel="noreferrer" href={`${t.commercialBaseUrl}${paths[lang]}`}>
        {t.commercialLicense}
      </a>
    );
  };

  const pluginsList = <PluginList plugins={plugins} name={name} link={link} />;

  const renderMessage = () => {
    if (licenseBundled) {
      return (
        <span>
          {formatMessage(t.bundledPluginMessage, {
            plugins: pluginsList,
            edition: commercialLink(edition)
          })}
        </span>
      );
    }

    return (
      <span>
        {formatMessage(t.pluginMessage, {
          commercial: commercial ? t.commercial : '',
          plugins: pluginsList,
          license: commercial ? formatMessage(t.licenseDetails, {
            license: licenseLink()
          }) : ''
        })}
      </span>
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
          <p>{renderMessage()}</p>
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
