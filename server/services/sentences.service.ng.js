angular.module('ordabokWeb')
  .service('SentencesManager', function (Sentences) {
    this.addSentence = function (sentence) {
      if (sentence.name.length < 3) {
        throw new Meteor.Error(500, undefined, 'Title must be longer than 3 letters');
      }
      else {
        Sentences.collection.insert(sentence);
      }
    };    
  })
  .config(function (ServerAPIProvider) {
    ServerAPIProvider.register('SentencesManager');
  });
