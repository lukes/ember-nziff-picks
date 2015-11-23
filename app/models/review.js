import DS from 'ember-data';

export default DS.Model.extend({
  quote: DS.attr(),
  link: DS.attr(),
  positive: DS.attr('boolean'),

  film: DS.belongsTo('film')
});
