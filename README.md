# MMM-TodoBack

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

It was mainly developed to fetch Todo list from the Back4App database.

It fetches the data and display it in a table format.



## Using the module
Git clone the repository or download zip and extract.

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-TodoBack',
	    position: 'top_left',
            config: {
                updateInterval: 1000 * 15,//Refresh every 15 seconds
		appID: "YOUR_B4A_APPID",//Use your appID from Back4App 
		jsKey: "YOUR_B4A_JSKEY"//Use your JS_Key from Back4App
            }
        }
    ]
}
```

Edit the code in MMM-TodoBack.js based on your requirement

Edit the MMM-TodoBack.css file to add some styling


## Configuration options

| Option           | Description
|----------------- |-----------
| `updateInterval` | Interval between updates (in millis)
| `appID`          | appID from Back4App
| `jsKey`          | JS_Key from Back4App
