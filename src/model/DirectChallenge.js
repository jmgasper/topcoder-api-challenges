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
    define(['ApiClient', 'model/DirectPrize'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DirectPrize'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.DirectChallenge = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.DirectPrize);
  }
}(this, function(ApiClient, DirectPrize) {
  'use strict';




  /**
   * The DirectChallenge model module.
   * @module model/DirectChallenge
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>DirectChallenge</code>.
   * @alias module:model/DirectChallenge
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>DirectChallenge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectChallenge} obj Optional instance to populate.
   * @return {module:model/DirectChallenge} The populated <code>DirectChallenge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('challengeName')) {
        obj['challengeName'] = ApiClient.convertToType(data['challengeName'], 'String');
      }
      if (data.hasOwnProperty('challengeType')) {
        obj['challengeType'] = ApiClient.convertToType(data['challengeType'], 'String');
      }
      if (data.hasOwnProperty('clientName')) {
        obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('billingName')) {
        obj['billingName'] = ApiClient.convertToType(data['billingName'], 'String');
      }
      if (data.hasOwnProperty('billingId')) {
        obj['billingId'] = ApiClient.convertToType(data['billingId'], 'Integer');
      }
      if (data.hasOwnProperty('directProjectName')) {
        obj['directProjectName'] = ApiClient.convertToType(data['directProjectName'], 'String');
      }
      if (data.hasOwnProperty('directProjectId')) {
        obj['directProjectId'] = ApiClient.convertToType(data['directProjectId'], 'Integer');
      }
      if (data.hasOwnProperty('challengeTechnologies')) {
        obj['challengeTechnologies'] = ApiClient.convertToType(data['challengeTechnologies'], ['String']);
      }
      if (data.hasOwnProperty('challengePlatforms')) {
        obj['challengePlatforms'] = ApiClient.convertToType(data['challengePlatforms'], ['String']);
      }
      if (data.hasOwnProperty('challengeStartDate')) {
        obj['challengeStartDate'] = ApiClient.convertToType(data['challengeStartDate'], 'Date');
      }
      if (data.hasOwnProperty('challengeEndDate')) {
        obj['challengeEndDate'] = ApiClient.convertToType(data['challengeEndDate'], 'Date');
      }
      if (data.hasOwnProperty('challengeStatus')) {
        obj['challengeStatus'] = ApiClient.convertToType(data['challengeStatus'], 'String');
      }
      if (data.hasOwnProperty('challengeCreator')) {
        obj['challengeCreator'] = ApiClient.convertToType(data['challengeCreator'], 'String');
      }
      if (data.hasOwnProperty('prizes')) {
        obj['prizes'] = ApiClient.convertToType(data['prizes'], [DirectPrize]);
      }
      if (data.hasOwnProperty('checkPointPrizes')) {
        obj['checkPointPrizes'] = ApiClient.convertToType(data['checkPointPrizes'], [DirectPrize]);
      }
      if (data.hasOwnProperty('totalPrize')) {
        obj['totalPrize'] = ApiClient.convertToType(data['totalPrize'], 'Number');
      }
      if (data.hasOwnProperty('drPoints')) {
        obj['drPoints'] = ApiClient.convertToType(data['drPoints'], 'Number');
      }
      if (data.hasOwnProperty('reliabilityBonus')) {
        obj['reliabilityBonus'] = ApiClient.convertToType(data['reliabilityBonus'], 'Number');
      }
      if (data.hasOwnProperty('challengeFee')) {
        obj['challengeFee'] = ApiClient.convertToType(data['challengeFee'], 'Number');
      }
      if (data.hasOwnProperty('reviewCost')) {
        obj['reviewCost'] = ApiClient.convertToType(data['reviewCost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the challenge id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} challengeName
   */
  exports.prototype['challengeName'] = undefined;
  /**
   * @member {String} challengeType
   */
  exports.prototype['challengeType'] = undefined;
  /**
   * @member {String} clientName
   */
  exports.prototype['clientName'] = undefined;
  /**
   * @member {Integer} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} billingName
   */
  exports.prototype['billingName'] = undefined;
  /**
   * @member {Integer} billingId
   */
  exports.prototype['billingId'] = undefined;
  /**
   * @member {String} directProjectName
   */
  exports.prototype['directProjectName'] = undefined;
  /**
   * @member {Integer} directProjectId
   */
  exports.prototype['directProjectId'] = undefined;
  /**
   * @member {Array.<String>} challengeTechnologies
   */
  exports.prototype['challengeTechnologies'] = undefined;
  /**
   * @member {Array.<String>} challengePlatforms
   */
  exports.prototype['challengePlatforms'] = undefined;
  /**
   * @member {Date} challengeStartDate
   */
  exports.prototype['challengeStartDate'] = undefined;
  /**
   * @member {Date} challengeEndDate
   */
  exports.prototype['challengeEndDate'] = undefined;
  /**
   * @member {String} challengeStatus
   */
  exports.prototype['challengeStatus'] = undefined;
  /**
   * @member {String} challengeCreator
   */
  exports.prototype['challengeCreator'] = undefined;
  /**
   * @member {Array.<module:model/DirectPrize>} prizes
   */
  exports.prototype['prizes'] = undefined;
  /**
   * @member {Array.<module:model/DirectPrize>} checkPointPrizes
   */
  exports.prototype['checkPointPrizes'] = undefined;
  /**
   * @member {Number} totalPrize
   */
  exports.prototype['totalPrize'] = undefined;
  /**
   * @member {Number} drPoints
   */
  exports.prototype['drPoints'] = undefined;
  /**
   * @member {Number} reliabilityBonus
   */
  exports.prototype['reliabilityBonus'] = undefined;
  /**
   * @member {Number} challengeFee
   */
  exports.prototype['challengeFee'] = undefined;
  /**
   * @member {Number} reviewCost
   */
  exports.prototype['reviewCost'] = undefined;



  return exports;
}));

