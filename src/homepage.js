import burger from "./img/burger.png";

function homepage() {
  const headline = document.createElement("h1");
  headline.textContent = "Big Burger Madness";
  headline.classList.add(
    "block",
    "font-sans",
    "text-7xl",
    "font-bold",
    "leading-tight",
    "tracking-normal",
    "antialiased",
    "text-fuchsia-300"
  );

  const para = document.createElement("p");
  para.textContent = "Get ready for a juicy, messy, mind-blowing experience.";
  para.classList.add(
    "font-sans",
    "text-2xl",
    "font-semibold",
    "text-fuchsia-400",
    "mt-2"
  );

  const img1 = new Image();
  img1.src = burger;
  img1.classList.add("ml-20", "mt-10", "max-w-screen-sm");

  return {
    headline,
    para,
    img1,
  };
}

export default homepage;
