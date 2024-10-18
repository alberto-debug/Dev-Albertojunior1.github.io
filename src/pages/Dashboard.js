import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <div className="dash--page">
      <div className="dash--top">
        <div className="options--top">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="text--top">
          <span style={{ color: "#FF7622" }}>DELIVER TO</span> <br /> Halal Lab
          Office
        </div>
        <div class="inbox-btn">
          <FontAwesomeIcon icon={faBasketShopping} className="svgg" />
          <span class="msg-count">2</span>
        </div>
      </div>
      <p className="greetings">
        Hey, <span>Good Afternoon!</span>
      </p>
      <div className="search--div">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search dishes, restaurants" />
      </div>
      <div>
        <p>All Categories</p>
        <div>See All</div>
      </div>
      <div>
        <p>Open Restaurants</p>
        <div>See All</div>
      </div>
      <div>
        <img src="" alt="" />
        <h2>Collins' Bar & Restaurant</h2>
      </div>
    </div>
  );
}
