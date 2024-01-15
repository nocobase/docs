import api from './api';
import breaking from './breaking';
import development from './development';
import manual from './manual';
import nav from './nav';
import plugins from './plugins';
import welcome from './welcome';

const sidebar = {
  '/welcome': welcome,
  '/manual': manual,
  '/development': development,
  '/plugins': plugins,
  '/api': api,
  '/breaking-changes': breaking,
};

export { nav, sidebar };
