/*
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
var expect = require("chai").expect;
var inputTypes = require("../index.js");
var platforms = require("vui-platforms");
describe("vui-input-types", function() {
  describe("isBuiltInInputType", function() {
    var app = {};
    inputTypes.addInputTypesToApp(app);

    it("verify that the check for built in types is working", function() {
      expect(app.isBuiltInInputType("NUMBER", platforms.ALEXA)).to.equal(true);
      expect(app.isBuiltInInputType("BLAHBLAHBLAH", platforms.ALEXA)).to.equal(false);
    });
  });

  describe("isInputType", function() {
    var app = {};
    inputTypes.addInputTypesToApp(app);

    app.addCustomInputType("fruit",
      {values: [
        {
          text: "apple"
        },
        {
          text: "golden delicious",
          mapTo: "apple"
        },
        {
          text: "banana"
        }
      ]}
    );

    it("verify that the check for any input type is working", function() {
      expect(app.isInputType("fruit", platforms.ALEXA)).to.equal(true);
      expect(app.isInputType("meat", platforms.ALEXA)).to.equal(false);
      expect(app.isInputType("NUMBER", platforms.ALEXA)).to.equal(true);
    });
  });

});
