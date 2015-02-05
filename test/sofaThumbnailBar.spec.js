'use strict';

describe('sofa.thumbnailBar', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.thumbnailBar'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should display the images', function () {
        $rootScope.images = [
            {thumbnail: '1.png'},
            {thumbnail: '2.png'} 
        ];
        element = $compile('<sofa-thumbnail-bar images="images"></sofa-thumbnail-bar>')($rootScope);
        $rootScope.$digest();
        var imgs = element.find('li').find('img');
        expect(imgs[0].src).toBeDefined();
        expect(imgs[0].src).toMatch(/1\.png$/);
        expect(imgs[1].src).toBeDefined();
        expect(imgs[1].src).toMatch(/2\.png$/);
    });

    it('should call onChange when an image is clicked', function () {
        $rootScope.images = [
            {thumbnail: '1.png'},
            {thumbnail: '2.png'} 
        ];
        $rootScope.onChange = function(arg) {
            expect(arg.image.thumbnail).toEqual('1.png');
        };
        element = $compile('<sofa-thumbnail-bar onChange="onChange" images="images"></sofa-thumbnail-bar>')($rootScope);
        $rootScope.$digest();
        element.find('li').triggerHandler('click');
    });
});
