import React, { useState, useEffect } from "react";
import { instance } from "../App";
import PostMap from "./PostMap";

const ViewPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get("/Post");
      setData(res.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((data) => (
        <PostMap key={data.id} value={data} />
      ))}
    </div>
  );
};

export default ViewPost;
