Ember.Application.initializer({
  name: "registerCurrentRegion",

  initialize: function(container, application) {
    // var store = container.lookup('store:main');
    // var obj = store.load(CrashLog.User, currentUser);

    // container.register('session:currentRegion', NziffPicks.CurrentRegion, { singleton: true });
    // container.inject('controller', 'region', 'session:currentRegion');

    var controller = container.lookup('controller:currentRegion');//.set('content', user)
    container.typeInjection('controller', 'region', 'controller:currentRegion')
    container.typeInjection('route', 'region', 'controller:currentRegion')

    // console.log("here")

    // container.optionsForType('currentRegion', { instantiate: false, singleton: true });

  }
});
