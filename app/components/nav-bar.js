import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleMenu() {
      this.toggleProperty('active');
    }
  }
});
