import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products');
  this.route('user');
  this.route('users');
  this.route('configs');
  this.route('login');
});

export default Router;
