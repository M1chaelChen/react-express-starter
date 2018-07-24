import common from './env/common';
import development from './env/development';
import production from './env/production';

const env = 'development';

export default {
  development: { ...common, ...development },
  production: { ...common, ...production }
}[env];
