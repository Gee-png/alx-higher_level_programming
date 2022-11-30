#!/usr/bin/node
const processValues = process.argv.length;

if(processValues === 0) {
	console.log('No argument');
}
if (processValues ===  1) {
	console.log('Argument found');
}else{
	console.log('Arguments found');
}
