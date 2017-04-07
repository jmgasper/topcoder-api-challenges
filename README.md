# ap_challenge_microservice

ApChallengeMicroservice - JavaScript client for ap_challenge_microservice
Services that provide access and interaction with all sorts of challenges, including design, dev, single round matches, and marathon matches. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.5
- Package version: 1.0.5
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ap_challenge_microservice --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/ap_challenge_microservice
then install it via:

```shell
    npm install YOUR_USERNAME/ap_challenge_microservice --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApChallengeMicroservice = require('ap_challenge_microservice');

var defaultClient = ApChallengeMicroservice.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new ApChallengeMicroservice.DefaultApi()

var id = "id_example"; // {String} the id of the draft challenge


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateChallenge(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.topcoder.com/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApChallengeMicroservice.DefaultApi* | [**activateChallenge**](docs/DefaultApi.md#activateChallenge) | **POST** /challenges/{id}/activate | 
*ApChallengeMicroservice.DefaultApi* | [**cancelPrivateContest**](docs/DefaultApi.md#cancelPrivateContest) | **POST** /challenges/{id}/cancel | 
*ApChallengeMicroservice.DefaultApi* | [**challengeResultsGet**](docs/DefaultApi.md#challengeResultsGet) | **GET** /challengeResults | 
*ApChallengeMicroservice.DefaultApi* | [**challengesGet**](docs/DefaultApi.md#challengesGet) | **GET** /challenges | 
*ApChallengeMicroservice.DefaultApi* | [**challengesIdResourcesDelete**](docs/DefaultApi.md#challengesIdResourcesDelete) | **DELETE** /challenges/{id}/resources | 
*ApChallengeMicroservice.DefaultApi* | [**challengesIdResourcesGet**](docs/DefaultApi.md#challengesIdResourcesGet) | **GET** /challenges/{id}/resources | 
*ApChallengeMicroservice.DefaultApi* | [**challengesIdResourcesPost**](docs/DefaultApi.md#challengesIdResourcesPost) | **POST** /challenges/{id}/resources | 
*ApChallengeMicroservice.DefaultApi* | [**closePrivateContest**](docs/DefaultApi.md#closePrivateContest) | **POST** /challenges/{id}/close | 
*ApChallengeMicroservice.DefaultApi* | [**marathonMatcheResultsGet**](docs/DefaultApi.md#marathonMatcheResultsGet) | **GET** /marathonMatcheResults | 
*ApChallengeMicroservice.DefaultApi* | [**marathonMatchesGet**](docs/DefaultApi.md#marathonMatchesGet) | **GET** /marathonMatches | 
*ApChallengeMicroservice.DefaultApi* | [**membersHandleChallengesGet**](docs/DefaultApi.md#membersHandleChallengesGet) | **GET** /members/{handle}/challenges | 
*ApChallengeMicroservice.DefaultApi* | [**membersHandleMmsGet**](docs/DefaultApi.md#membersHandleMmsGet) | **GET** /members/{handle}/mms | 
*ApChallengeMicroservice.DefaultApi* | [**membersHandleSrmsGet**](docs/DefaultApi.md#membersHandleSrmsGet) | **GET** /members/{handle}/srms | 
*ApChallengeMicroservice.DefaultApi* | [**phasesGet**](docs/DefaultApi.md#phasesGet) | **GET** /phases | 
*ApChallengeMicroservice.DefaultApi* | [**platformsGet**](docs/DefaultApi.md#platformsGet) | **GET** /platforms | 
*ApChallengeMicroservice.DefaultApi* | [**platformsIdDelete**](docs/DefaultApi.md#platformsIdDelete) | **DELETE** /platforms/{id} | 
*ApChallengeMicroservice.DefaultApi* | [**platformsIdPatch**](docs/DefaultApi.md#platformsIdPatch) | **PATCH** /platforms/{id} | 
*ApChallengeMicroservice.DefaultApi* | [**platformsPost**](docs/DefaultApi.md#platformsPost) | **POST** /platforms | 
*ApChallengeMicroservice.DefaultApi* | [**saveDraftContest**](docs/DefaultApi.md#saveDraftContest) | **POST** /challenges | 
*ApChallengeMicroservice.DefaultApi* | [**srmResultsGet**](docs/DefaultApi.md#srmResultsGet) | **GET** /srmResults | 
*ApChallengeMicroservice.DefaultApi* | [**srmsGet**](docs/DefaultApi.md#srmsGet) | **GET** /srms | 
*ApChallengeMicroservice.DefaultApi* | [**technologiesGet**](docs/DefaultApi.md#technologiesGet) | **GET** /technologies | 
*ApChallengeMicroservice.DefaultApi* | [**technologiesIdDelete**](docs/DefaultApi.md#technologiesIdDelete) | **DELETE** /technologies/{id} | 
*ApChallengeMicroservice.DefaultApi* | [**technologiesIdPatch**](docs/DefaultApi.md#technologiesIdPatch) | **PATCH** /technologies/{id} | 
*ApChallengeMicroservice.DefaultApi* | [**technologiesPost**](docs/DefaultApi.md#technologiesPost) | **POST** /technologies | 


## Documentation for Models

 - [ApChallengeMicroservice.AddResourceBody](docs/AddResourceBody.md)
 - [ApChallengeMicroservice.Challenge](docs/Challenge.md)
 - [ApChallengeMicroservice.ChallengeFailedRegisterUsers](docs/ChallengeFailedRegisterUsers.md)
 - [ApChallengeMicroservice.ChallengeProperties](docs/ChallengeProperties.md)
 - [ApChallengeMicroservice.ChallengeResponse](docs/ChallengeResponse.md)
 - [ApChallengeMicroservice.ChallengeResponseResult](docs/ChallengeResponseResult.md)
 - [ApChallengeMicroservice.ChallengeTechnologies](docs/ChallengeTechnologies.md)
 - [ApChallengeMicroservice.ErrorModel](docs/ErrorModel.md)
 - [ApChallengeMicroservice.ErrorModelResult](docs/ErrorModelResult.md)
 - [ApChallengeMicroservice.GetResourceResponse](docs/GetResourceResponse.md)
 - [ApChallengeMicroservice.GetResourceResult](docs/GetResourceResult.md)
 - [ApChallengeMicroservice.InlineResponse200](docs/InlineResponse200.md)
 - [ApChallengeMicroservice.InlineResponse2001](docs/InlineResponse2001.md)
 - [ApChallengeMicroservice.InlineResponse2001Result](docs/InlineResponse2001Result.md)
 - [ApChallengeMicroservice.InlineResponse2001ResultContent](docs/InlineResponse2001ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2002](docs/InlineResponse2002.md)
 - [ApChallengeMicroservice.InlineResponse2002Result](docs/InlineResponse2002Result.md)
 - [ApChallengeMicroservice.InlineResponse2002ResultContent](docs/InlineResponse2002ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2003](docs/InlineResponse2003.md)
 - [ApChallengeMicroservice.InlineResponse2003Result](docs/InlineResponse2003Result.md)
 - [ApChallengeMicroservice.InlineResponse2003ResultContent](docs/InlineResponse2003ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2004](docs/InlineResponse2004.md)
 - [ApChallengeMicroservice.InlineResponse2004Result](docs/InlineResponse2004Result.md)
 - [ApChallengeMicroservice.InlineResponse2004ResultContent](docs/InlineResponse2004ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2005](docs/InlineResponse2005.md)
 - [ApChallengeMicroservice.InlineResponse2005Result](docs/InlineResponse2005Result.md)
 - [ApChallengeMicroservice.InlineResponse2005ResultContent](docs/InlineResponse2005ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2006](docs/InlineResponse2006.md)
 - [ApChallengeMicroservice.InlineResponse2006Result](docs/InlineResponse2006Result.md)
 - [ApChallengeMicroservice.InlineResponse2006ResultContent](docs/InlineResponse2006ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2007](docs/InlineResponse2007.md)
 - [ApChallengeMicroservice.InlineResponse2007Result](docs/InlineResponse2007Result.md)
 - [ApChallengeMicroservice.InlineResponse2007ResultContent](docs/InlineResponse2007ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2007ResultUserDetails](docs/InlineResponse2007ResultUserDetails.md)
 - [ApChallengeMicroservice.InlineResponse2008](docs/InlineResponse2008.md)
 - [ApChallengeMicroservice.InlineResponse2008Result](docs/InlineResponse2008Result.md)
 - [ApChallengeMicroservice.InlineResponse2008ResultContent](docs/InlineResponse2008ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2008ResultRounds](docs/InlineResponse2008ResultRounds.md)
 - [ApChallengeMicroservice.InlineResponse2009](docs/InlineResponse2009.md)
 - [ApChallengeMicroservice.InlineResponse2009Result](docs/InlineResponse2009Result.md)
 - [ApChallengeMicroservice.InlineResponse2009ResultContent](docs/InlineResponse2009ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse2009ResultRounds](docs/InlineResponse2009ResultRounds.md)
 - [ApChallengeMicroservice.InlineResponse2009ResultUserMMDetails](docs/InlineResponse2009ResultUserMMDetails.md)
 - [ApChallengeMicroservice.InlineResponse200Result](docs/InlineResponse200Result.md)
 - [ApChallengeMicroservice.InlineResponse200ResultContent](docs/InlineResponse200ResultContent.md)
 - [ApChallengeMicroservice.InlineResponse200ResultSubmissions](docs/InlineResponse200ResultSubmissions.md)
 - [ApChallengeMicroservice.ManageResourceResponse](docs/ManageResourceResponse.md)
 - [ApChallengeMicroservice.ManageResourceResult](docs/ManageResourceResult.md)
 - [ApChallengeMicroservice.NewChallengeBodyParam](docs/NewChallengeBodyParam.md)
 - [ApChallengeMicroservice.NewPlatformBodyParam](docs/NewPlatformBodyParam.md)
 - [ApChallengeMicroservice.NewTechnologyBodyParam](docs/NewTechnologyBodyParam.md)
 - [ApChallengeMicroservice.NormalResponse](docs/NormalResponse.md)
 - [ApChallengeMicroservice.NormalResponseResult](docs/NormalResponseResult.md)
 - [ApChallengeMicroservice.NullResponse](docs/NullResponse.md)
 - [ApChallengeMicroservice.NullResponseResult](docs/NullResponseResult.md)
 - [ApChallengeMicroservice.Platform](docs/Platform.md)
 - [ApChallengeMicroservice.PlatformArrayResponse](docs/PlatformArrayResponse.md)
 - [ApChallengeMicroservice.PlatformArrayResponseResult](docs/PlatformArrayResponseResult.md)
 - [ApChallengeMicroservice.PlatformResponse](docs/PlatformResponse.md)
 - [ApChallengeMicroservice.PlatformResponseResult](docs/PlatformResponseResult.md)
 - [ApChallengeMicroservice.RemoveResourceBody](docs/RemoveResourceBody.md)
 - [ApChallengeMicroservice.ResponseMetadata](docs/ResponseMetadata.md)
 - [ApChallengeMicroservice.Status](docs/Status.md)
 - [ApChallengeMicroservice.Technology](docs/Technology.md)
 - [ApChallengeMicroservice.TechnologyArrayResponse](docs/TechnologyArrayResponse.md)
 - [ApChallengeMicroservice.TechnologyArrayResponseResult](docs/TechnologyArrayResponseResult.md)
 - [ApChallengeMicroservice.TechnologyResponse](docs/TechnologyResponse.md)
 - [ApChallengeMicroservice.TechnologyResponseResult](docs/TechnologyResponseResult.md)
 - [ApChallengeMicroservice.ValidationErrorModel](docs/ValidationErrorModel.md)


## Documentation for Authorization


### bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
