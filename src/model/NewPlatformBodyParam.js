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
    define(['ApiClient', 'model/Platform'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Platform'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.NewPlatformBodyParam = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.Platform);
  }
}(this, function(ApiClient, Platform) {
  'use strict';




  /**
   * The NewPlatformBodyParam model module.
   * @module model/NewPlatformBodyParam
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>NewPlatformBodyParam</code>.
   * @alias module:model/NewPlatformBodyParam
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewPlatformBodyParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewPlatformBodyParam} obj Optional instance to populate.
   * @return {module:model/NewPlatformBodyParam} The populated <code>NewPlatformBodyParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('param')) {
        obj['param'] = Platform.constructFromObject(data['param']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Platform} param
   */
  exports.prototype['param'] = undefined;



  return exports;
}));

