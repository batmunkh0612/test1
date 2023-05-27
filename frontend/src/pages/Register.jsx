import { useState, useRef, React } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";
function Register() {
  const [switched, setSwitched] = useState(false);
  const loginToSignup = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const locate = useRef();
  const serviceType = useRef();
  const registerButton = async () => {
    if (!switched) {
      try {
        await instance.post("/User", {
          username: username.current.value,
          mail: email.current.value,
          password: password.current.value,
          type: "User",
          role: "user",
        });
        toast("Succesfull");
        navigate("/");
      } catch (error) {
        toast.error("Password must have 8character");
      }
    } else {
      if (switched) {
        try {
          toast.error("Zasvartai");
          navigate("/Register");
        } catch (error) {
          toast.error("Zasvartai");
        }
      }
    }
  };

  const style = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "4vh",
    },
    inputMain: {
      height: switched ? "330px" : "160px",
      width: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    Main: {
      display: "flex",
      width: "500px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    none: {
      height: switched ? "8vh" : "0px",
      visibility: switched ? "" : "hidden",
    },
    h1: {
      fontSize: "28px",
      fontWeight: "400",
      marginTop: "20px",
    },
    switch: {
      display: "flex",
      justifyContent: "start",
      cursor: "pointer",
      fontSize: "20px",
      width: "500px",
      marginTop: switched ? "20px" : "50px",
    },
    sumbit: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      fontSize: "17px",
      fontWeight: "600",
      marginTop: "1vh",
      border: "1px solid ",
    },
    logo: {
      display: "flex",
      width: "10vw",
      height: "10vh",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.logo}>
        <Logo />
      </div>
      <div style={style.Main}>
        <h1 style={style.h1}>
          Шинэ {switched ? "байгууллaгa бүртгүүлэх" : "хэрэглэгч болох"}
        </h1>
        <div style={style.inputMain}>
          <TextField
            id="outlined-basic"
            label={switched ? "Байгууллагын нэр" : "Хэрэглэгчийн нэр"}
            variant="outlined"
            style={style.input}
            inputRef={username}
          />
          <TextField
            id="outlined-basic"
            label="Цахим шуудан"
            variant="outlined"
            style={style.input}
            inputRef={email}
          />
          <TextField
            id="outlined-basic"
            label="Нууц үг"
            variant="outlined"
            style={style.input}
            inputRef={password}
            type="password"
          />
          <TextField
            id="outlined-basic"
            label="Байршил"
            variant="outlined"
            style={style.none}
            inputRef={locate}
          />
          <TextField
            id="outlined-basic"
            label="Үйлчилгээний төрөл Franchise | Travel | Massage | Relax | Repair"
            variant="outlined"
            style={style.none}
            inputRef={serviceType}
          />
        </div>
        <div style={style.switchAndButton}>
          <div style={style.switch} onClick={loginToSignup}>
            {switched ? "Хэрэглэгчээр бүртгүүлэх" : "Байгууллагаар бүртгүүлэх"}
          </div>
          <div>
            <Button
              style={style.sumbit}
              variant="outline-primary"
              onClick={registerButton}
            >
              {switched ? "Байгууллaга бүртгүүлэх" : "Хэрэглэгч үүсгэх"}
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Register;
