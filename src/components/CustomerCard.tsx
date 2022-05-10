import { useDispatch } from "react-redux";
import { useState } from "react";
import { addMenu, removeMenu } from "../features/customerSlice";

interface CustomerCardType {
  customer: {
    name: string;
    menu: string[];
    id: string;
  };
}

function CustomerCard({ customer }: CustomerCardType) {
  const [menu, setMenu] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMenu("");
    dispatch(
      addMenu({
        menu: menu,
        id: customer.id,
      })
    );
  };

  const handleRemoveMenu = (index: number) => {
    dispatch(
      removeMenu({
        id: customer.id,
        index: index,
      })
    );
  };

  return (
    <div className="customer-food-card-container">
      <p style={{ fontWeight: 700 }}>{customer.name}</p>
      <div className="customer-foods-container">
        <div className="customer-food-input-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              style={{ padding: "0.5em 1em" }}
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
              required
            />
            <button style={{ marginLeft: "1em", padding: "0 0.8em" }}>
              Add
            </button>
          </form>
        </div>
        <div style={{ display: "flex" }}>
          {customer.menu.map((item, index) => (
            <p
              key={index}
              style={{ fontWeight: 700 }}
              onClick={() => handleRemoveMenu(index)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
