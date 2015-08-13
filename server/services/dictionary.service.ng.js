angular.module('ordabokWeb')
  .service('TranslationServerService', function ($http, $log, CONFIG) {

    var service = {};

    // public functions

    function SearchOneTranslation(searchParams) {
        return $http.get(CONFIG.APIURLBASE+"/translations/findOne", { params: searchParams })
                    .then(handleSuccess, handleError('Error when retreiving data from dictionary api.'));
    }

    function SearchTranslations(searchParams) {
        //return $http.get(CONFIG.APIURLBASE+"/translations", { params: searchParams })
        return $http.get(CONFIG.APIURLBASE+"/translations?filter%5Blimit%5D=100&filter%5Bwhere%5D%5Bword%5D%5Blike%5D=house%25")
                    .then(handleSuccess, handleError('Error when retreiving data from dictionary api.'));
    }

    // private functions

    function handleSuccess(data) {
        return data;
    }

    function handleError(error) {
        return function () {
            $log.error(error);
            return { success: false, message: error };
        };
    }

    // Expose public functions
    service.SearchOneTranslation = SearchOneTranslation;
    service.SearchTranslations = SearchTranslations;

    return service;

  })
  .config(function (ServerAPIProvider) {
    ServerAPIProvider.register('TranslationServerService');
  });
