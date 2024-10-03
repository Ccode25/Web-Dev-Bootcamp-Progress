import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// function createCard(contact) {
//   return (
//     <Card name={contact.name}
//           img={contact.imgURL}
//           tel={contact.phone}
//           email={contact.email} />
//   )
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain" />
      
        {contacts.map((contact) => (
          <Card 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        ))}
   
    </div>
  );
}

export default App;
