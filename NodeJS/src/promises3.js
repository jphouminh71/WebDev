const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})


/* Takes in all the promises as a parameter, it will run all them all at once*/
/* This doesn't block!*/
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
console.log(messages)
})// returns an array of messages
// should also catch the rejects, but we didn't have any rejects

/* Just like the .all, but returns the one that returns FIRST, returns one value */
/* This also doesn't block */
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
console.log(message)
})

console.log('did this get blocked');