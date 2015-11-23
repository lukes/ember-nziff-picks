import DS from 'ember-data';

export default DS.Model.extend({
  quote: DS.attr(),
  link: DS.attr(),

  film: DS.belongsTo('film')
});
