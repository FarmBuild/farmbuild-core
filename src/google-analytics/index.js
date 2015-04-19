/**
 * @since 0.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 1.0.0
 */

'use strict';

/**
 * GoogleAnalytics class
 * @module core
 */
angular.module('farmbuild.farmdata')
  .factory('GoogleAnalytics', function ($window) {
    var GoogleAnalytics = {};

    GoogleAnalytics.isAvailable = function() {
      return (typeof ga !== 'undefined');
    }

    $window.farmbuild.core.GoogleAnalytics = GoogleAnalytics;
    return GoogleAnalytics;

  });
