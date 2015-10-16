angular
    .module('ordabokWeb').controller('MainCtrl', ['$timeout','$scope', '$meteor', 'TranslationClientService', 'TranslationServerService', '$log', '$tooltip',
                                                  function($timeout, $scope, $meteor, TranslationClientService, TranslationServerService, $log, $tooltip) {

        /*
         *   --- Private members of the controller
         */
        var webServiceTimeout;

        /*
         * Query APIs.
         * - Translation service query..
         */
        var searchTranslations = function(httpParams,cb) {
          cb(TranslationClientService.SearchTranslations(httpParams));
        }

        var displayTranslation = function(translation) {
          $scope.selectedTranslation = translation;
        }

        /*
         * --- Public members, that are exposed to the view.
         */

        $scope.searchTipsTooltip = {
            "title": "Háir og láir stafir skipta máli.",
            "checked": false
        };

        $scope.initState = true;

         /*
          *  Display translation in the translation dialog in the view.
          */
         $scope.displayTranslation = function(translation) {
           displayTranslation(translation);
         }

        /*
         * Render all components in the view for new changes.
         * - Trigger query APIs with deiay.
         */
        $scope.renderAppViews = function(searchInput)
        {

          if(searchInput.length > 2)
          {

              $scope.initState = false;

            // Check if the timeout function is expired.
            if (webServiceTimeout) {
                $timeout.cancel(webServiceTimeout);
            }

            $scope.loadingService = true; // Set lpading status.

            // Build parameters for loopback API.
            httpParams = {
              "filter[where][word][like]": searchInput+"%",
              "filter[limit]"            : 100
            }

            webServiceTimeout = $timeout(function() {
              searchTranslations(httpParams, function(promise) {
                promise.then(
                  function(context) {   // Success

                    $scope.translations = context.data; // Set all translations.

                    $scope.loadingService = false; // Reset loader.

                    // If only 1 result select the tranlsation
                    if($scope.translations.length == 1) displayTranslation($scope.translations[0]);

                  },
                  function(reason) { // Failure
                    $log.error(reason);
                  }
                );
              });
            }, 550);

          }
        };

    }]);
