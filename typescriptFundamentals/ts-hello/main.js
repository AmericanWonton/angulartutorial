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
//Type assertion example
var letterMessage = 'abc';
var endsWithC = letterMessage.endsWith('c');
//Or you can do this
var alertnateWay = letterMessage.endsWith('c)');
//Arrow functions
var doLogger = function (letterMessage) { return console.log(letterMessage); };
//Interface we use for below
/*
interface Point {
    x: number,
    y: number
    draw: () => void
}
*/
/*We use a class instead...for reasons */
var Point = /** @class */ (function () {
    //This can make the vairalbe private private g: number;
    //private x: number;
    //private y: number;
    /* Used for builing this instance. The question
    marks make these fields optional. You can add private instaed of writing it above to initialize
    this class with these variables */
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //this.x = x; Don't need these with private/public declarations
        //this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        /* Access Modifiers */
        //Getter
        get: function () {
            return this.x;
        },
        //Setter
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    //Random function
    Point.prototype.draw = function () {
        //Logic for drawing point
        console.log('X: ' + this.x + ' , Y: ' + this.y);
    };
    return Point;
}());
//The new is needed to allocate memory
/* Old way:
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
*/
/* Cool way */
var point = new Point(1, 2);
var x = point.X;
point.X = 10;
point.draw();
