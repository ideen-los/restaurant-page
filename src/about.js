function about() {
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("absolute", "inset-0", "-top-8");

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75358.986360006!2d8.62510275701707!3d53.82563934398899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b403da2ff33149%3A0x426cf7763006b30!2sCuxhaven!5e0!3m2!1sde!2sde!4v1707776943226!5m2!1sde!2sde";
  iframe.height = "100%";
  iframe.width = "100%";
  iframeContainer.appendChild(iframe);

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add(
    "md:container",
    "md:px-5",
    "md:py-24",
    "md:mx-auto",
    "md:flex",
    "w-full",
    "h-full"
  );

  const about = document.createElement("div");
  about.classList.add(
    "lg:w-1/3",
    "md:w-1/2",
    "bg-gray-800",
    "p-8",
    "flex",
    "flex-col",
    "md:ml-auto",
    "w-full",
    "mt-10",
    "md:mt-0",
    "md:relative",
    "absolute",
    "z-1",
    "shadow-xl",
    "text-fuchsia-400",
    "md:relative",
    "bottom-0"
  );
  aboutContainer.appendChild(about);

  const title = document.createElement("h1");
  title.classList.add(
    "text-xl",
    "font-bold",
    "uppercase",
    "mb-6",
    "hidden",
    "sm:block"
  );
  title.textContent = "Grab your burger";
  about.appendChild(title);

  const headline = document.createElement("h2");
  headline.classList.add("font-bold");
  headline.textContent = "Big Burger Madness";
  about.appendChild(headline);

  const para1 = document.createElement("p");
  para1.classList.add("font-bold", "mb-6");
  para1.innerHTML = "Am Strand 1A</br>51187 Cuxhaven";
  about.appendChild(para1);

  const tel = document.createElement("p");
  tel.textContent = "+49 4721 22998";
  about.appendChild(tel);

  const email = document.createElement("a");
  email.classList.add("self-start", "border-b", "border-gray-800");
  email.href = "mailto:hello@bigburgermadness.com";
  email.textContent = "hello@bigburgermadness.com";
  about.appendChild(email);

  return {
    iframeContainer,
    aboutContainer,
  };
}

export default about;
