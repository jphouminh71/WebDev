var isDone = true; 

// This code actually doesn't work because we need to learn about React Hooks
// With these hooks we can then do things like re-render things like styles. 
function DeclarativeProgramming()
{
    const strikeThrough = { textDecoration: "line-through"}; 

    function handleClick(e){
        e.preventDefault(); 
        isDone = !isDone;
        console.log(isDone)
    }
    
    return( 
    <div>
    <h1 style={isDone == true ? strikeThrough : null}> Buy Milk </h1> // need hooks for this to actually work
    <button onClick={handleClick}> Click me! </button>
    </div>)
}

export default DeclarativeProgramming;