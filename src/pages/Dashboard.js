import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import restaurant1 from "../images/restaurant1.jpg";
import breakfast from "../images/breakfast.jpg";
import lunch from "../images/lunch.jpg";
import dinner from "../images/dinner.jpg";
import snacks from "../images/snacks.jpg";

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
      <div className="categories--div">
        <p>All Categories</p>
        <div>See All</div>
      </div>
      <div className="container--div">
        <div className="container--content">
          <div>
            {" "}
            <img src={snacks} />{" "}
          </div>
          <p>All</p>
        </div>
        <div className="container--content">
          <div>
            <img src={breakfast} />{" "}
          </div>
          <p>Breakfast</p>
        </div>
        <div className="container--content">
          <div>
            <img src={lunch} />{" "}
          </div>
          <p>Lunch</p>
        </div>
        <div className="container--content">
          <div>
            <img src={dinner} />{" "}
          </div>
          <p>Dinner</p>
        </div>
      </div>
      <div className="categories--div">
        <p>Open Restaurants</p>
        <div>See All</div>
      </div>
      <div className="open--restaurants">
        <div className="restaurant--card">
          <img src={restaurant1} alt="collins' restaurant" />
          <h2>Collins' Bar & Restaurant</h2>
        </div>
        <div className="restaurant--card">
          <img src={restaurant1} alt="collins' restaurant" />
          <h2>Collins' Bar & Restaurant</h2>
        </div>
      </div>
    </div>
  );
}
