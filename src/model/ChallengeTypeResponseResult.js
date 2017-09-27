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
    define(['ApiClient', 'model/ChallengeTypeResponseResultContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChallengeTypeResponseResultContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.ChallengeTypeResponseResult = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.ChallengeTypeResponseResultContent);
  }
}(this, function(ApiClient, ChallengeTypeResponseResultContent) {
  'use strict';




  /**
   * The ChallengeTypeResponseResult model module.
   * @module model/ChallengeTypeResponseResult
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>ChallengeTypeResponseResult</code>.
   * @alias module:model/ChallengeTypeResponseResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ChallengeTypeResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeTypeResponseResult} obj Optional instance to populate.
   * @return {module:model/ChallengeTypeResponseResult} The populated <code>ChallengeTypeResponseResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [ChallengeTypeResponseResultContent]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/ChallengeTypeResponseResultContent>} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));

