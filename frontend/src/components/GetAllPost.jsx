import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";
import moment from "moment";

const styles = {
  ad: {
    width: "100%",
    border: "0.5px solid black",
  },
  img: {
    width: "50%",
    height: "15vh",
    borderRight: "0.1px solid gray",
  },
  mapMain: {
    marginTop: "1vh",
    border: "0.1px solid gray",
    display: "Flex",
  },
  mapHelper: {
    padding: "0.1vh",
    height: "15vh",
    width: "11vw",
    display: "Flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    height: "5vh",
  },
  comment: {
    display: "Flex",
    alignItems: "center",
  },
  doodMain: {
    display: "Flex",

    alignItems: "center",
  },
  comments: {
    fontWeight: "500",
  },
  date: {
    fontSize: "13px",
    color: "gray",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
};

const GetAllPost = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get("/Post");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const renderPost = (post) => (
    <div style={styles.mapMain} key={post.id}>
      <img style={styles.img} src={post.img} alt={post.img} />
      <div style={styles.mapHelper}>
        <div>
          <div style={styles.date}>
            {moment(post.date).format("MMMM Do YYYY, h:mm a")}
          </div>
          <div style={styles.title} className="mainHeaderStyle">
            <Link style={styles.link} to={`/Post/${post.id}`}>
              {post.title}
            </Link>
          </div>
        </div>

        <div style={styles.comment}>
          <div style={styles.comments}>{post.comment.length} Comments</div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <img
        style={styles.ad}
        src="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
        alt="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
      />
      <div style={styles.map}>{data && data.map(renderPost)}</div>
    </div>
  );
};

export default GetAllPost;
