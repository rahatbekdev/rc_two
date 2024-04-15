import Button from "./UI/button/Button";
import data from "../components/data/data";
import "./card.css";
import img from "./data/ratings/rating-0.png";

const Card = () => {
  return (
    <div className="b1">
      {data.map((el, id) => (
        <div key={id} className="f2">
          <div className="f1">
            <img className="imageProduct" src={el.image} alt="" />
            <span>{el.name}</span>
            <p>{el.rating.stars}</p>
            <p>{el.rating.count}</p>
            <img src={img} alt="" />
          </div>
        </div>
      ))}
      <Button nameBtn="delete" />
    </div>
  );
};

export default Card;
