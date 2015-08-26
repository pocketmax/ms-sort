var Sorter = require('./sorter');


var dataList = [{
	id: 1,
	firstName: 'Homer',
	lastName: 'Simpson'
},{
	id: 2,
	firstName: 'Marge',
	lastName: 'Simpson'
},{
	id: 3,
	firstName: 'Bart',
	lastName: 'Simpson'
},{
	id: 4,
	firstName: 'Lisa',
	lastName: 'Simpson'
}];

console.log('init sorter');
// init sorter
var sorter = new Sorter({
//	keyField: 'contactId',   // optional
	sortField: 'firstName',
	dir: 'ASC'
});

console.log('add rows to sorter');
// add rows to sorter
for(var i = 0; i < dataList.length; i++){

	sorter.addRow(dataList[i]);

}

console.log('start sorter');
// start sorter
sorter.start();

console.log('stream sorter');
// stream sorted results
while( record = sorter.next() ){

	console.log('next()');
	console.log(record);

}



