import Footer from "../components/Footer";
import MainHeader from "../components/mainHeader";

const Contact = () => {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={styles.main}>
      <div>
        <MainHeader />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
