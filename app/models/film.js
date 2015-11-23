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

  reviews: DS.hasMany('review')
});