import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.$.getJSON('/api/data').then((data) => {
      this.store.pushPayload(data)
      return this.store.peekAll('film')
    });
  }

});
