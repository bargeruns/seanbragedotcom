import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('resume', {path: '/resume'}, function() {
    this.route('culture');
    this.route('work');
    this.route('skills');
  });
  this.route('demos');
});

export default Router;
