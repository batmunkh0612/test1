import { data } from "./footer/data";

function FooterImage() {
  const style = {
    container: {
      display: "flex",
      width: "100vw",
      height: "35%",
    },
    mapImg: {
      width: "20%",
      height: "100%",
    },
  };
  return (
    <div style={style.container}>
      {data &&
        data.map((el) => {
          return <img style={style.mapImg} src={el.image} alt={el.image} />;
        })}
    </div>
  );
}

export default FooterImage;
