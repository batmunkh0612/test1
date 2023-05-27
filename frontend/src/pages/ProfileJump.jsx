import { instance } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ProfileMap from "../components/ProfileMap";
import MainHeader from "../components/mainHeader";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ProfileJump = () => {
  const styles = {
    Container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      height: "100vh",
      width: "100vw",
    },
    imgMap: {
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1vh",
    },
    helper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100vw",
    },
    profileMain: {
      width: "40vw",
      justifyContent: "flex-start",
      display: "flex",
      marginTop: "5vh",
      padding: "2vh",
    },
    header: {
      display: "flex",
    },
    profileImage: {
      width: "150px",
      height: "150px",
      borderRadius: "100px",
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
    },
    profileName: {
      fontSize: "35px",
      fontWeight: "600",
    },
    profileContainer: {
      width: "37vw",
      marginLeft: "3vw",
    },
    PorfileData: {
      display: "flex",

      width: "30vw",

      marginTop: "1vh",
      marginBottom: "1vh",
    },
    profilePlacer: {
      display: "flex",
    },
    profileLength: {
      color: "black",
      fontWeight: "500",
    },
    profile: {
      color: "black",
      fontWeight: "400",
      marginLeft: "0.3vw",
    },
    button: {
      fontSize: "16px",
      borderRadius: "5px",
      backgroundColor: "#EFEFEF",
      padding: "0px 10px",
      marginLeft: "20px",
      fontWeight: "600",
    },
    header: {
      display: "flex",

      width: "30vw",
    },
    mail: {
      color: "black",
      fontWeight: "500",
      marginLeft: "1vw",
    },
    leave: {
      width: "50px",
      height: "50px",
    },
    buttonv2: {
      fontSize: "16px",
      borderRadius: "5px",
      backgroundColor: "#EFEFEF",
      padding: "0px 10px",
      marginLeft: "10px",
      fontWeight: "600",
    },
    bio: {
      fontWeight: "500",
    },
  };
  const [data, setData] = useState();
  const [length, setLength] = useState();
  const [post, setPost] = useState();
  const { id } = useParams();
  const Navigate = useNavigate();
  const getData = async () => {
    const res = await instance.get(`/User/${id}`);
    console.log(res);
    setData(res.data.data);
    setPost(res.data.data.post);
    setLength(res.data.data.post.length);
  };
  const leave = () => {
    window.localStorage.clear();
    Navigate("/");
  };
  const clickHandler = () => {
    if (data && data.id === JSON.parse(localStorage.getItem("user_id"))) {
      Navigate(`/Edit/${JSON.parse(localStorage.getItem("user_id"))}`);
    } else {
      toast.error("You dont have any access to use");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={styles.Container}>
      <MainHeader></MainHeader>

      {data && (
        <div style={styles.helper}>
          <div style={styles.profileMain}>
            <img
              className="instagram"
              style={styles.profileImage}
              src={data && data.image}
              alt={data && data.image}
            />
            <div style={styles.profileContainer}>
              <div style={styles.header}>
                <div style={styles.profileName}>{data && data.username}</div>
                <div style={{ display: "flex" }}>
                  <button onClick={clickHandler} style={styles.button}>
                    Edit Profile
                  </button>
                  <button style={styles.buttonv2} onClick={leave}>
                    Leave
                  </button>
                </div>
              </div>
              <div style={styles.PorfileData}>
                <div style={styles.profilePlacer}>
                  <div style={styles.profileLength}>
                    {data && data.post.length}
                  </div>
                  <div style={styles.profile}>posts</div>
                </div>
                <div style={styles.mail}>{data && data.mail}</div>
              </div>
              <div className="mainHeaderStyle" style={styles.bio}>
                {data && data.Bio}
              </div>
            </div>
          </div>
          <div style={styles.main}>
            {length === 1 ? (
              <div>
                {post &&
                  post.map((post) => {
                    return <ProfileMap value={post} />;
                  })}
              </div>
            ) : (
              <div style={styles.imgMap}>
                {post &&
                  post.map((post) => {
                    return <ProfileMap value={post} />;
                  })}
              </div>
            )}
            <ToastContainer />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProfileJump;
