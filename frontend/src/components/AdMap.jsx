import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdTitle from "./Ad/Adtitle";

const AdMap = () => {
  const slides = [
    {
      src: "https://cumongol.mn/wp-content/uploads/2023/03/BAT5511-copy-2.jpg",
      alt: "",
      caption: (
        <AdTitle>
          Бид 300 дахь салбараа нээж, франчайз хөтөлбөрөө эхлүүллээ
        </AdTitle>
      ),
    },
    {
      src: "https://news.mn/wp-content/uploads/2018/11/46260404_2233495960265459_861388839770390528_n.jpg",
      alt: "",
      caption: (
        <AdTitle>
          Улсын 1-р төв эмнэлэг "элэг шилжүүлэн суулгах-200" дахь мэс заслаа
          амжилттай хийлээ
        </AdTitle>
      ),
    },
    {
      src: "http://stepperiders.mn/wp-content/uploads/2015/12/3.jpg",
      alt: "Third slide",
      caption: <AdTitle>Stepperiders.mn</AdTitle>,
    },
  ];

  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.src}>
          <img
            className="d-block w-100"
            style={{ height: "95vh" }}
            src={slide.src}
            alt={slide.alt}
          />
          <Carousel.Caption>{slide.caption}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AdMap;
