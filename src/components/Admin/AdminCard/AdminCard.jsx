import React from "react";
import './AdminCard.css'

const ReservationCard = (props) => {
  return (
    <div className="admin-reservation-container" key={props.key}>
      
      <p> Name : {props.name}</p> <br></br>
      <p> Time : {props.ReservationTime}</p>
      <p> Day : {props.day}</p>
      <p> Phone Number : {props.phoneNumber}</p>
      <p> Total Guess : {props.totalGuess}</p>
    </div>
  );
};

export default ReservationCard;
