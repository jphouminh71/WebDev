import Avatar from './Avatar';
import Details from './Details';

function Card(props) {
return (
    <div>
      <div className="card info">
        <div className="top">
          <p> {props.id} </p> 
          <h2 className="name">{props.Name}</h2>
          <Avatar ImgURL={props.ImgURL}/>
        </div>
        <div className="bottom">
          <Details information={props.PhoneNumber} />
          <Details information={props.EmailAddress} />
        </div>
      </div>
    </div>
)}
export default Card; 