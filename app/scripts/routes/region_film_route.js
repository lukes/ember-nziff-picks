NziffPicks.RegionFilmRoute = Ember.Route.extend({
  model: function (params) {
    console.log(this.store.findById('film', params.film_id).get('reviews'));
    return this.store.findById('film', params.film_id);
    // TODO check and handle that this film gets screened in this region
  }
});
