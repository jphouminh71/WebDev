/* File just to play around with timers and process.tick */
/* Normally your code wont be procedural, but in this case, stack isn't empty til eof */


/* process.tick messages take priroity over normal message queue items , these execute right before
    the current operation (func) gets finished 
*/

function foo() {
    console.log('foo');
}

function baz() {
    console.log('baz');
}


function bar() {
//     setTimeout(() => {console.log('bar')},0);
    process.nextTick(() => {
        baz();
    });

    process.nextTick(() => {  // this work gets pushed into back of 
        console.log('should be after next baz');

        setTimeout(() => {console.log('should be after foo')}, 0);  // gets put in the back of message queue

        setImmediate(() => {console.log('before foo')});
    });
}

function main() {
    console.log('main');

    setTimeout(foo, 0);

    bar();
}

main();

// console.log('hi')