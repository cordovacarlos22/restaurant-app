import AdminCard from './AdminCard/AdminCard'
import  db from '/Users/carloscordova/Desktop/restaurant-app/src/assets/Firebase.js'
import { collection, getDocs} from "firebase/firestore/lite";
import { useEffect, useState } from 'react';
import '/Users/carloscordova/Desktop/restaurant-app/src/components/Admin/Admin.css'
function AdminReservation() {

  const [reservation, setReservation] = useState('');


  // Get a list of cities from your database
  async function getReservation() {
    const reservationCol = collection(db, "booktable");
    const reservationSnapshot = await getDocs(reservationCol);
    const reservationsList = reservationSnapshot.docs.map((doc) => doc.data());
    // console.log(reservationsList)
    setReservation(reservationsList);
  }

  useEffect(() => {
    getReservation()
   
  }, [])

  return (
    <div className="admin-main-container ">
      
      <div className='reservation-container'>
        <h1 className='reservation-title'>Reservations</h1>
        {reservation &&
          reservation.map((el) => {
            return <AdminCard
              name={el.name}
              ReservationTime={el.ReservationTime}
              day={el.day}
              phoneNumber={el.phoneNumber}
              totalGuess={el.totalGuess} />;
          })}
      </div>


    </div>
  );
}

export default AdminReservation;
