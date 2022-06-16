/* global Module */

/* Magic Mirror
 * Module: MMM-TodoBack
 *
 * By 
 * MIT Licensed.
 */

Module.register("MMM-TodoBack", {
	defaults: {
		updateInterval: 1000*60*15,//every 15 mins
		appID: "",
		jsKey: "",
		pURL: "https://parseapi.back4app.com/"
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function () {
		//Flag for check if module is loaded
		//this.loaded = false;
		//this.sendSocketNotification("REQUEST_DATA", this.config);
		setInterval(() => {this.updateDom()}, this.config.updateInterval);
	},

	getDom: function () {

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		
		//table creation
		var tbl = document.createElement("table");

		//table header
		var tHead = document.createElement("thead");
		var hRow1 = document.createElement("tr");
		var mainCell = document.createElement("th");
		var mainText = document.createTextNode("TO-DO List");
		mainCell.appendChild(mainText);
		mainCell.setAttribute("colspan","2");
		hRow1.appendChild(mainCell);
		tHead.appendChild(hRow1);
		var hRow2 = document.createElement("tr");
		var hCell1 = document.createElement("td");
		var hCell1Text = document.createTextNode("Task");
		hCell1.appendChild(hCell1Text);
		hRow2.appendChild(hCell1);
		var hCell2 = document.createElement("td");
		var hCell2Text = document.createTextNode("Deadline");
		hCell2.appendChild(hCell2Text);
		hRow2.appendChild(hCell2);
		tHead.appendChild(hRow2);
		tbl.appendChild(tHead);
		wrapper.appendChild(tbl);
		tbl.setAttribute("cellpadding","6");
		tbl.setAttribute("cellspacing","6");
		var tBody = document.createElement("tbody");

		Parse.initialize(this.config.appID, this.config.jsKey);//APP_ID,JS_KEY
		Parse.serverURL = this.config.pURL;

		(async () => {
			const todo = Parse.Object.extend('todo');
			const query = new Parse.Query(todo);
			query.ascending('deadline');
			query.limit(8);
			try {
				const results = await query.find();
				for (const object of results) {
					var title = object.get('task');
					var deadline = object.get('deadline');
					var priority = object.get('priority');
					console.log(title);
					console.log(deadline);
					console.log(priority);
					var ddline = ""+deadline;
					console.log(ddline.slice(0,15));
					var bRow = document.createElement("tr");
					var titleCell = document.createElement("td");
					var font1 = document.createElement("font");
					var titleText = document.createTextNode(title);
					font1.appendChild(titleText);
					if(priority==1){
						font1.setAttribute("color","red");
					}else if(priority==2){
						font1.setAttribute("color","yellow");
					}else{
						font1.setAttribute("color","green");
					}
					titleCell.appendChild(font1);
					bRow.appendChild(titleCell);
					var deadCell = document.createElement("td");
					var font2 = document.createElement("font");
					var deadText = document.createTextNode(ddline.slice(0,15));
					font2.appendChild(deadText);
					if(priority==1){
						font2.setAttribute("color","red");
					}else if(priority==2){
						font2.setAttribute("color","yellow");
					}else{
						font2.setAttribute("color","green");
					}
					font2.appendChild(deadText);
					deadCell.appendChild(font2);
					bRow.appendChild(deadCell);
					tBody.appendChild(bRow);
				}
				tbl.appendChild(tBody);
				wrapper.appendChild(tbl);
			} catch (error) {
				console.error('Error while fetching TodoTest', error);
				wrapper.innerHTML = "Loading...";
				wrapper.className = "dimmed light small";
				return wrapper;
			}
		})();
		return wrapper;
	},

	getScripts: function () {
		return [
			'https://npmcdn.com/parse/dist/parse.min.js'
		];
	},

	getStyles: function () {
		return [
			"MMM-TodoBack.css",
		];
	},

	getTranslations: function () {
		return false;
	},

	//socketNotificationReceived from helper
	// socketNotificationReceived: function (notification, payload) {
	// 	if (notification === "MMM-TodoBack-NOTIFICATION_TEST") {
	// 		this.dataNotification = payload;
	// 		this.updateDom();
	// 	}
	// },
});
