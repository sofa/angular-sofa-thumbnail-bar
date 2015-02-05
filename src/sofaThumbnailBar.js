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
