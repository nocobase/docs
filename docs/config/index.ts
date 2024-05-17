import api from './api';
import breaking from './breaking';
import development from './development';
import handbook from './handbook';
import nav from './nav';
import welcome from './welcome';
import pluginSamples from './pluginSamples'
import plugins from './plugins';

const sidebar = {
  '/welcome': welcome,
  // '/manual': manual,
  '/handbook': handbook,
  '/development': development,
  '/plugins': plugins,
  '/api': api,
  '/plugin-samples': pluginSamples,
  '/breaking-changes': breaking,
};

export { nav, sidebar };
