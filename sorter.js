var _ = require('lodash');

module.exports = function (cfg){

	var list = [],
		resultsList = []
		nextInc = 0;

	this.addRow = function(row){
		list.push(row);
	};

	this.start = function(){

		resultsList = _.sortBy(list, 'firstName');
	};

	this.next = function(){
		if(nextInc=== resultsList.length) return false;

		nextInc++;
		return resultsList[nextInc];
	};


};

