var value = 42; 

if(value >= 53){
	value = 42;
} else {
	value -= 13;
	console.log(value);
}


value = value + "11";
console.log(value);

var array = [];

for(var i = 0; i < value.length; i++){
	array[i] = value.charAt([i]);
}
console.log(array);

array.pop();
array.shift();

console.log(array);

var kittyFooFoo = "";

for (var i = array.length - 1; i >= 0; i--) {
		kittyFooFoo += array[i];
}

console.log(kittyFooFoo);

parseInt(value, kittyFooFoo);

console.log(value);
console.log(kittyFooFoo);


value = value + kittyFooFoo;

if(value < 60) {
	value = 14;
}else if(value = 2930) {
	value = 27;
}else {
	value = 2;
}

console.log(value);

var i=10;

while (i>0){
	value++;
	i--;
}

console.log(value);

function something(val) {
	val = val.toString();
	if(val.length > 1) {
		val = val.slice(1,2);
		return val;
	}else {
		return val;
	}	

}
//What happened here?


value = something(value);

console.log(value);





