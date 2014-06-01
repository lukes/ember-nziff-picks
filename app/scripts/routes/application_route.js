NziffPicks.ApplicationRoute = Ember.Route.extend({
  model: function () {
    // return this.store.find('region');
    // To prevent unnecessary loading of all the
    // associated film ids for each region, just
    // present the bare-mininum required to link to a region
    return [
      {id: 'auckland', name: 'Auckland'},
      {id: 'wellington', name: 'Wellington'}
    ]
  }
});
