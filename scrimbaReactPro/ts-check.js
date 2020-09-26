// @ts-check
var foo = 3;
foo = false; // Error: foo was supposed to be a number, but here Im assigning it a boolean value

console.log(foo);

// @ts-check
function add(a, b) {
  return a + b;
}
console.log(add(1, 2, 3)); // Error: 3 parameters are being sent but the function only receives 2

// @ts-check
/**@type {{x: string, y:number, width: number, height: number, getArea: Function}} */

let gameObject = {
  x: 7, // wrong type assigned
  y: 3,
  width: 20,
  height: 20,
  getArea() {
    return this.height * this.width;
  },
};

console.log(gameObject.x, gameObject.y, gameObject.getArea());
console.log(gameObject.z); // This property doesn't exist

// @ts-check
/**
 * @param {{ shouldRun: boolean }} [config] - Somebody's name.
 */
function doSomething(config) {
  if (config && config.shouldRun) {
    // run
  }
}

doSomething({ canRun: true }); // this now indicates an error
doSomething({ shouldRun: true });

//@ts-ignore
doSomething({ canRun: true }); // Ignoring the error
