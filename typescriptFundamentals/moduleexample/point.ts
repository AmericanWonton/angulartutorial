/* Use export to export this class to other files as a module */
export class Point {
    constructor(private x?: number, private y?: number){}

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}