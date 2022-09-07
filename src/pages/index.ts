import { PAGES } from 'src/constants';
import AuthController from 'src/controllers/AuthController';
import router from 'src/router';

import '../styles/styles.scss';

document.addEventListener('DOMContentLoaded', async () => {
  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();

  await AuthController.getUser();
});
