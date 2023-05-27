import { Link } from "react-router-dom";
import "../App.css";
const ProfileMap = ({ value }) => {
  const styles = {
    img: {
      width: "16.5vw",
      height: "26vh ",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      margin: "7px",
    },
  };

  return (
    <div style={styles.container}>
      <Link to={`/Post/${value._id}`}>
        <img
          style={styles.img}
          src={value.img}
          alt={value.img}
          className="hover"
        />
      </Link>
    </div>
  );
};
export default ProfileMap;
