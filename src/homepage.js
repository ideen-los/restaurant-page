import burger from "./img/burger.png";

function homepage() {
  const container = document.createElement("div");
  container.classList.add(
    "w-full",
    "flex",
    "flex-col",
    "items-center",
    "max-w-6xl",
    "mx-auto",
    "md:mt-12",
    "p-6"
  );

  const headline = document.createElement("h1");
  headline.textContent = "Big Burger Madness";
  headline.classList.add(
    "block",
    "font-sans",
    "text-5xl",
    "md:text-7xl",
    "font-bold",
    "leading-tight",
    "tracking-normal",
    "antialiased",
    "text-fuchsia-300",
    "text-center"
  );
  container.appendChild(headline);

  const para = document.createElement("p");
  para.textContent = "Get ready for a juicy, messy, mind-blowing experience!";
  para.classList.add(
    "font-sans",
    "text-xl",
    "md:text-2xl",
    "font-semibold",
    "text-fuchsia-400",
    "mt-2",
    "text-center"
  );
  container.appendChild(para);

  const img1 = new Image();
  img1.src = burger;
  img1.classList.add(
    "md:ml-20",
    "md:mt-10",
    "mt-7",
    "max-w-screen-sm",
    "w-full"
  );
  container.appendChild(img1);

  return {
    container,
  };
}

export default homepage;
