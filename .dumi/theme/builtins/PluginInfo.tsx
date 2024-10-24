import { Link, useSiteData } from 'dumi';
import React from 'react';

const PluginInfo = (props) => {
  const { name, link, commercial, licenseBundled } = props;
  const { themeConfig } = useSiteData();
  const zhCN = themeConfig.lang === 'zh-CN';
  const jaJP = themeConfig.lang === 'ja-JP';

  return (
    <div>
      <div className="dumi-default-container markdown" data-type="info">
        <svg viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
        <h4>
          {zhCN ? '提示' : jaJP ? '注意' : 'INFO'}
        </h4>
        {
          licenseBundled ? (
            <section>
              {zhCN ? (
                <p>
                  该功能由商业插件 <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link> 提供，包含在 <a target="_blank" href="https://www.nocobase.com/cn/commercial">商业版本</a> 中，无需单独购买。
                </p>
              ) : jaJP ? (
                <p>
                  この機能は商用プラグイン <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link> によって提供されます，包含在 <a target="_blank" href="https://www.nocobase.com/jp/commercial">商业版本</a> 中，无需单独购买。
                </p>
              ) : (
                <p>
                  This feature is provided by the commercial plugin <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link>, included in the <a target="_blank" href="https://www.nocobase.com/en/commercial">commercial edition</a>, with no additional purchase required.
                </p>
              )}
            </section>
          ) : (
            <section>
              {zhCN ? (
                <p>
                  该功能由{commercial ? '商业' : ''}插件 <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link> 提供{commercial && <>，请查看 <a target="_blank" href="https://www.nocobase.com/cn/plugins">商业授权</a> 了解详情</>}.
                </p>
              ) : jaJP ? (
                <p>
                  この機能は{commercial ? '商用' : ''}プラグイン <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link> によって提供されます。{commercial && <> 詳細については、<a target="_blank" href="https://www.nocobase.com/jp/plugins">商用ライセンス</a> をご覧ください。</>}
                </p>
              ) : (
                <p>
                  This feature is provided by the {commercial ? 'commercial ' : ''}plugin <Link to={link ?? `/handbook/${name}`}>plugin-{name}</Link>. {commercial && <><br /> Please refer to the <a target="_blank" href="https://www.nocobase.com/en/plugins">commercial license</a> for details.</>}
                </p>
              )}
            </section>
          )
        }
      </div>
    </div>
  );
};

export default PluginInfo;
