import "./style.css";
import picBanner from "@/../../public/image.png";
const Banner = () => {
  return (
    <div className="bigContainer">
      <div className="textContainer">
        <h2>
          Product for every need, at the
          <br />
          distance of a click
        </h2>
      </div>
      <img src={picBanner} alt="Beautiful woman in dress" />
    </div>
  );
};

export { Banner };