const images = import.meta.glob("/src/assets/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

export function getImage(fileName) {
    return images[`/src/assets/${fileName}`];
}