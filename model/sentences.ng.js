angular.module('ordabokWeb').service('Sentences', function() {
  this.collection = new Meteor.Collection('sentences');
});