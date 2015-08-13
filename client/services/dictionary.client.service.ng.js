angular.module('ordabokWeb')
  .service('TranslationClientService', function ($http, $log, CONFIG) {

    var service = {};

    // public functions

    function SearchOneTranslation(searchParams) {
        return $http.get(CONFIG.APIURLBASE+"/translations/findOne", {params: searchParams })
                     .then(handleSuccess, handleError('Error when retreiving data from dictionary api.'));
    }

    function SearchTranslations(searchParams) {
        return $http.get(CONFIG.APIURLBASE+"/translations", {params: searchParams })
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

  });
