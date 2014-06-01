NziffPicks.RegionRoute = Ember.Route.extend({
  model: function (params) {
    // TODO return films for this region
    // TODO will eventually pushPayload a lot of films for the region
    return this.store.find('region', params.region_id);
  }
});
