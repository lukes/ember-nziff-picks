Ember.Handlebars.registerBoundHelper('toSentence', function(data) {

  var defaultConnectors = {
        wordsConnector: ', ',
        twoWordsConnector: ' and ',
        lastWordConnector: ', and '
      },
      sentence;

  if (data.length === 0) {
    sentence = '';
  } else if (data.length === 1) {
    sentence = data[0];
  } else if (data.length === 2) {
    sentence = data[0] + defaultConnectors.twoWordsConnector + data[1];
  } else {
    sentence = data.slice(0, data.length-1).join(defaultConnectors.wordsConnector) + defaultConnectors.lastWordConnector + data[data.length-1];
  }

  return new Handlebars.SafeString(sentence);

});
