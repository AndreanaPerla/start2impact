import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import FavoriteCard from "../components/FavoriteCard";

function Favorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      {favorites.length > 0 ? (
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.key}
              id={favorite.id}
              title={favorite.title}
              time={favorite.time}
              people={favorite.people}
              instructions={favorite.instructions}
            />
          ))}
        </div>
      ) : (
        <h2 style={{ width: "90%", margin: "0 auto" }}>
          No recipe in your list, add some!
        </h2>
      )}
    </div>
  );
}

export default Favorites;
