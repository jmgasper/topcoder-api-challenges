/**
 * ap-challenge-microservice
 * Services that provide access and interaction with all sorts of challenges, including design, dev, single round matches, and marathon matches. 
 *
 * OpenAPI spec version: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NormalResponseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NormalResponseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.NormalResponse = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.NormalResponseResult);
  }
}(this, function(ApiClient, NormalResponseResult) {
  'use strict';




  /**
   * The NormalResponse model module.
   * @module model/NormalResponse
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>NormalResponse</code>.
   * @alias module:model/NormalResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NormalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NormalResponse} obj Optional instance to populate.
   * @return {module:model/NormalResponse} The populated <code>NormalResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = NormalResponseResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * unique id identifying the request
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/NormalResponseResult} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));

