/* Playing around with the event loop */
/* Event loop only puts queued items onto the call stack 
when its empty. So if when the function is done executing
*/

/* 1st log is on the stack, first timeout gets queued first
then second timeout gets queued second. Second log gets on the stack
then event loop brings in the items in the queue FIFO
*/


const baz = () => {
    console.log('Hi');
    setTimeout(() => {
        console.log("After the His");
    }, 0);
    setTimeout(() => {
        console.log('Am I always last?');
    }, 0);
    console.log("hi again");
};

baz();
console.log('VERY LAST');


