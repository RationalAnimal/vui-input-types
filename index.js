/*
@author Ilya Shubentsov

MIT License

Copyright (c) 2017 Ilya Shubentsov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
'use strict'
var synonyms = require("vui-custom-values-with-synonyms");
var platforms = require("vui-platforms");
var inputs = {};

/**
 * Call this function to add vui-input-types functionality to
 * any object.  This is really meant to be used on objects such as app from
 * alexa-app npm module.
 * @param {object} app - The object to which the functionality should be added.
 */
inputs.addInputTypesToApp = function(app){
  if(app.inputTypesAlreadyAdded == true){
    return;
  }
  app.inputTypesAlreadyAdded = true;

  synonyms.addSynonymsToApp(app);

  /**
  * Call to check if the input type (a.k.a. "slot type" on Alexa) exists.
  * Either built in or custom types will satisfy the check.
  * @param {string} type - name of the type to check
  * @param {string} platform - platform for which to perform the check
  * @returns {boolean} - true if the type is built in, false otherwise.
  */
  app.isInputType = function(type, platform){
    // Check first for the "built in" types
    if(app.isBuiltInInputType(type, platform) == true){
      return true;
    }
    // Now Check among the custom types
    if(app.isCustomInputType(type) == true){
      return true;
    }
    return false;
  }

  /**
  * Call to check if the input type (a.k.a. "slot type" on Alexa) is a built in
  * input type.
  * @param {string} type - name of the type to check
  * @param {string} platform - platform for which to perform the check
  * @returns {boolean} - true if the type is built in, false otherwise.
  */
  app.isBuiltInInputType = function(type, platform){
    for(var i = 0; i < platforms.inputTypes[platform].length; i++){
      var inputType = platforms.inputTypes[platform][i];
      if(inputType.XPlatformInputType == type){
        return true;
      }
    }
    return false;
  }

};

module.exports = inputs;
