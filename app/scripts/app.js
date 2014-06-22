var NziffPicks = window.NziffPicks = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/initializers/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/data/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers/*');
require('scripts/router');
