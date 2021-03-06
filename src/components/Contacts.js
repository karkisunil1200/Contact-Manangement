import React, {Component} from 'react';

import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Sunil Karki',
          email: 'suil@gmai.com',
          phone: '888-888-8888'
        },
        {
          id: 2,
          name: 'Subash Karki',
          email: 'suil@gmai.com',
          phone: '888-888-8888'
        },
        {
          id: 3,
          name: 'Nita Karki',
          email: 'suil@gmai.com',
          phone: '888-888-8888'
        }
      ]
    };
  }

  deleteItem = itemId => {
    const newList = this.state.contacts.filter(contact => contact.id !== itemId);
    this.setState({contacts: newList});
  };

  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            key={contact.id}
            id={contact.id}
            deleteItem={this.deleteItem}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
