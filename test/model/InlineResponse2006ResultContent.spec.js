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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApChallengeMicroservice);
  }
}(this, function(expect, ApChallengeMicroservice) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApChallengeMicroservice.InlineResponse2006ResultContent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2006ResultContent', function() {
    it('should create an instance of InlineResponse2006ResultContent', function() {
      // uncomment below and update the code to test InlineResponse2006ResultContent
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be.a(ApChallengeMicroservice.InlineResponse2006ResultContent);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property oldRating (base name: "oldRating")', function() {
      // uncomment below and update the code to test the property oldRating
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property newRating (base name: "newRating")', function() {
      // uncomment below and update the code to test the property newRating
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property rated (base name: "rated")', function() {
      // uncomment below and update the code to test the property rated
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property roomPlacement (base name: "roomPlacement")', function() {
      // uncomment below and update the code to test the property roomPlacement
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property division (base name: "division")', function() {
      // uncomment below and update the code to test the property division
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property finalPoints (base name: "finalPoints")', function() {
      // uncomment below and update the code to test the property finalPoints
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property divisionPlacement (base name: "divisionPlacement")', function() {
      // uncomment below and update the code to test the property divisionPlacement
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property overallRank (base name: "overallRank")', function() {
      // uncomment below and update the code to test the property overallRank
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property contestId (base name: "contestId")', function() {
      // uncomment below and update the code to test the property contestId
      //var instane = new ApChallengeMicroservice.InlineResponse2006ResultContent();
      //expect(instance).to.be();
    });

  });

}));