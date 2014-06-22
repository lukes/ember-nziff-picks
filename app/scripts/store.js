NziffPicks.ApplicationAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(fixture, query, type) {
    // backwards-compatible way of getting the hash key
    var key = $.map(query, function(element,index) {return index}).toString();
    return fixture.filterBy(key, query[key]);
    // return records.filter(function(record) {
    //     for(var key in query) {
    //         if (!query.hasOwnProperty(key)) { continue; }
    //         var value = query[key];
    //         if (record[key] !== value) { return false; }
    //     }
    //     return true;
    // });
  }
});
