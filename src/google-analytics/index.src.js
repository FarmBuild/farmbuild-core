/**
 * @since 1.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 1.0.0
 */

'use strict';

/**
 * googleAnalytics class
 * @module core
 */
angular.module('farmbuild.core')
  .factory('googleAnalytics',
    function ($log, validations) {
        var googleAnalytics = {},
            _isDefined = validations.isDefined,
          trackerName = 'farmbuildTracker';

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-53478356-1', 'auto', {'name': name});
        ga('send', 'pageview');



        googleAnalytics.track = function(apiName, clientName) {
            if(!_isDefined(apiName)) {
                $log.error('googleAnalytics.track apiName must be provided.' +
                ' Please specify you API name.');
                return;
            }
            if(!_isDefined(clientName)) {
                $log.error('googleAnalytics.track clientName must be provided.' +
                ' Please specify the registered client name.');
                return;
            }

            $log.info('googleAnalytics.track apiName: %s, clientName: %s', apiName, clientName);

            ga('send', 'pageview', {
                'dimension4':  apiName,
                'dimension5': clientName
            });
        }

        return googleAnalytics;

  });
