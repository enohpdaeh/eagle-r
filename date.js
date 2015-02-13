require('date-utils');
var now = new Date();

var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();

console.log(year + '-' + month + '-' + date);
