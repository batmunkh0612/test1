import React from "react";
import "./AboutUs.css";
function AboutUs() {
  const data = [
    {
      img: "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/324259259_565764695569197_5052157878188652179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qCbBEPQuTj4AX9ANhVP&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAttYDY9SJBhngtCXIJXIdBAAiMzdnZTnCaXJcKCMa80w&oe=64737925",
      name: "Мөнх-Эрдэнэ",
      discord: "99179429",
    },
    {
      img: "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/338142679_1615620078920048_3126659655933305119_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l1fE34blcNcAX83-sXP&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDRY01jM8qw3aGZDgVkZTywDAMteuj1H15WTYCEwTm5kQ&oe=647464F7",
      name: "Барсболд",
      discord: "89879498",
    },
    {
      img: "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/332500556_592814506226351_851377547943461920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6JKFCF0OAycAX-5GIW7&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDUJcNVY1NyYyRUKtXohyMq-IQZsg0bjASVyyZWrpux8g&oe=64739B22",
      name: "Мөнх-Оргил",
      discord: "orgil #3034",
    },
    {
      img: "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/324259259_565764695569197_5052157878188652179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qCbBEPQuTj4AX9ANhVP&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAttYDY9SJBhngtCXIJXIdBAAiMzdnZTnCaXJcKCMa80w&oe=64737925",
      name: "Өсөх-Ирээдүй",
      discord: "usukh-ireedui #8810",
    },
  ];
  return (
    <div className="aboutContainer">
      <div className="AboutSite">
        <div className="zorilgo">
          <strong className="strong">Зорилго</strong>
          <div className="hello">
            Манай хамт олон Монголд болон гадаадад байрлах хамгийн сайн
            үйлчилгээтэй үйлчилгээний байгууллагыг танд санал болгохыг зорино.{" "}
          </div>
        </div>
        <div className="zorilt">
          <strong className="strong">Зорилт</strong>
          <div className="hello">
            Манай веб Монгол болон гадаад үйлчилгээний газруудын өрсөлдөх
            чадамжийг нэмэгдүүлэхэд бидний зорилт болно.
          </div>
        </div>
      </div>
      <div className="miniContainer">
        {data &&
          data.map((el) => {
            return (
              <div className="profile" key={Math.random()}>
                <img className="img" src={el.img} alt="" />
                <div className="names">{el.name}</div>
                <div className="discord">{el.discord}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AboutUs;
