NziffPicks.Film = DS.Model.extend({
  title: DS.attr(''),
  year: DS.attr(''),
  genres: DS.attr(''),
  runtime: DS.attr(''),
  synopsis: DS.attr(''),
  critics_score: DS.attr(''),
  audience_score: DS.attr(''),
  directors: DS.attr(''),
  image_m: DS.attr(''),
  image_l: DS.attr(''),
  rt_link: DS.attr(''),
  reviews: DS.hasMany('review', { async: true }),
  region: DS.belongsTo('region', { async: true }),

  rank: Ember.computed(function() {
    if (this.get('critics_score') === -1) {
      return this.get('audience_score');
    } else {
      return this.get('critics_score');
    }
  }),

  // goodReview: function() {
  //   // debugger;
  //   return this.get('reviews.length');
  // }.property('reviews.@each')

});
