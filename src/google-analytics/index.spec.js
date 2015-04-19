'use strict';

describe('farmbuild.core module', function() {

  // instantiate service
  var UserProfile;

  beforeEach(module('farmbuild.core'));

  beforeEach(inject(function (_UserProfile_) {
    UserProfile = _UserProfile_;
  }));

  describe('Use the API for the 1st time with the new farm data', function(){
    it('UserProfile should be defined', inject(function() {
      expect(UserProfile).toBeDefined();
    }));

    it('UserProfile.create should create the default farmdata with name, geometry and area', inject(function() {
      var data = UserProfile.create();

      expect(data).toBeDefined();
      expect(data.geometry).toBeDefined();
      expect(data.geometry.type).toBeDefined();
      expect(data.geometry.crs).toBeDefined();
      expect(data.geometry.coordinates).toBeDefined();
      expect(data.area).toBeDefined();
      expect(data.name).toEqual(UserProfile.defaultValues().name);
    }));

    it('UserProfile.create should create the default farmdata with the specifid name', inject(function() {
      var name = "Susan's fram",
        data = UserProfile.create(name);
      expect(data.name).toEqual(name);
    }));
  });
});
