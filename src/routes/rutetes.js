import { Pruducts } from '@/pages/app';
import { Cart } from '@/pages/about-us';
import Navigo from 'navigo';
import { SingleProduct } from '@/components/single-product';

const changePage = (page) => {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(page());
};

let router = new Navigo('/');
export const Router = () => {
  router
    .on('/', () => {
      changePage(Pruducts);
    })
    .on('/cart', () => {
      changePage(Cart);
    })
    .on('/product/:id', () => {
      changePage(SingleProduct);
    });
  return router;
};