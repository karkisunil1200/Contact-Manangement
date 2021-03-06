import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  delete = props => {
    this.props.deleteItem(this.props.id);
    console.log(this.props.id);
  };

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  };

  render() {
    const {name, email, phone} = this.props;
    const {showContactInfo} = this.state;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name} <i onClick={this.onShowClick} className='fas fa-sort-down' />{' '}
          <i
            onClick={this.delete}
            className='fas fa-times'
            style={{cursor: 'pointer', float: 'right', color: 'red'}}
          />
        </h4>

        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
