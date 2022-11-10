import EmberRouter from '@ember/routing/router';
import config from 'ember-new-crud/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', { path: '/about-us' });
});
