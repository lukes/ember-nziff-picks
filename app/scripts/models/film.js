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
  rt_link: DS.attr('')
});
