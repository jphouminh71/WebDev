function Card(props) {
    return ( 
      <div> 
        <h1>My Contacts</h1>
        <h2>{props.Name}</h2>
        <img
          src={props.Source}
          alt={props.ImageAltName}
        />
        <p>{props.PhoneNumber}</p>
        <p>{props.Email}</p>
      </div> 
    )}
export default Card;