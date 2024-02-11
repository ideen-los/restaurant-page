export class FoodItem {
  constructor(id, headline, imgURL, price) {
    this.id = id;
    this.headline = headline;
    this.imgURL = imgURL;
    this.price = price;
  }
}

export function generateFoodItemHTML(foodItems) {
  const container = document.createElement("div");

  foodItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("food-item", `food-item-id-${item.id}`);

    const itemName = document.createElement("h2");
    itemName.textContent = item.headline;
    itemElement.appendChild(itemName);

    const itemImage = new Image();
    itemImage.src = item.imgURL;
    itemElement.appendChild(itemImage);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price;
    itemElement.appendChild(itemPrice);

    container.appendChild(itemElement);
  });

  return container;
}
