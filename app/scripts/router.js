NziffPicks.Router.map(function () {
  // Add your routes here
  this.resource('region', { path: ':region_id' }, function() {
    this.route('film', { path: 'film/:film_id' });
  })
});
