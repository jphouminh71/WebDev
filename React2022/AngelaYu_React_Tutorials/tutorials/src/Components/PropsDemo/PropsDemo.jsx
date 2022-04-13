import Card from './Components/Card';

function PropsDemo() {
  return (
    <div>
    <Card 
      Name="Beyonce" 
      Source="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      ImageAltName="BeyonceImage"
      PhoneNumber="123456789"
      Email="beyonce.com"
       />
    
    <Card 
      Name="Jack Bauer" 
      Source="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      ImageAltName="jackbauerimage"
      PhoneNumber="12839813891"
      Email="jack.com"
       />

    <Card 
      Name="Chuck Norris" 
      Source="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      ImageAltName="jackbauerimage"
      PhoneNumber="99999"
      Email="Chuck.com"
       />
  </div>
  )}

export default PropsDemo;
