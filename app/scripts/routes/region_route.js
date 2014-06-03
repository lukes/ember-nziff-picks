NziffPicks.RegionRoute = Ember.Route.extend({
  model: function (params) {
    // TODO return films for this region
    // TODO will eventually pushPayload a lot of films for the region
    // set the currentRegion
    var region = this.store.find('region', params.region_id);
    this.get('region').set('content', region);
    return this.get('currentRegion');
  }
});
