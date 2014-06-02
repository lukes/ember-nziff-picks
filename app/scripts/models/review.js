NziffPicks.Review = DS.Model.extend({
  critic: DS.attr(''),
  positive: DS.attr(''),
  publication: DS.attr(''),
  quote: DS.attr(''),
  link: DS.attr(''),
  film: DS.belongsTo('film', { async: true })
});


NziffPicks.Review.FIXTURES = [
  { id: "auckland", name: 'Auckland' },
  { id: "wellington", name: 'Wellington' }
]