Ember.Application.initializer({
  name: "registerCurrentRegion",

  initialize: function(container, application) {
    var controller = container.lookup('controller:currentRegion');
    container.typeInjection('controller', 'region', 'controller:currentRegion');
    container.typeInjection('route', 'region', 'controller:currentRegion');
  }
});
