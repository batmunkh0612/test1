import React from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import SearchMapUser from "../components/SearchMapUser";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Footer from "../components/Footer";
import PostMap from "../components/PostMap";
import MainHeader from "../components/mainHeader";

function Search() {
  const [alignment, setAlignment] = React.useState("");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const styles = {
    main: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    toggleButton: {
      width: "30vh",
      fontSize: "20px",
      marginTop: "1vh",
    },
    title: {
      fontSize: "40px",
      fontWeight: "500",
    },
  };
  const [data, setData] = useState();
  const { search } = useParams();
  const [user, setUser] = useState();
  const getData = async () => {
    const res = await instance.get("/Post");
    setData(res.data.data);
    setUser("");
  };
  const getUser = async () => {
    const response = await instance.get("/User");
    setUser(response.data.data);
    setData("");
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <MainHeader />
        <div style={styles.title}>You searched "{search}"</div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            style={styles.toggleButton}
            onClick={getUser}
            value="user"
          >
            User
          </ToggleButton>
          <ToggleButton
            style={styles.toggleButton}
            onClick={getData}
            value="post"
          >
            Post
          </ToggleButton>
        </ToggleButtonGroup>
        <div>
          {data &&
            data.map((data) => {
              if (data && data.title.includes(search)) {
                return <PostMap value={data} />;
              } else {
              }
            })}
        </div>
        <div>
          {user &&
            user.map((user) => {
              if (user && user.username.includes(search)) {
                return <SearchMapUser value={user} />;
              } else {
              }
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
