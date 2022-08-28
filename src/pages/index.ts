import { PAGES } from '@constants';
import AuthController from '@controllers/AuthController';
import router from '@router';

document.addEventListener('DOMContentLoaded', async () => {
  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();

  await AuthController.getUser();
});
