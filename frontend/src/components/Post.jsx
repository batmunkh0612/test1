import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Post({ value }) {
  const [rate, SetRate] = useState("");
  const [type, setType] = useState("");
  const handleChange = (rate) => {
    SetRate(rate.value);
  };
  const handleChanges = (type) => {
    setType(type.value);
  };
  const Navigate = useNavigate();

  const style = {
    container: {
      width: "100vw",
      height: "100vh",
      display: value,
      position: "fixed",
      zIndex: "1",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    inputMain: {
      width: "40vw",
      height: "30vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "10px",
      gap: "1rem",
    },
    input: {
      width: "27vw",
      height: "3vh",
      border: "0.5px solid gray",
      borderRadius: "3px",
      padding: "1rem",
    },
    noneInput: {
      height: "3vh",
      width: "15vw",
    },
    button: {
      height: "4.5vh",
      width: "20vw",
      marginTop: "1vh",
    },
    title: {
      display: "flex",
      alignItems: "flex-start",
    },
    noneInputMain: {
      display: "flex",
      flexDirection: "row",
      gap: "1vw",
    },
  };
  const rates = [
    { value: "0.5", label: "0.5" },
    { value: "1", label: "1" },
    { value: "1.5", label: "1.5" },
    { value: "2", label: "2" },
    { value: "2.5", label: "2.5" },
    { value: "3", label: "3" },
    { value: "3.5", label: "3.5" },
    { value: "4", label: "4" },
    { value: "1.5", label: "4.5" },
    { value: "5", label: "5" },
  ];
  const types = [
    { value: "Repair", label: "Засвар үйлчилгээ" },
    { value: "Relax", label: "Амралт" },
    { value: "Travel", label: "Аялал зугаалга" },
    { value: "Franchise", label: "Франчайз" },
    { value: "Massage", label: "Массаж" },
    { value: "Health", label: "Эрүүл мэнд" },
  ];

  const text = useRef();
  const title = useRef();
  const locate = useRef();
  const name = useRef();
  const img = useRef();

  const createPost = async () => {
    try {
      if (img.current.value === "") {
        await instance.post("/Post", {
          rate: rate,
          type: type,
          text: text.current.value,
          title: title.current.value,
          locate: locate.current.value,
          name: name.current.value,
          token: JSON.parse(localStorage.getItem("token")),
          user_id: JSON.parse(localStorage.getItem("user_id")),
        });
        Navigate(`/${JSON.parse(localStorage.getItem("user_id"))}`);
      } else {
        await instance.post("/Post", {
          rate: rate,
          type: type,
          text: text.current.value,
          title: title.current.value,
          locate: locate.current.value,
          name: name.current.value,
          img: img.current.value,
          token: JSON.parse(localStorage.getItem("token")),
          user_id: JSON.parse(localStorage.getItem("user_id")),
        });
        Navigate(`/${JSON.parse(localStorage.getItem("user_id"))}`);
      }
      toast("Succesfull");
    } catch (error) {
      toast.error("Дээрх бүгдийг бөглөнө үү");
      console.log(error);
    }
  };

  return (
    <div style={style.container}>
      <div style={style.main}>
        <div style={style.inputMain}>
          <div style={style.title}>Create a post!</div>
          <input
            style={style.input}
            ref={title}
            type="text"
            placeholder="Гарчиг"
          />

          <input
            style={style.input}
            ref={locate}
            type="text"
            placeholder="Байршил"
          />
          <input
            style={style.input}
            ref={img}
            type="text"
            placeholder="Зураг(url)"
          />
          <input
            style={style.input}
            ref={text}
            type="text"
            placeholder="Бичвэр"
          />
          <input
            style={style.input}
            ref={name}
            type="text"
            placeholder="Байгуулгын нэр"
          />
          <div style={style.noneInputMain}>
            <div style={style.noneInput}>
              <Select
                onChange={handleChange}
                placeholder="Үнэлгээ"
                options={rates}
              />
            </div>

            <div style={style.noneInput}>
              <Select
                style={style.noneInput}
                onChange={handleChanges}
                placeholder="Үйлчилгээний төрөл"
                options={types}
              />
            </div>
          </div>
          <Button style={style.button} onClick={createPost} variant="dark">
            Post
          </Button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
