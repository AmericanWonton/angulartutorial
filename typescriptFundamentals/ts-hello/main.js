function log(message) {
    console.log(message);
}
var message = 'Hello world';
log(message);
var aNumber = 2; //Used for scope; lets this number only to be used within it's scope
var a; //Used to define what type of variable this is
a = 1;
// This give you a compilation error: a = true;
// This give you a compilation error: a = 'a';
var exampleArray = [1, 2, 3]; //Example array
/* Enum is kind of like a container of values. Intiially, the first value is 0,
(if not declared), and every successive value increments from that. */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally ', i);
}
doSomething();
