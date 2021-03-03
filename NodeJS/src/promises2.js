/* Another Example from youtube */


/* Callback implementation */
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = true
    let userWatchingCatMeme = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
  

  /* Promise implementation */
  /* Dont need to pass functions as a callback anymore, just define logic here and get return value */
  /* By avoiding callbacks, we can pass back all data with resolve and reject */
  function watchTutorialPromise() {
    let userLeft = true
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  

/* Calling the callback function */
watchTutorialCallback(message => {
    console.log(message)
    }, error => {
    console.log(error.name + ' ' + error.message)
})

console.log();

  /* Calling the Promise function */
watchTutorialPromise()
.then((message) => {console.log(message)})
.catch((rejectItem) => {console.log(rejectItem.name + ' ' + rejectItem.message)})