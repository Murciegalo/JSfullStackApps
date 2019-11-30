import React from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { deleteContact , setCurrent , clearCurrent} from '../../actions/contactsActions';


const ContactItem = ({ data , deleteContact , setCurrent , clearCurrent}) => {
  const { id , name , email , phone , type } = data;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent()
  }

  return (
    <div className="card bg-ligth">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span style={{ float: 'right' }}
          className={"badge " + (type === "professional" ? "badge-success" : "badge-primary" )} >
          {type}
        </span> 
      </h3>
      <ul className="list">
        <li>{email && email}</li>
        <li>{phone && phone}</li>
      </ul>
      <p>
        <button className="btn btn-ligth brn-sm" onClick={() => setCurrent(data)}>Edit</button>
        <button className="btn btn-dark brn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes={
  data: PropTypes.object.isRequired,
}

export default connect(
  null,
  { deleteContact , setCurrent , clearCurrent}
)(ContactItem);