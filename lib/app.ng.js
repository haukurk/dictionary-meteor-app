var deps = ['angular-meteor', 'ordabokWeb.config'];

if (Meteor.isServer) {
  // Lets just keep the default.
}
else {
  // Client site loading.

  deps.push('ui.router');

  onReady = function() {
      angular.bootstrap(document, ['ordabokWeb', 'mgcrea.ngStrap']);
  };

  if(Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
  } else {
    angular.element(document).ready(onReady);
  }

}

angular.module('ordabokWeb', deps);
