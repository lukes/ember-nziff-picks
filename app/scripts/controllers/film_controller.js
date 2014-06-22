NziffPicks.FilmController = Ember.ObjectController.extend({

  // backgroundImage: '', // TODO a "none image - or black?"

  backgroundImageStyle: function() {
    return 'background-image:url('+this.get('image_m')+')';
  }.property('image_m'),

  goodReview: function() {
    return this.get('reviews').filterBy('positive', true).get('firstObject');
  }.property('reviews.@each'),

  badReview: function() {
    return this.get('reviews').filterBy('positive', false).get('firstObject');
  }.property('reviews.@each')

})
