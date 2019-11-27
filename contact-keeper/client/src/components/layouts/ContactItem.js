import React from 'react';
import PropTypes from 'prop-types';


export const ContactItem = ({data}) => {
  const { id , name , email , phone , type } = data;
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
        <li></li>
        <li></li>
      </ul>
      <p>
        <button className="btn btn-dark brn-sm">Edit</button>
        <button className="btn btn-danger brn-sm">Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes={
  data: PropTypes.object.isRequired,
}