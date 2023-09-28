/* Playing around with the event loop */
/* Event loop only puts queued items onto the call stack 
when its empty. So if when the function is done executing
*/

/* 1st log is on the stack, first timeout gets queued first
then second timeout gets queued second. Second log gets on the stack
then event loop brings in the items in the queue FIFO
*/



// const baz = () => {
//     console.log('Hi');
//     setTimeout(() => {
//         console.log("After the His");
//     }, 0);
//     setTimeout(() => {
//         console.log('Am I always last?');
//     }, 0);
//     console.log("hi again");

//     let i = 0;
//     while(i < 10) {
//         console.log(i);
        
//     };
// };

// baz();
// console.log('VERY LAST');



// function placeOrder(oNum){ 
//     console.log("Customer order",oNum); 
//     cookAndDeliverFood(function(){     
//         console.log("Deliverd food order:",oNum); 
//         }); 
//     } 
     
//     //Simulate a 5s operation 
//     function cookAndDeliverFood(callback){     
//         setTimeout(callback,5000); 
//     } 
     
//     //Simulate User requests; 
//     placeOrder(1); 
//     placeOrder(2); 
//     placeOrder(3); 
//     placeOrder(4); 
//     placeOrder(5); 


/* Dont use them in loops or else the call stack will never empty */

setTimeout(() => console.log("Hello A!"),0);
console.log("Hello Jon!");
