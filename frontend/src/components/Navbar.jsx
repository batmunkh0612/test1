import { Link } from "react-router-dom";
import { data } from "./navbar/data";

function Navbar() {
  return (
    <>
      <div className="flex justify-center w-full gap-8 mt-6">
        {data &&
          data.map((el) => {
            return (
              <Link
                key={Math.random()}
                to={`/${el.jump}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="helper">
                  <div className="overflow-hidden bg-black w-fit h-fit">
                    <img
                      className="transition-all duration-300 cursor-pointer image"
                      src={el.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-base font-bold cursor-pointer">
                    {el.text}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Navbar;
