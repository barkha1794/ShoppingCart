type itemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const items: itemType[] = [
  {
    id: 1,
    name: "Book",
    price: 10.99,
    imgUrl:
      "https://content.jdmagicbox.com/comp/hyderabad/s6/040pxx40.xx40.170805144926.f9s6/catalogue/infozone-book-show-beeramguda-hyderabad-technical-books-jvp8k0xobz.jpg"
  },
  {
    id: 2,
    name: "Computer",
    price: 1199,
    imgUrl:
      "https://i.gadgets360cdn.com/large/apple_macbook_air_M1_2020_review_thumb_1607599161131.jpg"
  },
  {
    id: 3,
    name: "Banana",
    price: 1.05,
    imgUrl:
      "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"
  },
  {
    id: 4,
    name: "Car",
    price: 210.99,
    imgUrl:
      "https://ak.picdn.net/offset/photos/5efe626aa75ca0db370976ae/medium/photo.jpg"
  }
];
