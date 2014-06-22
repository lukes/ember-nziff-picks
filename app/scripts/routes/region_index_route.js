NziffPicks.RegionIndexRoute = Ember.Route.extend({
  model: function (params) {
    // TODO films in this region only
    // load venues
    // this.region.get('venues');
    // this.store.all('venue');
    // return this.store.find('film');
    return this.get('region.films');
  }
});
