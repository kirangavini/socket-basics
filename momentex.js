var moment = require('moment');
var now = moment();




console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = 1486586169928;
var timestampMomemt = moment.utc(timestamp);

console.log(timestampMomemt.local().format('h:mm a')); //11.06 am



// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY,HH:mma')); 
// console.log(now.format('mm')); // 6:45 pm





