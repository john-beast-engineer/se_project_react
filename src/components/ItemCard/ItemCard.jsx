import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike({ id: item._id, isLiked });
  };

  const isLiked = item.likes.some((id) => id === currentUser._id);

  return (
    <li className="card" onClick={handleClick}>
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          type="button"
          className={`card__like-btn ${isLiked ? "card__like-btn_active" : ""}`}
          onClick={handleLike}
        />
      </div>
      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
