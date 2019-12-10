import React from 'react';
// import PropTypes from 'prop-types';
import { FaBan } from 'react-icons/fa';
//Redux
import { useSelector } from "react-redux";

const Alerts = () => {
  const alerts = useSelector( state => state.contacts.alerts);
  return (
    alerts.length > 0 && alerts.map( el => {
      return <div key={el.id} className={`alert alert-${el.tipo}`} style={styles}>
        <span className="icon" style={icon}><FaBan /></span> {el.msg}
      </div>
    }) 
  )
}

export default Alerts;


const styles ={
  display: "flex", 
  alignItems: "center" ,
  justifyContent: "center"
}
const icon = {
  margin: '5px'
}