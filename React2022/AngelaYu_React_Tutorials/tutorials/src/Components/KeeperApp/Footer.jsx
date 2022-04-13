let today = new Date(); 
let year = today.getFullYear();

function Footer() {
    return (
        <footer> 
            <p> Copyright @ {year} </p> 
        </footer> 
    )
}

export default Footer; 