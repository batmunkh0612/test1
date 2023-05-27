import { instance } from "../App";
import { useRef, React } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  Body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  inputMain: {
    width: "35vw",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  BodyChild: {
    width: "500px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    gap: "1.5vh",
  },
  NikeIconCn: {
    width: "500px",
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
  NikeIcon: {
    width: "60px",
    height: "60px",
  },
  h1: {
    fontSize: "28px",
    fontWeight: "400",
    marginTop: "20px",
    width: "35vw",
  },
  button: {
    width: "35vw",
    height: "40px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    fontWeight: "600",
    marginTop: "10px",
  },
  logo: {
    display: "flex",
    width: "10vw",
    height: "10vh",
  },
  Hello: {
    fontSize: "20px",
    fontWeight: "400",
  },
};
function Login() {
  const navigate = useNavigate();
  const password = useRef();
  const email = useRef();
  const LoginPost = async () => {
    try {
      const res = await instance.post("/User/Login", {
        mail: email.current.value,
        password: password.current.value,
      });
      toast("Succesfull");
      navigate(`/${res.data.data._id}`);
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      window.localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
      window.localStorage.setItem("role", JSON.stringify(res.data.data.role));
    } catch (error) {
      toast.error("имэйл эсвэл нууц үг буруу байна");
    }
  };
  return (
    <>
      <div style={styles.Body}>
        <div style={styles.BodyChild}>
          <div>
            <h1 style={styles.h1}>
              Нэвтрэхийн тулд бүртгэлтэй имэйл ээ оруулна уу.
            </h1>
          </div>
          <div style={styles.inputMain}>
            <TextField
              inputRef={email}
              id="outlined-basic"
              label="Бүртгэлтэй и-мэйл"
              variant="outlined"
            />
            <TextField
              inputRef={password}
              id="outlined-basic"
              label="Нууц үг"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/Register"
            >
              <div style={styles.Hello}>Шинээр хэрэглэгч үүсгэх</div>
            </Link>
          </div>
          <Button style={styles.button} onClick={LoginPost} variant="contained">
            Нэвтрэх
          </Button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
