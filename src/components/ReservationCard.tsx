import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface CustomerPropTypes {
  customer: string;
  index: number;
}

export default function ReservationCard({
  customer,
  index,
}: CustomerPropTypes) {
  const dispatch = useDispatch();

  const addToReservation = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name: customer,
        menu: [],
      })
    );
  };

  return (
    <div className="reservation-card-container" onClick={addToReservation}>
      {customer}
    </div>
  );
}
