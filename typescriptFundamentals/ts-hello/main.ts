function log(message){
    console.log(message);
}

var message = 'Hello world';

log(message);

let aNumber = 2; //Used for scope; lets this number only to be used within it's scope
let a: number; //Used to define what type of variable this is
a = 1;
// This give you a compilation error: a = true;
// This give you a compilation error: a = 'a';
let exampleArray: number[] = [1,2,3]; //Example array

/* Enum is kind of like a container of values. Intiially, the first value is 0, 
(if not declared), and every successive value increments from that. */
enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red


function doSomething(){
    for (var i = 0; i < 5; i++){
        console.log(i);
    }

    console.log('Finally ' i);
}

doSomething();

//Type assertion example
let letterMessage = 'abc';
let endsWithC = (<string>letterMessage).endsWith('c');
//Or you can do this
let alertnateWay = (letterMessage as string).endsWith('c)');

//Arrow functions
let doLogger = (letterMessage) => console.log(letterMessage);

//Another example
