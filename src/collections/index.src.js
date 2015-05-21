/**
 * @since 0.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 0.1.0
 */

'use strict';

/**
 * nutrientCalculator/collections singleton
 * @private-module nutrientCalculator/collections
 */
angular.module('farmbuild.core')
  .factory('collections', function (validations, $log) {
    var collections = {},
      _isDefined = validations.isDefined,
      _isArray = validations.isArray,
      _equals = validations.equals;

    function _byProperty(collection, property, value) {
      if(!_isArray(collection)) {
        return undefined;
      }
      if(!_isDefined(property)) {
        return undefined;
      }
      if(!_isDefined(value)) {
        return undefined;
      }

      var i = 0;
      for(i; i < collection.length; i++) {
        var item = collection[i];

        if(!item.hasOwnProperty(property)) {
          continue;
        }

        if(_equals(item[property], value)) {
          return item;
        }

      }
      return undefined;
    }

    function _add(collection, item, index) {
      if (_isDefined(index)) {
        collection.splice(index, 0, item)
      } else {
        collection.push(item);
      }
      return collection;
    };

    function _isEmpty(collections){
      return collections.length === 0;
    };

    function _count(collection) {
      if(!angular.isArray(collection)) {
        return -1;
      }
      return collection.length;
    };

    function _at(collection, index){
      return collection[index];
    };

    function _removeAt(collection, index) {
      if (!angular.isArray(collection)) {
        $log.warn('collection is not an array, returning as it is: %j', collection);
        return collection;
      }

      if (!_isDefined(index) || index < 0 || index > collection.length - 1) {
        $log.warn('index is out of range for the array, index: %s, collection.length: %s', index, collection.length);
        return collection;
      }

      collection.splice(index, 1);

      return collection;
    };


    function _remove(collections, item) {
      $log.info('removing item %s ', item);

      if (!_isDefined(item)) {
        return undefined;
      }
      angular.forEach(collections, function (i, index) {
        if (angular.equals(i, item)) {
          _removeAt(collections, index);
        }
      });

      return collections;
    };

    function _first(collection) {
      return collection[0];
    };

    function _last(collection) {
      var length = _count(collection);
      return collection[length - 1];
    };

    collections = {
      add: _add,
      at: _at,
      size: _count,
      byProperty:_byProperty,
      removeAt: _removeAt,
      remove: _remove,
      first: _first,
      last: _last,
      isEmpty: _isEmpty
    };

    return collections;
  });