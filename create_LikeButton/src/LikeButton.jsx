import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let Likestyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i style={Likestyle} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
