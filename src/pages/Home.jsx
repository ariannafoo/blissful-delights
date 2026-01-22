import HeroCarousel from "../components/home/HeroCarousel.jsx";
import Collection from "../components/home/Collection.jsx";
import GalleryPreview from "../components/home/GalleryPreview.jsx";
import ReviewsSection from "../components/home/Reviews.tsx";

export default function Home() {
    return (
        <>
            <HeroCarousel></HeroCarousel>
            <Collection></Collection>
            <GalleryPreview></GalleryPreview>
            <ReviewsSection></ReviewsSection>
        </>
    );
}