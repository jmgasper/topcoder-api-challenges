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
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChallengeProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChallengeProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.ChallengeFailedRegisterUsers = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.ChallengeProperties);
  }
}(this, function(ApiClient, ChallengeProperties) {
  'use strict';




  /**
   * The ChallengeFailedRegisterUsers model module.
   * @module model/ChallengeFailedRegisterUsers
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>ChallengeFailedRegisterUsers</code>.
   * @alias module:model/ChallengeFailedRegisterUsers
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ChallengeFailedRegisterUsers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeFailedRegisterUsers} obj Optional instance to populate.
   * @return {module:model/ChallengeFailedRegisterUsers} The populated <code>ChallengeFailedRegisterUsers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('handle')) {
        obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [ChallengeProperties]);
      }
    }
    return obj;
  }

  /**
   * @member {String} handle
   */
  exports.prototype['handle'] = undefined;
  /**
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {Array.<module:model/ChallengeProperties>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


