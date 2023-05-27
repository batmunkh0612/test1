import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const CommentMap = ({ value }) => {
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get(`/User/${value.user_id}`);
      setData(res.data.data);
      setComment(value.text);
    };
    getData();
  }, []);
  const styles = {
    main: {
      display: "flex",
      padding: "5px",

      marginTop: "0.5vh",
      alignItems: "center",
    },
    image: {
      width: "60px",
      height: "60px",
      borderRadius: "100px",
    },
    helper: {
      display: "flex",
      flexDirection: "column",

      justifyContent: "center",
      padding: "10px",
    },
    username: {
      color: "black",
      fontWeight: "600",
    },
    date: {
      fontSize: "12px",
      color: "gray",
      marginLeft: "0.3vw",
    },
    container: {
      display: "flex",

      alignItems: "center",
    },
  };

  return (
    <Link
      to={`/Profile/${data && data._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={styles.main}>
        <img
          style={styles.image}
          src={data && data.image}
          alt={data && data.image}
        />
        <div style={styles.helper}>
          <div style={styles.container}>
            <div style={styles.username}>{data && data.username}</div>
            <div style={styles.date}>
              {moment(value && value.date).format("MMMM Do YYYY, h:mma")}
            </div>
          </div>
          <div className="mainHeaderStyle" style={styles.comment}>
            {comment}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CommentMap;
