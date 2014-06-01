NziffPicks.RegionIndexRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.pushMany('film', NziffPicks.AucklandFilms);
  }
});
