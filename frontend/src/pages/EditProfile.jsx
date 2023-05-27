import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const EditProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/User/${id}`);
    setData(res.data.data);
  };
  const bio = useRef();
  const username = useRef();
  const mail = useRef();
  const image = useRef();
  const Navigate = useNavigate();
  const update = () => {
    if (image.current.value === "") {
      instance.patch(`/User/${id}`, {
        mail: mail.current.value,
        username: username.current.value,
        Bio: bio.current.value,
      });
    } else {
      instance.patch(`/User/${id}`, {
        mail: mail.current.value,
        username: username.current.value,
        image: image.current.value,
        Bio: bio.current.value,
      });
    }
    Navigate(`/Profile/${JSON.parse(localStorage.getItem("user_id"))}`);
  };

  useEffect(() => {
    getData();
  }, []);
  const styles = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    },
    container: {
      display: "flex",
      flexDirection: "column",
    },
    helper: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "100px",
    },
    flex: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "1vw",
    },
    header: {
      display: "flex",
      marginLeft: "25px",
      marginTop: "25px",
      justifyContent: "flex-start",
    },
    name: {
      fontWeight: "500",
      fontSize: "25px",
    },
    mail: {
      color: "gray",
      fontSize: "15px",
    },
    button: {
      backgroundColor: "black",
      width: "38.5vw",
    },
  };
  return (
    <div style={styles.main}>
      {data && (
        <div style={styles.container}>
          <div style={styles.header}>
            <img style={styles.image} src={data && data.image} alt="" />
            <div style={styles.flex}>
              <div style={styles.name}>{data && data.username}</div>
              <div style={styles.mail}>email:{data && data.mail}</div>
            </div>
          </div>
          <Box
            style={styles.helper}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "55ch" },
              "& button": { m: 1, width: "61ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="username"
              defaultValue={data && data.username}
              inputRef={username}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue={data && data.mail}
              inputRef={mail}
            />
            <TextField
              required
              id="outlined-required"
              label="Image(url)"
              defaultValue=""
              inputRef={image}
            />
            <TextField
              required
              id="outlined-required"
              label="Bio"
              defaultValue={data && data.Bio}
              inputRef={bio}
            />
            <Button onClick={update} style={styles.button} variant="contained">
              EDIT
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
