import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'film-thumb',
  classNameBindings: ['tagClass'],

  tagClass: Ember.computed('tag', function() {
    return this.get('film.tag').dasherize()
  })
});
