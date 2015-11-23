import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  year: DS.attr(),
  runtime: DS.attr(),
  synopsis: DS.attr(),
  critics_score: DS.attr(),
  audience_score: DS.attr(),
  image_m: DS.attr(),
  image_l: DS.attr(),
  slug: DS.attr(),
  tag: DS.attr(),

  // TODO This could be moved to the compilation stage
  shortSynopsis: Ember.computed('synopsis', function() {
    let firstChars = this.get('synopsis').slice(0, 200);
    let nextChars = this.get('synopsis').slice(200, this.get('synopsis.length'));
    if (!nextChars) {
      return firstChars
    }
    let index = nextChars.indexOf(".");
    return (firstChars + nextChars.slice(0, index+1))
  }),

  reviews: DS.hasMany('review'),

  positiveReview: Ember.computed('reviews.@each.positive', function() {
    return this.get('reviews').findBy('positive', true)
  }),

  negativeReview: Ember.computed('reviews.@each.positive', function() {
    return this.get('reviews').findBy('positive', false)
  }),

});
