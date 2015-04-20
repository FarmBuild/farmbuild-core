'use strict';

describe('farmbuild.core module', function() {

  // instantiate service
  var UserProfile;

  beforeEach(module('farmbuild.core'));

  beforeEach(inject(function (_UserProfile_) {
    UserProfile = _UserProfile_;
  }));


});
