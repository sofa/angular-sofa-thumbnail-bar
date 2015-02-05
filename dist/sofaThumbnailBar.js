/**
 * angular-sofa-thumbnail-bar - v0.1.0 - Thu Feb 05 2015 11:41:59 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
angular.module('sofa-thumbnail-bar.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-thumbnail-bar.tpl.html',
    '<ul class="sofa-thumbnail-bar">\n' +
    '    <li ng-class="$index === selectedImageIndex ? \'sofa-thumbnail-bar__item--active\' : \'sofa-thumbnail-bar__item\'"\n' +
    '        ng-click="setSelectedImage($index)"\n' +
    '        ng-repeat="image in images">\n' +
    '        <img class="sofa-thumbnail-bar__image" ng-src="{{image.thumbnail}}" alt=""/>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '');
}]);

angular.module('sofa.thumbnailBar', ['sofa-thumbnail-bar.tpl.html'])

    .directive('sofaThumbnailBar', function () {

        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: {
                images: '=',
                onChange: '&'
            },
            templateUrl: 'sofa-thumbnail-bar.tpl.html',
            link: function ($scope) {

                $scope.setSelectedImage = function (index) {
                    $scope.selectedImageIndex = index;

                    $scope.onChange({image: $scope.images[index].image});
                };

                $scope.$watch('images', function (newValue) {
                    // reset the image index when images ref changes
                    if (angular.isArray(newValue)) {
                        $scope.setSelectedImage(0);
                    }
                });
            }
        };
    });
}(sofa, document));
