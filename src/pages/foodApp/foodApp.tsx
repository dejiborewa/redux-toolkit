import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./foodApp.css";
import { RootState } from "../../app/store";
import CustomerCard from "../../components/CustomerCard";
import ReservationCard from "../../components/ReservationCard";
import { addReservation } from "../../features/reservationSlice";

function App() {
  const [reservationName, setReservationName] = useState("");
  const reservationState = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customerState = useSelector(
    (state: RootState) => state.customers.value
  );
  const dispatch = useDispatch();

  const handleReservation = (e: any) => {
    e.preventDefault();
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservationState.map((customer, index) => (
                <ReservationCard customer={customer} index={index} key={index}/>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <form onSubmit={handleReservation}>
              <input
                value={reservationName}
                onChange={(e) => setReservationName(e.target.value)}
                style={{ padding: "0.5em" }}
                required
              />
              <button style={{ marginTop: "1em", padding: "0.5em" }}>
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="customer-food-container">
          {customerState.map((customer, index) => (
            <CustomerCard customer={customer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
