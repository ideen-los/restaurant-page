import map from "./img/map.jpg";

function about() {
  const headline = document.createElement("h1");
  headline.textContent = "We are here";

  const mapImg = new Image();
  mapImg.src = map;
  mapImg.classList.add("map");

  const para1 = document.createElement("p");
  para1.innerHTML = "Awesome Restaurant</br>A Street name 65</br>51187 Mainz";

  return {
    headline,
    mapImg,
    para1,
  };
}

export default about;
