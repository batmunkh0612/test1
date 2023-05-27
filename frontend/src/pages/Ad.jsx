import Footer from "../components/Footer";
import MainHeader from "../components/mainHeader";

const Ad = () => {
  const style = {
    main: {
      display: "Flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      justifyContent: "space-between",
    },
    container: {
      display: "Flex",
      height: "80vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
    },
    helper: {
      border: "1px solid red",
      width: "50vw",
      height: "40vh",
    },
  };
  return (
    <div style={style.main}>
      <MainHeader></MainHeader>
      <div style={style.container}>
        <div style={style.helper}></div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Ad;
