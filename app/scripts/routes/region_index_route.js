NziffPicks.RegionIndexRoute = Ember.Route.extend({
  model: function (params) {
    // TODO films in this region only
    return this.store.find('film');
  }
});
