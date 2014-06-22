NziffPicks.Screening = DS.Model.extend({
  time: DS.attr(''),
  venue: DS.belongsTo('venue', { async: true }),
  film: DS.belongsTo('film', { async: true })
});
