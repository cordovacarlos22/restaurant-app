import "./BookTable.css";
import bgbooktable from "/Users/carloscordova/Desktop/restaurant-app/src/assets/bg-booktable.jpg";
import { useState } from "react";
import db from "/Users/carloscordova/Desktop/restaurant-app/src/assets/Firebase.js";
import { collection, addDoc } from "firebase/firestore/lite";
const BookTable = () => {
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [reservation, setReservation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // does not let send form if not fill complete
    if (
      (hour === "") |
      (name === "") |
      (day === "") |
      (reservation === "") |
      (phone === "")
    ) {
      alert("MAKE SURE TO FILL FORM COMPLETE");
      return;
    } else {
      const docRef = await addDoc(collection(db, "booktable"), {
        day: day,
        name: name,
        ReservationTime: hour,
        totalGuess: reservation,
        phoneNumber: phone,
      })
        .then(() => {
          setDay("");
          setName("");
          setHour("");
          setReservation("");
          setPhone("");

          alert("Your reservation has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
        });
      console.log("Document written with ID: ", docRef.id);
    }
  };

  return (
    <div className="book-table-container banner">
      <div></div>
      <div className="overlay"></div>
      <div className="book-table-form">
        <div className="book-table-img-container">
          <img
            className="book-table-img card-img"
            src={bgbooktable}
            alt="table background"
          ></img>
        </div>
        <div class="card-content">
          <h3>Make Your Reservation</h3>
          <form id="booktable-form" onSubmit={handleSubmit}>
            <div class="form-row">
              <select
                name="days"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="day-select">Select Day</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>

              <select
                name="hours"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              >
                <option value="hour-select">Select Hour</option>
                <option value="10">10: 00</option>
                <option value="12">12: 00</option>
                <option value="14">14: 00</option>
                <option value="16">16: 00</option>
                <option value="18">18: 00</option>
                <option value="20">20: 00</option>
                <option value="22">22: 00</option>
              </select>
            </div>

            <div class="form-row">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div class="form-row">
              <input
                type="number"
                placeholder="How Many Persons?"
                min="1"
                value={reservation}
                onChange={(e) => setReservation(e.target.value)}
              />
              <input type="submit" value="BOOK TABLE" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
