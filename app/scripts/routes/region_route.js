NziffPicks.RegionRoute = Ember.Route.extend({
  model: function (params) {
    // set the currentRegion
    // var region = this.store.find('region', { slug: params.region_id });
    // TODO - see if we can get the region by slug, then we
    // can use ints for the region ids
    var region = this.store.find('region', params.region_id);
    this.get('region').set('content', region);

    return this.get('currentRegion');
  }
});
