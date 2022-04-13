import Form from './Form';

var userIsRegistered = true;

function ConditionalRenderingChallenge() {
  return (
    <div>
      <div className="container">
        <Form isRegistered={userIsRegistered}/>
    </div>
    </div>
  )}

export default ConditionalRenderingChallenge;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
