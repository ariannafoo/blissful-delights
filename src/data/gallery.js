import {getImage} from "../utils/images.js";

// TODO - change images + title + desc to match categories

export const galleryCategories = [
    // WEDDINGS
    {
        id: "Weddings",
        title: "Wedding Reception",
        subtitle: "Elegant desserts for unforgettable \"I do\" moments.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "wed-1",
                title: "Wedding Reception",
                desc: "Elegant desserts for unforgettable \"I do\" moments.",
                src: getImage("gallery-1.jpg")
            },
            {
                id: "wed-2",
                title: "Wedding Reception",
                desc: "Elegant desserts for unforgettable \"I do\" moments.",
                src: getImage("gallery-2.jpg")
            }
        ],
    },
    // BIRTHDAYS
    {
        id: "Birthdays",
        title: "Birthday Celebration",
        subtitle: "Celebrate every year with something sweet and special.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "bday-1",
                title: "Birthday Celebration",
                desc: "Celebrate every year with something sweet and special.",
                src: getImage("gallery-2.jpg")
            },
            {
                id: "bday-2",
                title: "Birthday Celebration",
                desc: "Celebrate every year with something sweet and special.",
                src: getImage("gallery-4.jpg")
            }
        ],
    },
    // CORPORATE EVENTS
    {
        id: "Corporate",
        title: "Corporate Events",
        subtitle: "Polished treats designed to impress clients and colleagues.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "corp-1",
                title: "Corporate Events",
                desc: "Polished treats designed to impress clients and colleagues.",
                src: getImage("gallery-3.jpg")
            },
            {
                id: "corp-2",
                title: "Corporate Events",
                desc: "Polished treats designed to impress clients and colleagues.",
                src: getImage("gallery-6.jpg")
            }
        ],
    },
    // JUST BECAUSE
    {
        id: "Because",
        title: "Just Because",
        subtitle: "Thoughtful surprises-no occasion needed.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "jbcuz-1",
                title: "Just Because",
                desc: "Thoughtful surprises-no occasion needed.",
                src: getImage("gallery-4.jpg")
            },
            {
                id: "jbcuz-2",
                title: "Just Because",
                desc: "Thoughtful surprises-no occasion needed.",
                src: getImage("gallery-2.jpg")
            }

        ],
    },
    // SPECIAL EVENTS
    {
        id: "Events",
        title: "Special Events",
        subtitle: "Beautiful strawberries for life's meaningful milestones.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "evnt-1",
                title: "Special Events",
                desc: "Beautiful strawberries for life's meaningful milestones.",
                src: getImage("gallery-5.jpg")
            },
            {
                id: "evnt-2",
                title: "Special Events",
                desc: "Beautiful strawberries for life's meaningful milestones.",
                src: getImage("gallery-4.jpg")
            }
        ],
    },
    // HOLIDAYS
    {
        id: "Holidays",
        title: "Holidays",
        subtitle: "Seasonal favourites crafted for every festive moment.",
        cover: getImage("product-gift-box.jpg"),
        items: [
            {
                id: "hdays-1",
                title: "Holidays",
                desc: "Seasonal favourites crafted for every festive moment.",
                src: getImage("gallery-6.jpg")
            },
            {
                id: "hdays-2",
                title: "Holidays",
                desc: "Seasonal favourites crafted for every festive moment.",
                src: getImage("gallery-6.jpg")
            }
        ],
    },
]

// Get first image from each category
export const galleryPreview = galleryCategories.map((cat) => ({
    ...cat.items[0],
    category: cat.id,
}));