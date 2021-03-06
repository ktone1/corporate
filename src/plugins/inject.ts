import { Plugin } from '@nuxt/types';

import { companyRepositoryFactory } from '~/domains/company';
import { pressRepositoryFactory } from '~/domains/press';

const plugin: Plugin = (ctx, inject) => {
  const press = pressRepositoryFactory(ctx.$axios);
  ctx.$press = press;
  inject('press', press);
  const company = companyRepositoryFactory(ctx.$axios);
  ctx.$company = company;
  inject('company', company);
  // microcms apiもcloundfrontなので、viaヘッダーで多段になると403になる対策
  ctx.$axios.defaults.headers.common = {};
};

export default plugin;
