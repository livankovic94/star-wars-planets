import React from "react";
import "../styles/style.css";

function HeaderView() {
  return (
    <div className="header__view">
      <img
        alt="DeathStar"
        className="header__image"
        src="https://images-na.ssl-images-amazon.com/images/I/41wa5VvUboL._SX355_.jpg"
      />
      <span className="header__title">Star Wars Planterium</span>
    </div>
  );
}

export default HeaderView;
