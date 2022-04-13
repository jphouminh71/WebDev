import './css/CondRendering.css';
import Login from './Login';

var isLoggedIn = false; 
const currentTime = new Date(2019,1,1,13).getHours();


// might be a cleaner way todo it rather than ternary 
function renderConditionally() { 
    if (isLoggedIn == true) {
        return <h1> Hello </h1>; 
    } else {
        return (
            <Login />
        );
    }
}

function CondRendering() {
  return (
    <div className="container">
        {isLoggedIn ? <h1> Hello </h1> : <Login />}
        {/*{renderConditionally()}*/}
        { currentTime > 12 && <h1> Why are you still working </h1>}
    </div>
  )}

export default CondRendering;
