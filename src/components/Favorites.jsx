import React from "react";
import { useGlobalContext } from "../context";

const Favorites = () => {
  const { removeFromFavorites, favorites, selectMeal } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((meal) => {
            const { strMealThumb: image, idMeal } = meal;
            console.log(image);
            return (
              <div
                onClick={() => selectMeal(idMeal, true)}
                key={idMeal}
                className="favorite-item"
              >
                <img src={image} className="favorites-img img" />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
