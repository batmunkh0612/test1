import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Post from "./Post";
const MainHeader = () => {
  const styles = {
    main: {
      display: "flex",
      height: "6vh",
      justifyContent: "space-between",
      backgroundColor: "white",
      alignItems: "center",
      borderBottom: "0.1px solid black",

      width: "100vw",
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
    text: {
      color: "black",
      marginLeft: "2vw",
      fontSize: "20pxs",
    },
    left: {
      display: "Flex",
    },
    right: {
      display: "Flex",
      alignItems: "center",
    },
    search: {
      borderRadius: "10px",
      width: "30wh",
      height: "4vh",
      color: "black",
      paddingLeft: "10%",
      border: "0.5px solid black",
      marginLeft: "1vw",
      boxBorder: "none",
    },
    none: {
      display: "none",
    },
  };
  const navigate = useNavigate();
  const searchItem = useRef();
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        navigate(
          `/${JSON.parse(localStorage.getItem("user_id"))}/${
            searchItem.current.value
          }`
        );
        searchItem.current.value = "";
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [createDisplay, setCreateDisplay] = useState({
    display: "none",
    isDisplay: false,
  });
  const createItem = () => {
    if (createDisplay.isDisplay === false) {
      setCreateDisplay({ display: "inline", isDisplay: true });
      setCreateDisplay("");
    } else {
      setCreateDisplay("");
      setCreateDisplay({ display: "none", isDisplay: false });
    }
  };

  return (
    <>
      <div style={styles.main}>
        <div style={styles.left}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`/Profile/${JSON.parse(localStorage.getItem("user_id"))}`}
          >
            {" "}
            <div className="mainHeaderStyle" style={styles.text}>
              Profile
            </div>
          </Link>
          <Link
            to={`/${JSON.parse(localStorage.getItem("user_id"))}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="mainHeaderStyle" style={styles.text}>
              Home{" "}
            </div>
          </Link>
          <Link
            to={`/About`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="mainHeaderStyle" style={styles.text}>
              About us
            </div>
          </Link>
          <Link to={`/Top`} style={{ color: "black", textDecoration: "none" }}>
            <div className="mainHeaderStyle" style={styles.text}>
              Top
            </div>
          </Link>
        </div>
        <div style={styles.right}>
          <div>
            <svg
              onClick={createItem}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
          <input
            onKeyDown={handleKeyDown}
            ref={searchItem}
            type="search"
            style={styles.search}
            placeholder="Search"
          />
        </div>
      </div>
      <Post style={styles.none} value={createDisplay.display} />
    </>
  );
};
export default MainHeader;
