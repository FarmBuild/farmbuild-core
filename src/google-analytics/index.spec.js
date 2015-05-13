'use strict';

describe('farmbuild.core module', function() {


    // instantiate service
    var googleAnalytics, $log;

    beforeEach(module('farmbuild.core', function($provide) {
        $provide.value('$log', console);
    }));

    beforeEach(module('farmbuild.core'));

    beforeEach(inject(function (_googleAnalytics_,_$log_) {
        googleAnalytics = _googleAnalytics_;
        $log = _$log_;
    }));

    describe('Track the calculate ', function(){
        it('googleAnalytics should be defined', inject(function() {
            expect(googleAnalytics).toBeDefined();
        }));


        it('googleAnalytics.track should create a track', inject(function() {
            googleAnalytics.track('farmbuild-dairy-nutrient-calculator', 'AgSmart')
        }));
    });


});
