function menu() {
  const headline = document.createElement("h1");
  headline.textContent = "We are here";

  const map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8794.437612496251!2d8.232631205603688!3d49.997448157528446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd975c7c834703%3A0xf098ff597aeeb48e!2sthe%20niu%20Mood!5e0!3m2!1sde!2sde!4v1707250724535!5m2!1sde!2sde"
  );
  map.style.width = "600px";
  map.style.height = "450px";

  const para1 = document.createElement("p");
  para1.innerHTML = "Awesome Restaurant</br>A Street name 65</br>51187 Mainz";

  return {
    headline,
    map,
    para1,
  };
}

export default menu;
