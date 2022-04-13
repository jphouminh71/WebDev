import './Components/styles.css';
import Card from './Components/Card';
import contacts from './contacts';
import Avatar from './Components/Avatar';

function PropsChallenge() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar 
                ImgURL="https://media-exp1.licdn.com/dms/image/C4E03AQH5jP8ZPq9GSg/profile-displayphoto-shrink_200_200/0/1597349819093?e=1653523200&v=beta&t=D_D1UIphGh6vqb4oKnr-OUhZSIhGD1wcUN-EHehgoGo"   
            />
            {contacts.map(createCard)}
        </div>
)}

function createCard(contact) {
    return (
    <Card 
        key={contact.id}  // must be unique across all generated components
        id={contact.id}
        Name={contact.name} 
        ImgURL={contact.imgURL}
        PhoneNumber={contact.phone}
        EmailAddress={contact.email}
    />
)}

export default PropsChallenge;


//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
