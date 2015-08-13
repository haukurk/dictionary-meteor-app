angular.module('ordabokWeb')
 .config(function(ServerAPIProvider, $injector) {
  if($injector.has('Translation'))
    ServerAPIProvider.register('Translation');
 });

angular.bootstrap(['ordabokWeb']);
