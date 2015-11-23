import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'review',
  classNameBindings: 'typeClass',

  typeClass: Ember.computed('review.positive', function() {
    if (this.get('review.positive')) {
      return 'positive'
    } else {
      return 'negative'
    }
  })

});
