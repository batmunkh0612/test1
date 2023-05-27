import { useState } from "react";
import { instance } from "../App";
import { useRef } from "react";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import moment from "moment";

const PostMap = ({ value }) => {
  const [data, setData] = useState();
  const [switched, setSwitched] = useState(false);
  const ShowComment = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };
  const getData = async () => {
    const res = await instance.get(`/User/${value.user_id}`);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, [data]);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        await instance.post("/Comment", {
          text: text.current.value,
          user_id: JSON.parse(localStorage.getItem("user_id")),
          post_id: `${value._id}`,
        });
        text.current.value = "";
      } catch (error) {
        console.log("aldaa post comment");
        console.log(error);
        alert(error.response.data.data);
      }
    }
  };
  const text = useRef(null);
  const style = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    helper: {
      border: "0.1px solid #000814",
      width: "45vw",
      marginTop: "2vh",
      borderRadius: "10px",
    },
    none: {
      visibility: switched ? "" : "hidden",
      height: switched ? "50px" : "0px",
    },
    input: {
      width: "98.2%",
      height: "90%",
      paddingLeft: "10px",
      borderBottom: "none",
      borderLeft: "none",
      borderRight: "none",
      borderTop: "1px solid gray",
      outline: "none",
    },
    item: {
      display: "flex",
      alignItems: "center",
    },
    footerMain: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "1vw",
      height: "6vh",
      paddingRight: "1vw",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
    },
    headerHelper: {
      display: "flex",
    },
    proImg: {
      width: "50px",
      height: "50px",
      borderRadius: "100px",
    },
    headerMargin: {
      marginLeft: "0.5vw",
    },
    username: {
      fontSize: "20px",
      fontWeight: "500",
    },
    date: {
      fontSize: "12px",
      color: "gray",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
    },
    img: {
      width: "100%",
      height: "54vh",
      border: "0.1px solid gray",
      borderLeft: "none",
      borderRight: "none",
    },
    bodyHelper: {
      paddingLeft: "10px",
    },
    items: {
      display: "flex",
    },
    value: {
      marginLeft: "0.5vw ",
      cursor: "pointer",
    },
  };
  return (
    <div style={style.main}>
      <div style={style.helper}>
        <div style={style.header}>
          <Link
            to={`/Profile/${data && data._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={style.headerHelper}>
              <img
                style={style.proImg}
                src={data && data.image}
                alt={data && data.image}
              />
              <div style={style.headerMargin}>
                <div style={style.username}>{data && data.username}</div>
                <div style={style.date}>
                  {" "}
                  {moment(value.date).format("MMMM Do YYYY, h:mm a")}
                </div>
              </div>
            </div>
          </Link>
          <Rating
            name="half-rating-read"
            defaultValue={value.rate}
            precision={0.5}
            readOnly
          />
        </div>
        <div style={style.body}>
          <div style={style.bodyHelper}>
            {" "}
            <div style={style.title}>{value.title}</div>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/Post/${value._id}`}
          >
            <img style={style.img} src={value.img} alt={value.img} />
          </Link>
        </div>

        <div style={style.footer}>
          <div style={style.footerMain}>
            <div style={style.items}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <div style={style.value}>{value.locate}</div>
            </div>
            <div onClick={ShowComment} style={style.items}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-chat-dots"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
              </svg>
              <div style={style.value}>Comment</div>
            </div>
            <div style={style.items}>
              <div style={style.value}>{value.comment.length} Comments</div>
            </div>
          </div>
          <div style={style.none}>
            <input
              style={style.input}
              ref={text}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="create a comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostMap;
