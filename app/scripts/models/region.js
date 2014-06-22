NziffPicks.Region = DS.Model.extend({
  name: DS.attr(''),
  slug: DS.attr(''),
  films: DS.hasMany('film', { async: true })
});
