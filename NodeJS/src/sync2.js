/* Takeaway from this example, just realize that all of this is happening outside of the main thread 
    makes our ui more responsive. And at the same time, it is all synchrnous but not at the same time. 
*/


const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
}
  
const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
}
  
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
}
  
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
})