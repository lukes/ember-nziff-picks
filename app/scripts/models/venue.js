NziffPicks.Venue = DS.Model.extend({
  name: DS.attr(''),
  region: DS.belongsTo('region', { async: true }),
  screenings: DS.hasMany('screening', { async: true })
});
