# MMM-TodoBack
MagicMirror module to fetch data from Back4App database

It was mainly developed to fetch Todo list from the Back4App database.

It fetches the data and display it in a table format.

Steps to implement:
1. Git clone the repository or download zip and extract.
2. Add the below snippet in the config.js file, in the modules array.
    
	{
    	module: 'MMM-TodoBack',
	position: 'top_left',//position of your preference
	config: {
		updateInterval: 1000 * 15,//Refresh every 15 seconds
		appID: "YOUR_B4A_APPID",//Use your appID from Back4App
		jsKey: "YOUR_B4A_JSKEY"//Use your JS_Key from Back4App
		}
	},
	
3. Edit the code in MMM-TodoBack.js based on your requirement
4. Edit the MMM-TodoBack.css file to add some styling
