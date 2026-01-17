import {getImage} from "../utils/images.js";

export const products = [
    {
        id: 1,
        tag: "Bestseller",
        name: "Classic Dark Chocolate",
        desc: "Fresh strawberries dipped in rich Beligan dark chocolate with elegant white drizzle.",
        price: 24.99,
        image: getImage("product-classic.jpg"),
        theme: "dark",
    },
    {
        id: 2,
        tag: "Holiday",
        name: "Party Sprinkle Mix",
        desc: "Dark chocolate with rainbow sprinkles and crunchy toppings-perfect for celebrations",
        price: 29.99,
        image: getImage("product-deluxe.jpg"),
        theme: "light",
    },
    {
        id: 3,
        tag: "Gift Ready",
        name: "Signature Gift Box",
        desc: "An assortment of our finest chocolate covered strawberries-beautifully arranged.",
        price: 49.99,
        image: getImage("product-gift-box.jpg"),
        theme: "dark",
    },
    {
        id: 4,
        tag: "Premium",
        name: "White Chocolate Gold",
        desc: "Creamy white chocolate with edible gold accents. The ultimate luxury treat.",
        price: 34.99,
        image: getImage("product-white-chocolate.jpg"),
        theme: "pink",
    },
];