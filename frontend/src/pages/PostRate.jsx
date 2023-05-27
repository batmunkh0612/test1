import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PostMap from "../components/PostMap";
import MainHeader from "../components/mainHeader";
const PostRate = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post`);
    const result = res.data.data;
    result.sort((a, b) => Number(a.rate) - Number(b.rate)).reverse();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const styles = {
    head: {
      display: "flex",
      alignItems: "baseline",
      gap: "30px",
    },
    top: {
      fontSize: "250%",
      fontWeight: "500",
    },
    link: {
      textDecoration: "none",
      color: "gray",
      fontSize: "120%",
    },
    main: {
      display: "flex",
      flexDirection: "column",

      alignItems: "CENTER",
    },
  };

  return (
    <div style={styles.main}>
      <MainHeader />
      <div style={styles.top}>TOP RATED POSTS</div>
      <div style={styles.post}>
        {data &&
          data.map((data) => {
            return <PostMap value={data && data} />;
          })}
      </div>
      <Footer />
    </div>
  );
};
export default PostRate;
