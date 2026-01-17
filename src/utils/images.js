const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

export function getImage(fileName) {
    return images[`../assets/${fileName}`];
}