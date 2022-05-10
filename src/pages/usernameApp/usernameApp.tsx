import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { addUser, deleteUser, updateUsername } from "../../features/userSlice";

function UsernameApp() {
  const users = useSelector((state: RootState) => state.users.value);
  console.log(users);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    userName: "",
    updateUsername: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: data.name,
        username: data.userName,
      })
    );
    setData((prevState) => {
      return { ...prevState, name: "", userName: "" };
    });
  };

  const handleSubmit2 = (e: any, id: number) => {
    e.preventDefault();

    dispatch(
      updateUsername({
        id: id,
        updatedUsername: data.updateUsername,
      })
    );

    setData((prevState) => {
      return { ...prevState, updateUsername: "" };
    });
  };

  const handleChange = (e: any) => {
    setData((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleChange2 = (e: any) => {
    setData((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
  };

  const handleChange3 = (e: any) => {
    setData((prevState) => {
      return { ...prevState, updateUsername: e.target.value };
    });
  };

  return (
    <div>
      <div className="addUser">
        <form
          onSubmit={handleSubmit}
          style={{ width: "40%", margin: "4em auto 0" }}
        >
          <input
            type="text"
            placeholder="Name..."
            value={data.name}
            onChange={(e) => handleChange(e)}
            style={{ padding: "0.5em" }}
            required
          />
          <input
            type="text"
            placeholder="Username..."
            value={data.userName}
            onChange={(e) => handleChange2(e)}
            style={{ padding: "0.5em", marginLeft: "0.5em" }}
            required
          />
          <button
            type="submit"
            style={{ padding: "0.5em 1em", marginLeft: "0.5em" }}
          >
            Add User
          </button>
        </form>
      </div>
      <div
        className="displayUsers"
        style={{ width: "40%", margin: "4em auto 0" }}
      >
        {users.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5em",
            }}
          >
            <div style={{ fontWeight: "700", color: "blue" }}>{item.name}</div>
            <div style={{ marginLeft: "1em" }}>{item.username}</div>
            <form onSubmit={(e) => handleSubmit2(e, item.id)}>
              <input
                type="text"
                placeholder="Username..."
                onChange={(e) => handleChange3(e)}
                style={{ padding: "0.5em", marginLeft: "0.5em" }}
                required
              />
              <button
                type="submit"
                style={{ padding: "0.5em 1em", marginLeft: "0.5em" }}
              >
                Update
              </button>
            </form>

            <svg
              style={{ width: "18px", marginLeft: "0.5em", cursor: "pointer" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                dispatch(
                  deleteUser({
                    id: item.id,
                  })
                )
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsernameApp;
