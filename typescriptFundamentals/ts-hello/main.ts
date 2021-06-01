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

//Interface we use for below
/*
interface Point {
    x: number,
    y: number
    draw: () => void
}
*/

/*We use a class instead...for reasons */
class Point {
    //This can make the vairalbe private private g: number;
    //private x: number;
    //private y: number;
    /* Used for builing this instance. The question
    marks make these fields optional. You can add private instaed of writing it above to initialize
    this class with these variables */
    constructor(private x?: number, private y?: number){
        //this.x = x; Don't need these with private/public declarations
        //this.y = y;
    }
    /* Access Modifiers */
    //Getter
    get X(){
        return this.x;
    }
    //Setter
    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }



    //Random function
    draw(){
        //Logic for drawing point
        console.log('X: ' + this.x + ' , Y: ' + this.y);
    }
}

//The new is needed to allocate memory
/* Old way:
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
*/
/* Cool way */
let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.draw();