# vui-input-types

npm package that provides ability to add input type descriptions functionality to any javascript object.

# Repository
This module as well as related vui modules can be found here:
https://github.com/RationalAnimal

# Installation

```shell
	npm install vui-input-types --save
```
or, if you don't want to run unit tests on it:

```shell
	npm install vui-input-types --save --production
```

# Summary

This project provides npm package to add input type descriptions functionality to any javascript object
in a platform dependent manner.
It uses vui-custom-values-with-synonyms module for custom input type functionality.
While the primary purpose is to add this functionality to other VUI related objects, this is NOT necessary and is purely driven by usefulness.
These functions can be added to ANY object and they don't require that the target class has anything to do with VUI.

# Examples

````javascript
var inputs = require("vui-input-types");
var platforms = require("vui-platforms");

var app = {};
inputs.addInputTypesToApp(app);
console.log(app.isBuiltInInputType("NUMBER", platforms.ALEXA));
console.log(app.isBuiltInInputType("BLAHBLAHBLAH", platforms.ALEXA));
````

will produce:

````javascript
true
false
````

and

````javascript
var inputs = require("vui-input-types");
var platforms = require("vui-platforms");

var app = {};
inputs.addInputTypesToApp(app);
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

console.log(app.isInputType("fruit", platforms.ALEXA));
console.log(app.isInputType("meat", platforms.ALEXA));
````

will produce:

````javascript
true
false
````
