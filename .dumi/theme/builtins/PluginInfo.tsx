import { Link } from 'dumi';
import React from 'react';

const PluginInfo = (props) => {
  const { name, commercial } = props;
  return (
    <div>
      <div className="dumi-default-container markdown" data-type="info">
        <svg viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
        <h4>提示</h4>
        <section>
          <p>该功能由{commercial ? '商业' : ''}插件 <Link to={`/handbook/${name}`}>plugin-{name}</Link> 提供{commercial && <>，请查看 <a target="_blank" href="https://cn.nocobase.com/commercial-cn.html">商业授权</a> 了解详情</>}。</p>
        </section>
      </div>
    </div>
  );
};

export default PluginInfo;
