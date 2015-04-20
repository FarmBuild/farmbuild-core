/**
 * @since 1.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 1.0.0
 */

'use strict';

/**
 * UserProfiles class
 * @module core
 */
angular.module('farmbuild.core')
  .factory('UserProfiles', function ($window) {
    var UserProfiles = {};

    UserProfiles.isAvailable = function() {
      return (typeof ga !== 'undefined');
    }

    $window.farmbuild.core.UserProfiles = UserProfiles;
    return UserProfiles;

  });
