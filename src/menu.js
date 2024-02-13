import burgerImg1 from "./img/burger1.jpg";
import burgerImg2 from "./img/burger2.jpg";
import burgerImg3 from "./img/burger3.jpg";
import burgerImg4 from "./img/burger4.jpg";
import burgerImg5 from "./img/burger5.jpg";
import burgerImg6 from "./img/burger6.jpg";
import burgerImg8 from "./img/burger8.jpg";
import burgerImg9 from "./img/burger9.jpg";

class FoodItem {
  constructor(id, headline, imgURL, desc, price) {
    this.id = id;
    this.headline = headline;
    this.imgURL = imgURL;
    this.desc = desc;
    this.price = price;
  }
}

function generateFoodItemHTML(foodItems) {
  // Container for all food items
  const container = document.createElement("div");
  container.classList.add("w-full", "max-w-6xl", "p-10", "mx-auto", "relative");

  foodItems.forEach((item) => {
    // Container for a single food item
    const itemElement = document.createElement("div");
    itemElement.classList.add("food-item", `id-${item.id}`, "p-10");

    // Inner container for a single food item
    const itemElementInner = document.createElement("div");
    itemElementInner.classList.add("md:flex", "items-center", "-mx-10");
    itemElement.appendChild(itemElementInner);

    // Left part of a single food item
    const itemElementLeft = document.createElement("div");
    itemElementLeft.classList.add("w-full", "md:w-1/2", "mb-10", "md:mb-0");
    itemElementInner.appendChild(itemElementLeft);

    // Food item image
    const itemImage = new Image();
    itemImage.classList.add("shadow-xl");
    itemImage.src = item.imgURL;
    itemElementLeft.appendChild(itemImage);

    // Right part of a single food item
    const itemElementRight = document.createElement("div");
    itemElementRight.classList.add("w-full", "md:w-1/2", "md:px-10");
    itemElementInner.appendChild(itemElementRight);

    // Food item title
    const itemName = document.createElement("h2");
    itemName.classList.add(
      "font-bold",
      "uppercase",
      "text-3xl",
      "mb-5",
      "text-fuchsia-300"
    );
    itemName.textContent = item.headline;
    itemElementRight.appendChild(itemName);

    // Food item description
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("text-lg", "text-fuchsia-400");
    itemDescription.textContent = item.desc;
    itemElementRight.appendChild(itemDescription);

    // Food item price container
    const itemPriceContainer = document.createElement("div");
    itemPriceContainer.classList.add(
      "block",
      "align-bottom",
      "mt-8",
      "text-fuchsia-300",
      "font-bold"
    );
    itemElementRight.appendChild(itemPriceContainer);

    // Food item price (1)
    const itemPrice1 = document.createElement("span");
    itemPrice1.classList.add("text-2xl", "leading-none", "align-baseline");
    itemPrice1.textContent = "€";
    itemPriceContainer.appendChild(itemPrice1);

    // Food item price (2)
    const itemPrice2 = document.createElement("span");
    itemPrice2.classList.add("text-5xl", "leading-none", "align-baseline");
    const getNumberParts = item.price.split(".");
    itemPrice2.textContent = getNumberParts[0];
    itemPriceContainer.appendChild(itemPrice2);

    // Food item price (3)
    const itemPrice3 = document.createElement("span");
    itemPrice3.classList.add("text-2xl", "leading-none", "align-baseline");
    itemPrice3.textContent = `.${getNumberParts[1]}`;
    itemPriceContainer.appendChild(itemPrice3);

    container.appendChild(itemElement);
  });

  const copyright = document.createElement("p");
  copyright.classList.add("text-gray-600");
  copyright.textContent = "All photos via unsplash.com";
  container.appendChild(copyright);

  return container;
}

const foodItems = [
  new FoodItem(
    "1",
    "The Flavor Bomb",
    burgerImg1,
    "Stacked with caramelized onions, crispy bacon, melty pepper jack cheese, and a spicy secret sauce.",
    "9.99"
  ),
  new FoodItem(
    "2",
    "The Carnivore's Delight",
    burgerImg2,
    "Jalapeños, fiery pepper relish, molten cheese sauce, and a sprinkle of crushed tortilla chips for extra crunch.",
    "12.99"
  ),
  new FoodItem(
    "3",
    "Hot Mess Express",
    burgerImg3,
    "Double beef patty, extra bacon, pulled pork, and a fried egg for good measure. A true meat lover's feast.",
    "7.99"
  ),
  new FoodItem(
    "4",
    "The Mac Daddy",
    burgerImg4,
    "Beef patty nestled on a bed of creamy mac and cheese, topped with crispy breadcrumbs. Decadence redefined.",
    "10.49"
  ),
  new FoodItem(
    "5",
    "Sweet 'n' Smoky Stack",
    burgerImg5,
    "Sweet barbecue sauce, smoked gouda, maple-glazed bacon, and a tangy onion ring. A flavor rollercoaster.",
    "10.99"
  ),
  new FoodItem(
    "6",
    "The Hangover Helper",
    burgerImg6,
    "Crispy hashbrown patty, melty cheddar, a fried egg, and a drizzle of hollandaise sauce. Breakfast meets burger paradise.",
    "13.99"
  ),
  new FoodItem(
    "8",
    "PB&J Blitz",
    burgerImg8,
    "A daring combo! Savory beef patty, melted peanut butter, sweet and spicy jalapeno jelly, and crunchy bacon.",
    "12.99"
  ),
  new FoodItem(
    "9",
    "The Waffle Craze",
    burgerImg9,
    "Burger sandwiched between two crisp waffles, a drizzle of maple syrup, and a side of crispy fried chicken. Sweet, savory, and utterly mind-blowing.",
    "16.49"
  ),
];

const foodItemsHTML = generateFoodItemHTML(foodItems);

export default foodItemsHTML;
