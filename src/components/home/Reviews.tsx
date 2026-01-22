import {getImage} from "../../utils/images";

import { useState } from "react";
import { motion } from "framer-motion";

type Review = {
    name: string;
    occasion: string;
    text: string;
    stars: number;
    initial: string;
};

const REVIEWS: Review[] = [
    {
        name: "Sarah M.",
        occasion: "Birthday Party",
        text: "Absolutely stunning! The strawberries were fresh, the chocolate was perfectly tempered, and the presentation was beautiful.",
        stars: 5,
        initial: "S",
    },
    {
        name: "Michael R.",
        occasion: "Anniversary",
        text: "The gift box was a hit—variety was impressive and delivery was on time. Will definitely order again!",
        stars: 5,
        initial: "M",
    },
    {
        name: "Jessica L.",
        occasion: "Wedding Event",
        text: "Professional, on-time, and the strawberries were the talk of the evening. Highly recommend!",
        stars: 5,
        initial: "J",
    },
];

export default function ReviewsSection() {
    const strawberrySrc = getImage("strawberry.png");

    return (
        <section className="bg-[#fbf7f4] py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
                        Testimonials
                    </div>
                    <h2 className="mt-4 font-serif text-4xl text-neutral-900">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
                        Click the strawberry to reveal the review 🍓
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-7 md:grid-cols-3">
                    {REVIEWS.map((review) => (
                        <ReviewCard key={review.name} review={review} strawberrySrc={strawberrySrc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({
                        review,
                        strawberrySrc,
                    }: {
    review: Review;
    strawberrySrc: string;
}) {
    const [revealed, setRevealed] = useState(false);

    const strawberryVariants = {
        hidden: { y: 0, rotate: 0, opacity: 1 },
        drop: {
            rotate: [0, -6, 6, -5, 5, -3, 3, 0],
            y: [0, 0, 0, 0, 0, "140%"],
            opacity: [1, 1, 1, 1, 1, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    };

    return (
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            {/* Review - underneath*/}
            <div className="absolute inset-0 z-0 p-7 pt-8">
                <Stars count={review.stars} />

                <p className="mt-4 text-sm leading-6 text-neutral-700">
                    “{review.text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                        {review.initial}
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-neutral-900">
                            {review.name}
                        </div>
                        <div className="text-xs text-neutral-500">
                            {review.occasion}
                        </div>
                    </div>
                </div>
            </div>

            {/* Strawberry cover */}
            <motion.button
                type="button"
                onClick={() => setRevealed(true)}
                className="absolute inset-0 z-10 grid place-items-center bg-[#fbf7f4] focus:outline-none"
                initial="hidden"
                animate={revealed ? "drop" : "hidden"}
                variants={strawberryVariants}
                aria-label="Reveal review"
            >
                <img
                    src={strawberrySrc}
                    alt=""
                    draggable={false}
                    className="h-[220px] w-[220px] select-none"
                />

                {!revealed && (
                    <div className="absolute bottom-6 text-xs text-neutral-500">
                        Click to reveal 🍓
                    </div>
                )}
            </motion.button>
        </div>
    );
}

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? "opacity-100" : "opacity-30"}>
          ★
        </span>
            ))}
        </div>
    );
}
