/* @ts-check */

import nodosDb from '@nodosjs/db-typeorm-extension';
import nodosView from '@nodosjs/view-extension';

export default async (app) => {
  app.addExtension(nodosDb);
  app.addExtension(nodosView);

  app.config.csrf = { enabled: true };
};
