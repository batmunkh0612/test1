import { Link } from "@mui/material";

function SearchMapUser({ value }) {
  console.log(value);
  const styles = {
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "100px",
    },
    main: {
      display: "flex",
      border: "0.5px solid black",
      backgroundColor: "#FCFBFC",
      width: "600px",
      height: "120px",
      alignItems: "Center",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "2vh",
    },
    container: {
      display: "Flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    mailMain: {
      display: "flex",
      alignItems: "Center",
      marginLeft: "1vw",
    },
    items: {
      marginLeft: "1vw",
      display: "flex",
    },
    value: {
      color: "gray",
      fontSize: "20px",
    },

    text: {
      marginLeft: "2px",
      fontSize: "20px",
    },
  };
  console.log(value);
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/Profile/${value._id}`}
    >
      {" "}
      <div style={styles.main}>
        <img style={styles.image} src={value.image} alt={value.image} />
        <div style={styles.container}>
          <div style={styles.items}>
            <div style={styles.value}>email :</div>
            <div style={styles.text}>{value.mail}</div>
          </div>
          <div style={styles.items}>
            <div style={styles.value}>username :</div>
            <div style={styles.text}>{value.username}</div>
          </div>
          <div style={styles.items}>
            <div style={styles.text}>{value.post.length} posts</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchMapUser;
