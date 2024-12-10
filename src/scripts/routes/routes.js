import ListResto from '../views/pages/resto-list';
import Detail from '../views/pages/detail-resto';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListResto,
  '/detail/:id': Detail,
  '/favorite': Favorite
};


export default routes;