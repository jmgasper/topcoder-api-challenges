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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.AddResourceBody = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddResourceBody model module.
   * @module model/AddResourceBody
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>AddResourceBody</code>.
   * @alias module:model/AddResourceBody
   * @class
   * @param roleId {Integer} 
   * @param resourceUserId {Integer} 
   */
  var exports = function(roleId, resourceUserId) {
    var _this = this;

    _this['roleId'] = roleId;
    _this['resourceUserId'] = resourceUserId;





  };

  /**
   * Constructs a <code>AddResourceBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddResourceBody} obj Optional instance to populate.
   * @return {module:model/AddResourceBody} The populated <code>AddResourceBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('roleId')) {
        obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Integer');
      }
      if (data.hasOwnProperty('resourceUserId')) {
        obj['resourceUserId'] = ApiClient.convertToType(data['resourceUserId'], 'Integer');
      }
      if (data.hasOwnProperty('phaseId')) {
        obj['phaseId'] = ApiClient.convertToType(data['phaseId'], 'Integer');
      }
      if (data.hasOwnProperty('addNotification')) {
        obj['addNotification'] = ApiClient.convertToType(data['addNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('addForumWatch')) {
        obj['addForumWatch'] = ApiClient.convertToType(data['addForumWatch'], 'Boolean');
      }
      if (data.hasOwnProperty('isStudio')) {
        obj['isStudio'] = ApiClient.convertToType(data['isStudio'], 'Boolean');
      }
      if (data.hasOwnProperty('checkTerm')) {
        obj['checkTerm'] = ApiClient.convertToType(data['checkTerm'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} roleId
   */
  exports.prototype['roleId'] = undefined;
  /**
   * @member {Integer} resourceUserId
   */
  exports.prototype['resourceUserId'] = undefined;
  /**
   * @member {Integer} phaseId
   */
  exports.prototype['phaseId'] = undefined;
  /**
   * @member {Boolean} addNotification
   */
  exports.prototype['addNotification'] = undefined;
  /**
   * @member {Boolean} addForumWatch
   */
  exports.prototype['addForumWatch'] = undefined;
  /**
   * @member {Boolean} isStudio
   */
  exports.prototype['isStudio'] = undefined;
  /**
   * @member {Boolean} checkTerm
   */
  exports.prototype['checkTerm'] = undefined;



  return exports;
}));


