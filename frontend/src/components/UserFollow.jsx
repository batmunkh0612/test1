import React, { useState, useEffect } from "react";
import { instance } from "../App";
import UserMap from "./UserMap";

const UserFollow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get("/User");
      setData(res.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>Suggestions for you</div>
      {data.map((user) => (
        <UserMap key={user.id} value={user} />
      ))}
    </div>
  );
};

export default UserFollow;
